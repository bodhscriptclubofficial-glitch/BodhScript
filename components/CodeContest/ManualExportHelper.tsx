import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Info, Copy, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

export function ManualExportHelper() {
  const [showInstructions, setShowInstructions] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const instructions = [
    {
      step: 1,
      title: "Open Browser DevTools",
      description: "Press F12 or right-click and select 'Inspect Element'"
    },
    {
      step: 2,
      title: "Find the Banner Element", 
      description: "Look for <div> with class containing 'bg-gradient-to-br from-purple-900'"
    },
    {
      step: 3,
      title: "Capture Screenshot",
      description: "Right-click the element → 'Capture node screenshot' (Chrome) or 'Screenshot Node' (Firefox)"
    }
  ];

  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Button
        onClick={() => setShowInstructions(!showInstructions)}
        variant="outline"
        className="flex items-center gap-2"
      >
        <Info className="w-4 h-4" />
        Manual Export Guide
      </Button>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: showInstructions ? 1 : 0,
          height: showInstructions ? 'auto' : 0
        }}
        className="overflow-hidden"
      >
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-4">
          <div className="flex items-center gap-2 text-blue-800">
            <Camera className="w-5 h-5" />
            <h3 className="font-medium">How to Export Banner as PNG</h3>
          </div>
          
          <div className="space-y-3">
            {instructions.map((instruction) => (
              <motion.div
                key={instruction.step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: instruction.step * 0.1 }}
                className="flex gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {instruction.step}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{instruction.title}</h4>
                  <p className="text-sm text-gray-600">{instruction.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t pt-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Element selector:</span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard('.bg-gradient-to-br.from-purple-900')}
                className="flex items-center gap-1"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-3 h-3" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono">
              .bg-gradient-to-br.from-purple-900
            </code>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
            <p className="text-sm text-yellow-800">
              💡 <strong>Tip:</strong> The banner will be captured at high resolution (perfect for printing/sharing)
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}