import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Download, ExternalLink, ArrowLeft, GraduationCap, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ResearchPath Institute | Clinical Research Programs Brochure',
  description: 'View the official ResearchPath Institute brochure, course curriculum, clinical research training modules, and certifications.',
};

export default function InstitutePage() {
  const pdfUrl = '/docs/ResearchPath-Brochure.pdf';

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-[#17365D] via-[#1760B8] to-[#17365D] text-white py-10 sm:py-14">
        <div className="container-custom space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-sm border border-white/20 text-[#EAF4FF]">
                <GraduationCap className="w-3.5 h-3.5 text-[#60a5fa]" />
                <span>Educational & Training Programs</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                ResearchPath Institute Brochure
              </h1>
              <p className="text-slate-200 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Comprehensive training curriculum, clinical research operational modules, Good Clinical Practice (GCP) guidelines, and career advancement programs.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-[#2F80ED] hover:!bg-[#1760B8] text-xs sm:text-sm !py-2.5 !px-4 inline-flex items-center gap-2 shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in Full Viewer</span>
              </a>
              <a
                href={pdfUrl}
                download="ResearchPath-Brochure.pdf"
                className="btn-outline-white text-xs sm:text-sm !py-2.5 !px-4 inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-[#DCE5F0] py-2.5 text-xs text-[#64748B]">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#1760B8]">Home</Link>
            <span>/</span>
            <span className="text-[#17365D] font-medium">ResearchPath Institute</span>
          </div>
          <Link href="/" className="hover:text-[#1760B8] inline-flex items-center gap-1 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* PDF Viewer Container */}
      <section className="py-8 sm:py-10 flex-grow">
        <div className="container-custom">
          <div className="bg-white rounded-2xl border border-[#DCE5F0] shadow-card overflow-hidden">
            {/* Viewer Header */}
            <div className="bg-slate-50 border-b border-[#DCE5F0] px-4 sm:px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-xs text-[#17365D] font-semibold">
                <FileText className="w-4 h-4 text-[#1760B8]" />
                <span>ReseachPath Brochure M.pdf</span>
                <span className="text-[11px] font-normal text-slate-500">(5.5 MB)</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#1760B8] hover:text-[#134e96] font-semibold inline-flex items-center gap-1"
                >
                  <span>Open New Tab</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Embedded PDF iframe */}
            <div className="w-full h-[80vh] sm:h-[85vh] bg-slate-100">
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=1`}
                title="ResearchPath Institute Brochure"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
