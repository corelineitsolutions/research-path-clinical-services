import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Cookie, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { companyInfo } from '@/lib/companyInfo';

export const metadata: Metadata = {
  title: 'Cookie Policy | ResearchPath Clinical Services',
  description: 'Understand how ResearchPath uses cookies and similar technologies on our website, and how you can manage your preferences.',
};

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#17365D] text-white py-14">
        <div className="container-custom space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-[#EAF4FF]">
            <Cookie className="w-3.5 h-3.5 text-[#60a5fa]" />
            <span>Browser Storage Notice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Cookie Policy
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm">
            Last updated: October 2026 • ResearchPath Clinical Services, Pune, India
          </p>
        </div>
      </section>

      <div className="bg-[#F8FAFC] border-b border-[#DCE5F0] py-2.5 text-xs text-[#64748B]">
        <div className="container-custom flex items-center gap-2">
          <Link href="/" className="hover:text-[#1760B8]">Home</Link>
          <span>/</span>
          <span className="text-[#17365D] font-medium">Cookie Policy</span>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl space-y-8 text-slate-700 text-sm leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device by websites you visit. They are widely used to make websites function efficiently, improve user navigation, and provide aggregate reporting to website operators.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#17365D]">2. Cookies Used on This Website</h2>
            <p>
              ResearchPath adheres to data minimization. We only deploy cookies necessary for safe website operation, form functionality, and aggregate performance:
            </p>

            <div className="space-y-4">
              <div className="bg-[#F8FAFC] border border-[#DCE5F0] rounded-xl p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-[#17365D]">A. Strictly Necessary / Essential Cookies</h3>
                  <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Always Active</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  These cookies are vital for the basic operation of our website, including session security, spam prevention during form submissions, and remembering your cookie consent choice. You cannot disable these cookies without disrupting core site functions.
                </p>
              </div>

              <div className="bg-[#F8FAFC] border border-[#DCE5F0] rounded-xl p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-[#17365D]">B. Analytical & Performance Cookies</h3>
                  <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">Optional / Anonymized</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  These cookies help us understand how visitors navigate the website by collecting anonymized statistical metrics (such as page views, visitor duration, and device screen sizes). No identifiable personal data or participant medical records are recorded.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">3. Managing Your Cookie Preferences</h2>
            <p>
              You can control or delete cookies at any time through your browser settings. Most browsers allow you to block cookies or notify you before a cookie is saved.
            </p>
            <div className="p-4 rounded-xl bg-[#EAF4FF] border border-[#DCE5F0] text-xs text-[#17365D] space-y-2">
              <span className="font-bold block">Reset Local Cookie Preferences:</span>
              <p className="text-slate-600">
                You can reset your consent preference by clearing your browser cache and local storage for this domain, which will reactivate our consent prompt on your next visit.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">4. Contact Regarding Privacy & Cookies</h2>
            <p>
              For further questions regarding our cookie practices, please email{' '}
              <a href={`mailto:${companyInfo.email}`} className="text-[#1760B8] underline">
                {companyInfo.email}
              </a>{' '}
              or visit our <Link href="/privacy-policy" className="text-[#1760B8] underline">Privacy Policy</Link>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
