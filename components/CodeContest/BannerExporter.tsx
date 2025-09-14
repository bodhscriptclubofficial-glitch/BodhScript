import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import html2canvas from 'html2canvas';
import { Download, Camera, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';

interface BannerExporterProps {
  targetRef: React.RefObject<HTMLElement>;
  filename?: string;
}

export function BannerExporter({ targetRef, filename = 'code-contest-banner' }: BannerExporterProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [exportError, setExportError] = useState(false);

  const exportToPNG = async () => {
    if (!targetRef.current) return;

    setIsExporting(true);
    setExportSuccess(false);
    setExportError(false);

    try {
      // Wait longer to ensure animations settle
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Starting export process...');
      
      const element = targetRef.current;
      
      // More robust html2canvas configuration
      const canvas = await html2canvas(element, {
        backgroundColor: '#1e1b4b',
        scale: 3, // Even higher resolution
        useCORS: true,
        allowTaint: true,
        foreignObjectRendering: true,
        logging: true, // Enable logging for debugging
        width: element.offsetWidth,
        height: element.offsetHeight,
        scrollX: 0,
        scrollY: 0,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        imageTimeout: 15000, // Longer timeout
        removeContainer: false,
        ignoreElements: (element) => {
          return element.classList.contains('export-ignore');
        },
        onclone: (clonedDoc) => {
          // Ensure fonts are loaded in cloned document
          const link = clonedDoc.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
          clonedDoc.head.appendChild(link);
        }
      });

      console.log('Canvas created:', canvas.width, 'x', canvas.height);

      // Convert to blob for better handling
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
        }, 'image/png', 1.0);
      });

      if (!blob) {
        throw new Error('Failed to create blob');
      }

      // Create download using blob URL
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `${filename}-${new Date().toISOString().slice(0, 10)}.png`;
      link.href = url;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up blob URL
      setTimeout(() => URL.revokeObjectURL(url), 100);

      console.log('Export successful!');
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);
      
    } catch (error) {
      console.error('Export failed:', error);
      setExportError(true);
      setTimeout(() => setExportError(false), 3000);
      
      // Fallback: Try basic screenshot instructions
      alert(`Export failed. Please try:\n1. Right-click on the banner\n2. Select "Inspect Element"\n3. Right-click on the banner div\n4. Choose "Capture node screenshot"`);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="export-ignore"
    >
      <Button
        onClick={exportToPNG}
        disabled={isExporting}
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
        size="lg"
      >
        <motion.div
          className="flex items-center gap-2"
          animate={isExporting ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.5, repeat: isExporting ? Infinity : 0 }}
        >
          {exportSuccess ? (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 15 }}
              >
                <CheckCircle className="w-5 h-5" />
              </motion.div>
              Exported Successfully!
            </>
          ) : exportError ? (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 15 }}
              >
                <AlertCircle className="w-5 h-5" />
              </motion.div>
              Export Failed - Try Manual
            </>
          ) : isExporting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Camera className="w-5 h-5" />
              </motion.div>
              Capturing Banner...
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              Export as PNG
            </>
          )}
        </motion.div>
      </Button>
      
      {/* Manual Export Instructions */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: exportError ? 1 : 0,
          height: exportError ? 'auto' : 0
        }}
        className="mt-2 text-xs text-gray-600 bg-yellow-50 p-2 rounded border overflow-hidden"
      >
        <p className="font-medium mb-1">Manual Export Steps:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Right-click on the banner below</li>
          <li>Select "Inspect Element"</li>
          <li>In dev tools, right-click the banner div</li>
          <li>Choose "Capture node screenshot"</li>
        </ol>
      </motion.div>
    </motion.div>
  );
}