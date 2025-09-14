import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface QRCodeGeneratorProps {
  value: string;
  size?: number;
  includeMargin?: boolean;
  className?: string;
  fgColor?: string;
  bgColor?: string;
  level?: "L" | "M" | "Q" | "H"; // 👈 add this
}

export function QRCodeGenerator({ value, size = 128, className = "" }: QRCodeGeneratorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, value, {
        width: size,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
    }
  }, [value, size]);

  return (
    <div className={`inline-block bg-white p-4 rounded-lg shadow-lg ${className}`}>
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}