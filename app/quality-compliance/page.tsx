import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  FileCheck,
  Lock,
  Search,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ClipboardList,
  Eye,
  FileText
} from 'lucide-react';
import { companyInfo } from '@/lib/companyInfo';

export const metadata: Metadata = {
  title: 'Quality & Responsible Research Standards | ResearchPath',
  description: 'Understand the quality considerations, documentation practices, participant confidentiality standards, and risk awareness frameworks that guide ResearchPath operations.',
};

export default function QualityCompliancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#17365D] via-[#1760B8] to-[#17365D] text-white py-14 sm:py-20">
        <div className="container-custom space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-sm border border-white/20 text-[#EAF4FF]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#60a5fa]" />
            <span>Governance & Quality</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Quality and Responsible Research
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
            Our operational commitment to scientific rigor, contemporaneous documentation, participant confidentiality, and proactive risk oversight.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F8FAFC] border-b border-[#DCE5F0] py-2.5 text-xs text-[#64748B]">
        <div className="container-custom flex items-center gap-2">
          <Link href="/" className="hover:text-[#1760B8]">Home</Link>
          <span>/</span>
          <span className="text-[#17365D] font-medium">Quality & Compliance</span>
        </div>
      </div>

      {/* Compliance Stance Disclaimer Box */}
      <section className="pt-10 pb-4 bg-white">
        <div className="container-custom">
          <div className="bg-[#EAF4FF]/70 border border-[#DCE5F0] rounded-2xl p-6 sm:p-8 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1760B8] uppercase tracking-wider">
              <Eye className="w-4 h-4 text-[#2F80ED]" />
              <span>Statement on Governance & Quality Principles</span>
            </div>
            <h2 className="text-lg font-bold text-[#17365D]">
              A Responsible, Evidence-Guided Approach to Clinical Operations
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              ResearchPath recognizes that clinical research directly impacts participant well-being and public health outcomes. We structure our operational support to mirror internationally accepted ethical and scientific norms. We do not claim unilateral formal accreditation or third-party certifications; rather, we execute our work within the explicit protocol parameters, Institutional Ethics Committee mandates, and standard operating procedures agreed upon with trial sponsors and investigator sites.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-16">
          
          {/* Pillar 1: Documentation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] text-[#1760B8] flex items-center justify-center">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#17365D]">
                Contemporaneous & Audit-Ready Documentation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                In clinical research, documentation is the verified mirror of study conduct. ResearchPath trains its operational personnel to apply ALCOA+ principles across all site coordination and data management activities:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1760B8] shrink-0 mt-0.5" />
                  <span><strong>Attributable:</strong> Every record, note, and query resolution clearly identifies who executed the action.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1760B8] shrink-0 mt-0.5" />
                  <span><strong>Legible & Contemporaneous:</strong> Data entries are recorded in real-time at the time of observation or visit execution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1760B8] shrink-0 mt-0.5" />
                  <span><strong>Original & Accurate:</strong> Source records are maintained as pristine first recordings or certified copies without undocumented corrections.</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 bg-[#F8FAFC] border border-[#DCE5F0] rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="relative h-44 w-full rounded-xl overflow-hidden border border-[#DCE5F0] group">
                <Image
                  src="/images/clinical/trial-analytics-documentation.jpg"
                  alt="Laboratory analytical reports, statistical curves, and clinical trial documentation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-black/20" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#60a5fa] block">ALCOA+ Framework</span>
                  <span className="text-xs font-bold text-white">Contemporaneous Documentation & Source Verification</span>
                </div>
              </div>

              <h4 className="font-bold text-sm text-[#17365D]">Documentation Quality Checks</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We perform routine documentation reconciliations between Investigator Site Files (ISF) and Trial Master Files (TMF) to catch version discrepancies or missing acknowledgments before formal sponsor monitoring or authority audits take place.
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#DCE5F0] text-xs text-slate-600 space-y-1">
                <span className="font-semibold text-[#17365D] block">Core Records Maintained:</span>
                <p>• Site Delegation & Signature Logs</p>
                <p>• Ethics Committee Approval & Amendment Dossiers</p>
                <p>• Source Document Worksheets & eCRF Tracking</p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Confidentiality & Data Protection */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-t border-slate-100 pt-14">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] text-[#1760B8] flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#17365D]">
                Confidentiality & Participant Safeguards
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Participant trust is paramount. All operational support services provided by ResearchPath are executed under strict data privacy principles designed to protect Protected Health Information (PHI):
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1760B8] shrink-0 mt-0.5" />
                  <span><strong>Subject Pseudonymization:</strong> Unique identifier codes are used across all operational documentation. Direct personal identifiers never leave the site.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1760B8] shrink-0 mt-0.5" />
                  <span><strong>Role-Based Access:</strong> Only authorized operational personnel assigned to the investigator delegation log access study records.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1760B8] shrink-0 mt-0.5" />
                  <span><strong>NDA Execution:</strong> Strict non-disclosure covenants protect proprietary sponsor study synopses, protocols, and investigator insights.</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 lg:order-1 bg-[#F8FAFC] border border-[#DCE5F0] rounded-2xl p-6 sm:p-8 space-y-3">
              <h4 className="font-bold text-sm text-[#17365D]">Data Security Protocols</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our digital workflows mandate encrypted data transfer channels, secure credential management, and zero local caching of sensitive trial data on personal devices.
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#DCE5F0] text-xs text-slate-600 space-y-1">
                <span className="font-semibold text-[#17365D] block">Key Protections:</span>
                <p>• Zero public transmission of patient medical records</p>
                <p>• Physical separation of master enrollment logs at site</p>
                <p>• Transparent incident logging and escalation</p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Risk Awareness & Review */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-t border-slate-100 pt-14">
            <div className="lg:col-span-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] text-[#1760B8] flex items-center justify-center">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#17365D]">
                Risk Awareness & Continuous Quality Review
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than treating quality as an afterthought, we apply risk-based thinking throughout the operational lifecycle:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1760B8] shrink-0 mt-0.5" />
                  <span><strong>Early Roadblock Detection:</strong> Identification of screening bottlenecks, supply chain lags, or appointment scheduling conflicts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1760B8] shrink-0 mt-0.5" />
                  <span><strong>Root Cause Analysis (RCA):</strong> Analyzing protocol deviations to implement systemic corrections rather than treating isolated symptoms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1760B8] shrink-0 mt-0.5" />
                  <span><strong>Collaborative Checkpoints:</strong> Weekly or bi-weekly operational alignment meetings with sponsors and investigators to review deliverable metrics.</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 bg-[#F8FAFC] border border-[#DCE5F0] rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="relative h-44 w-full rounded-xl overflow-hidden border border-[#DCE5F0] group">
                <Image
                  src="/images/clinical/clinical-data-review-team.jpg"
                  alt="Clinical researchers performing quality audits and data verification"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-black/20" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#60a5fa] block">Continuous Oversight</span>
                  <span className="text-xs font-bold text-white">Data Review, Query Resolution & Audit Readiness</span>
                </div>
              </div>

              <h4 className="font-bold text-sm text-[#17365D]">Transparency Commitment</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                When operational deviations or protocol hurdles emerge, we escalate them immediately to the Principal Investigator and sponsor trial managers with transparent documentation and proposed corrective options.
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#DCE5F0] text-xs text-slate-600 space-y-1">
                <span className="font-semibold text-[#17365D] block">Actionable Quality Tools:</span>
                <p>• Standardized Deviations Tracking Registers</p>
                <p>• Pre-Monitoring Visit Readiness Checklists</p>
                <p>• Corrective and Preventive Action (CAPA) Logs</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#17365D] text-white py-14 border-t border-[#234b7e]">
        <div className="container-custom text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold">Have Questions About Our Quality Framework?</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We welcome the opportunity to discuss our operational workflows, standard documentation trackers, and quality review practices for your study.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-primary !bg-[#2F80ED] hover:!bg-[#1760B8] text-xs !py-3 !px-6"
            >
              Contact Our Operations Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
