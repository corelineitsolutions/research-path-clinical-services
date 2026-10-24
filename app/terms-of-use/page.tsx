import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, AlertCircle, Shield } from 'lucide-react';
import { companyInfo } from '@/lib/companyInfo';

export const metadata: Metadata = {
  title: 'Terms of Use | ResearchPath Clinical Services',
  description: 'Terms governing the access and use of the ResearchPath Clinical Services website, intellectual property, and enquiry facilities.',
};

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#17365D] text-white py-14">
        <div className="container-custom space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-[#EAF4FF]">
            <FileText className="w-3.5 h-3.5 text-[#60a5fa]" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Terms of Use
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
          <span className="text-[#17365D] font-medium">Terms of Use</span>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl space-y-8 text-slate-700 text-sm leading-relaxed">
          
          <div className="bg-[#EAF4FF]/70 border border-[#DCE5F0] rounded-2xl p-5 text-xs text-[#17365D] flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#1760B8] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Draft Legal Notice for Corporate Review</p>
              <p className="text-slate-600 mt-0.5 leading-relaxed">
                These terms govern general website browsing and enquiry portal interactions. Formal clinical trials, feasibility studies, and operational coordination services are governed by separate, legally binding Master Services Agreements (MSAs) and Statements of Work (SOWs).
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website of {companyInfo.name} (&ldquo;ResearchPath&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) at <Link href="/" className="text-[#1760B8] underline">https://researchpath.in</Link>, you agree to be bound by these Terms of Use and our <Link href="/privacy-policy" className="text-[#1760B8] underline">Privacy Policy</Link>. If you do not agree, please do not use this website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">2. Nature of Services & Disclaimers</h2>
            <p>
              ResearchPath is an independent clinical services business located in Pune, Maharashtra, India. Content on this website is provided for informational and business communication purposes only.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600">
              <li><strong>No Medical Advice:</strong> Website content does not constitute medical advice, diagnosis, or clinical treatment recommendations for patients.</li>
              <li><strong>No Educational Certification:</strong> ResearchPath operates exclusively as a clinical research services business and does not grant academic degrees, certifications, or diplomas.</li>
              <li><strong>No Guarantees of Regulatory Outcomes:</strong> ResearchPath provides documentation and operational coordination support; we do not guarantee regulatory approvals, Ethics Committee clearances, or clinical trial outcomes.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">3. Intellectual Property Rights</h2>
            <p>
              The ResearchPath logo, magnifying glass puzzle-piece brand mark, website layout, original articles, text, and graphics are the proprietary intellectual property of ResearchPath. You may not reproduce, duplicate, copy, sell, or exploit any portion of this website without express written permission.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">4. Acceptable Website Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600">
              <li>Transmit automated spam, malicious code, viruses, or unauthorized scrapers.</li>
              <li>Submit fraudulent, deceptive, or unsolicited commercial communications through our enquiry forms.</li>
              <li>Submit Protected Health Information (PHI) or confidential medical records through public web forms.</li>
              <li>Attempt to circumvent server authentication or disrupt website infrastructure.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted under applicable law in India, ResearchPath and its representatives shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use this website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">6. Governing Law & Jurisdiction</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising from or relating to the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra, India.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#17365D]">7. Contact & Queries</h2>
            <p>For questions regarding these Terms of Use, please contact:</p>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#DCE5F0] text-xs space-y-1 text-[#17365D]">
              <p><strong>ResearchPath — Clinical Services</strong></p>
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
