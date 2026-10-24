import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, FileText, AlertCircle } from 'lucide-react';
import { companyInfo } from '@/lib/companyInfo';

export const metadata: Metadata = {
  title: 'Privacy Policy | ResearchPath Clinical Services',
  description: 'Understand how ResearchPath collects, uses, and safeguards information collected through our website and professional enquiry portal.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#17365D] text-white py-14">
        <div className="container-custom space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-[#EAF4FF]">
            <Lock className="w-3.5 h-3.5 text-[#60a5fa]" />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Privacy Policy
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
          <span className="text-[#17365D] font-medium">Privacy Policy</span>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl space-y-8 text-slate-700 text-sm leading-relaxed">
          
          <div className="bg-[#EAF4FF]/70 border border-[#DCE5F0] rounded-2xl p-5 text-xs text-[#17365D] flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#1760B8] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Draft Legal Notice for Company Verification</p>
              <p className="text-slate-600 mt-0.5 leading-relaxed">
                This Privacy Policy describes real data handling practices on the ResearchPath website. It must be reviewed by the company’s designated legal advisor prior to formal corporate publication.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">1. Overview</h2>
            <p>
              {companyInfo.name} (&ldquo;ResearchPath&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), located at {companyInfo.address.full}, respects the privacy of visitors to our website (<Link href="/" className="text-[#1760B8] underline">https://researchpath.in</Link>). This policy explains what information is collected when you visit our website, submit an enquiry, or interact with our clinical services team.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">2. Information We Collect</h2>
            <p>We collect information strictly necessary to provide and communicate our clinical services:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600">
              <li><strong>Professional Inquiries:</strong> When you complete our contact or service enquiry form, we collect your full name, organization or institution name, work email address, phone number, and study requirements description.</li>
              <li><strong>Technical & Usage Data:</strong> When accessing our website, standard web server logs record your IP address, browser type, operating system, referring URL, and pages viewed for security monitoring and operational troubleshooting.</li>
              <li><strong>Cookies:</strong> As described in our <Link href="/cookie-policy" className="text-[#1760B8] underline">Cookie Policy</Link>, we use essential cookies necessary for site functionality and security.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">3. Explicit Clinical Data Exclusion</h2>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
              <strong>Strict Prohibition on Patient Health Information:</strong> The ResearchPath website is designed solely for B2B clinical trial operational inquiries from sponsors, CROs, investigators, and research professionals. We do NOT collect or accept Protected Health Information (PHI), medical records, or identifiable patient study data through our public website.
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">4. How We Use Information</h2>
            <p>Collected information is used exclusively to:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600">
              <li>Evaluate and respond to your study operational inquiries and feasibility requests.</li>
              <li>Coordinate mutual Non-Disclosure Agreements (NDAs) and formal scope of work agreements.</li>
              <li>Ensure the security, uptime, and integrity of our web servers.</li>
              <li>Comply with applicable legal, accounting, and regulatory obligations in India.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">5. Data Retention & Safeguards</h2>
            <p>
              Inquiry submissions are retained only as long as necessary to process your request and maintain professional correspondence. We implement technical and physical controls, including SSL/TLS encryption, restricted access controls, and firewall defenses to prevent unauthorized disclosure.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">6. Data Sharing & Third Parties</h2>
            <p>
              We do not sell, rent, or trade your personal information. Information is shared only with authorized service providers (such as secure hosting providers and corporate email infrastructures) strictly necessary to operate our website and communicate with you.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">7. Your Rights & Contact Details</h2>
            <p>
              You have the right to request access to, correction of, or deletion of the personal contact details you submitted to us. To exercise these rights, please contact our privacy liaison:
            </p>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#DCE5F0] text-xs space-y-1 text-[#17365D]">
              <p><strong>ResearchPath — Clinical Services</strong></p>
              <p>Attn: Privacy & Data Protection</p>
              <p>Address: {companyInfo.address.full}</p>
              <p>Email: <a href={`mailto:${companyInfo.email}`} className="text-[#1760B8] underline">{companyInfo.email}</a></p>
              <p>Phone: <a href={`tel:${companyInfo.phoneTel}`} className="text-[#1760B8] underline">{companyInfo.phoneDisplay}</a></p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
