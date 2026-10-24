import React from 'react';
import Link from 'next/link';
import { Home, ArrowRight, Compass, Phone } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';
import { companyInfo } from '@/lib/companyInfo';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F8FAFC] py-16 px-4">
      <div className="max-w-xl w-full bg-white rounded-2xl border border-[#DCE5F0] p-8 sm:p-10 shadow-card text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#EAF4FF] text-[#1760B8] flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-[#1760B8] uppercase tracking-wider">
            Error 404 • Page Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#17365D]">
            The Requested Page Could Not Be Located
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            The link you followed may have moved or been updated. You can return to our homepage or explore our verified clinical research services below.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-primary !py-2.5 !px-5 text-xs flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/services"
            className="btn-secondary !py-2.5 !px-5 text-xs flex items-center gap-2"
          >
            <span>Explore Clinical Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-1">
          <p>Need urgent operational assistance?</p>
          <p>
            Contact our Pune office directly at{' '}
            <a href={`tel:${companyInfo.phoneTel}`} className="text-[#1760B8] font-semibold underline">
              {companyInfo.phoneDisplay}
            </a>{' '}
            or{' '}
            <a href={`mailto:${companyInfo.email}`} className="text-[#1760B8] font-semibold underline">
              {companyInfo.email}
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
