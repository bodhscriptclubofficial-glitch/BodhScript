import React, { useState } from 'react';
import { toPng, toJpeg } from 'html-to-image';
import { Download, Image, Smartphone, Monitor } from 'lucide-react';

interface SmallBannerExporterProps {
  targetRef: React.RefObject<HTMLElement>;
  filename?: string;
}

export function SmallBannerExporter({ 
  targetRef, 
  filename = "contest-banner" 
}: SmallBannerExporterProps) {
  const [exporting, setExporting] = useState(false);
  const [exportFormat, setExportFormat] = useState<'png' | 'jpg'>('png');
  const [quality, setQuality] = useState<'small' | 'medium' | 'large'>('small');

  const getExportSettings = () => {
    const settings = {
      small: { width: 800, height: 400, scale: 1 },
      medium: { width: 1200, height: 600, scale: 1.5 },
      large: { width: 1600, height: 800, scale: 2 }
    };
    return settings[quality];
  };

  const exportBanner = async (format: 'png' | 'jpg') => {
    if (!targetRef.current) return;

    setExporting(true);
    try {
      const settings = getExportSettings();
      const options = {
        quality: format === 'jpg' ? 0.8 : 1,
        width: settings.width,
        height: settings.height,
        pixelRatio: settings.scale,
        backgroundColor: format === 'jpg' ? '#ffffff' : undefined,
        style: {
          transform: `scale(${settings.scale})`,
          transformOrigin: 'top left',
        }
      };

      let dataUrl: string;
      if (format === 'png') {
        dataUrl = await toPng(targetRef.current, options);
      } else {
        dataUrl = await toJpeg(targetRef.current, options);
      }

      // Create download link
      const link = document.createElement('a');
      link.download = `${filename}-${quality}.${format}`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try the manual export method.');
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Format and Quality Selection */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm text-gray-600 mb-2">Format</label>
          <div className="flex gap-2">
            <button
              onClick={() => setExportFormat('png')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                exportFormat === 'png' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              PNG (Transparent)
            </button>
            <button
              onClick={() => setExportFormat('jpg')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                exportFormat === 'jpg' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              JPG (Smaller)
            </button>
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-sm text-gray-600 mb-2">Size</label>
          <div className="flex gap-2">
            {(['small', 'medium', 'large'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setQuality(size)}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors flex items-center gap-1 ${
                  quality === size 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {size === 'small' && <Smartphone className="w-3 h-3" />}
                {size === 'medium' && <Image className="w-3 h-3" />}
                {size === 'large' && <Monitor className="w-3 h-3" />}
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Size Info */}
      <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
        <div className="flex justify-between">
          <span>Current settings:</span>
          <span>{getExportSettings().width}×{getExportSettings().height}px</span>
        </div>
        <div className="mt-1">
          <span className="text-green-600">
            Small: Perfect for social media • Medium: Great for websites • Large: Print quality
          </span>
        </div>
      </div>

      {/* Export Button */}
      <button
        onClick={() => exportBanner(exportFormat)}
        disabled={exporting}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <Download className="w-4 h-4" />
        {exporting ? 'Exporting...' : `Download ${exportFormat.toUpperCase()} (${quality})`}
      </button>

      {/* File Size Estimates */}
      <div className="text-xs text-gray-500 text-center">
        Estimated file size: 
        {quality === 'small' && (exportFormat === 'png' ? ' ~50-100KB' : ' ~30-60KB')}
        {quality === 'medium' && (exportFormat === 'png' ? ' ~150-300KB' : ' ~80-150KB')}
        {quality === 'large' && (exportFormat === 'png' ? ' ~400-800KB' : ' ~200-400KB')}
      </div>
    </div>
  );
}