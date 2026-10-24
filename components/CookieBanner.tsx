'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X, Check } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('researchpath_cookie_consent');
      if (!consent) {
        // Show after a brief delay for optimal page load
        const timer = setTimeout(() => setShowBanner(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // Storage access blocked or restricted
    }
  }, []);

  const handleConsent = (level: 'all' | 'essential') => {
    try {
      localStorage.setItem('researchpath_cookie_consent', JSON.stringify({
        level,
        timestamp: new Date().toISOString()
      }));
    } catch (e) {}
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Preferences"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="bg-white rounded-xl shadow-modal border border-[#DCE5F0] p-5 text-[#17212F]">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-[#EAF4FF] text-[#1760B8] shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm text-[#17365D]">
                Privacy & Cookie Notice
              </h4>
              <button
                type="button"
                onClick={() => handleConsent('essential')}
                className="text-slate-400 hover:text-slate-600 p-1"
                aria-label="Dismiss cookie notice"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-slate-600 leading-relaxed">
              ResearchPath uses essential cookies to ensure safe navigation and enquiry handling. We do not sell personal data or track clinical participants. Learn more in our{' '}
              <Link href="/cookie-policy" className="text-[#1760B8] underline hover:text-[#134e96]">
                Cookie Policy
              </Link>{' '}
              and{' '}
              <Link href="/privacy-policy" className="text-[#1760B8] underline hover:text-[#134e96]">
                Privacy Policy
              </Link>.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleConsent('all')}
                className="btn-primary !py-1.5 !px-3 !text-xs !bg-[#1760B8] hover:!bg-[#134e96]"
              >
                <Check className="w-3.5 h-3.5 mr-1" />
                Accept All
              </button>
              <button
                type="button"
                onClick={() => handleConsent('essential')}
                className="btn-secondary !py-1.5 !px-3 !text-xs"
              >
                Essential Only
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
