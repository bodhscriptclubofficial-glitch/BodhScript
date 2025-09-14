import React, { useEffect, useState } from 'react';
import { QRCodeGenerator } from './QRCodeGenerator';
import { Code, Calendar, Trophy } from 'lucide-react';

interface StaticCodeContestBannerProps {
  qrCodeUrl?: string;
  contestName?: string;
  date?: string;
  prize?: string;
  compact?: boolean;
}

export function StaticCodeContestBanner({ 
  qrCodeUrl = "https://contest.example.com/register",
  contestName = "CodeMaster 2025",
  date = "March 15-16, 2025",
  prize = "$50,000 Prize Pool",
  compact = false
}: StaticCodeContestBannerProps) {
  const [qrSize, setQrSize] = useState(compact ? 100 : 120);

  useEffect(() => {
    const updateQRSize = () => {
      if (compact) {
        setQrSize(80);
      } else {
        setQrSize(window.innerWidth >= 768 ? 120 : 100);
      }
    };
    
    updateQRSize();
    window.addEventListener('resize', updateQRSize);
    return () => window.removeEventListener('resize', updateQRSize);
  }, [compact]);

  if (compact) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-lg shadow-xl">
        {/* Compact background pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M15 15c4 0 7-3 7-7s-3-7-7-7-7 3-7 7 3 7 7 7z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative px-4 py-5">
          <div className="flex items-center gap-4">
            {/* Left content */}
            <div className="flex-1 text-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {contestName}
                </h1>
              </div>
              
              <div className="space-y-1.5 mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  <span className="text-xs text-blue-100">{date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-3 h-3 text-yellow-400" />
                  <span className="text-xs text-blue-100">{prize}</span>
                </div>
              </div>
              
              <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                <span className="text-white text-xs">🚀 Register Now</span>
              </div>
            </div>

            {/* QR Code */}
            <div className="text-center">
              <p className="text-white text-xs mb-2">Scan to Register</p>
              <QRCodeGenerator 
                value={qrCodeUrl} 
                size={qrSize} 
                className="mb-1" 
              />
              <p className="text-blue-200 text-xs">Quick access</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-xl shadow-2xl">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10zm10 10c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Static decorative elements */}
      <div className="absolute top-6 right-6 w-4 h-4 bg-cyan-400 rounded-full opacity-60" />
      <div className="absolute bottom-6 left-6 w-3 h-3 bg-yellow-400 rounded-full opacity-50" />

      <div className="relative px-6 py-8 md:px-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          
          {/* Main Content */}
          <div className="flex-1 text-white text-center md:text-left">
            {/* Header with icon */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {contestName}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-blue-200 mb-6">
              Ultimate Programming Challenge
            </p>

            {/* Contest Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span className="text-blue-100">{date}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-100">{prize}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full cursor-pointer shadow-lg">
              <span className="text-white">🚀 Register Now</span>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="flex-shrink-0">
            <div className="text-center">
              <h3 className="text-lg md:text-xl text-white mb-3">
                Scan to Register
              </h3>
              
              <div className="mb-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <QRCodeGenerator 
                  value={qrCodeUrl} 
                  size={qrSize} 
                />
              </div>
              
              <p className="text-blue-200 text-sm">
                Quick registration
              </p>
            </div>
          </div>
        </div>

        {/* Bottom info */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Registration Open</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span>Early Bird Discount</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>Live Streaming</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle decorative gradients */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-xl" />
    </div>
  );
}