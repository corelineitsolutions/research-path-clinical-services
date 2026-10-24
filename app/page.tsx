import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Activity,
  Users,
  UserCheck,
  Database,
  Compass,
  FileCheck,
  Building2,
  Stethoscope,
  Microscope,
  Phone,
  Mail,
  Lock,
  Search,
  Sparkles
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import { servicesData } from '@/lib/servicesData';
import { insightsData } from '@/lib/insightsData';
import { companyInfo } from '@/lib/companyInfo';

export default function HomePage() {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <Activity className="w-6 h-6 text-[#1760B8]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#1760B8]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#1760B8]" />;
      case 'Database': return <Database className="w-6 h-6 text-[#1760B8]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#1760B8]" />;
      default: return <FileCheck className="w-6 h-6 text-[#1760B8]" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section with uploaded background image */}
      <HeroSection />

      {/* 2. Section A: Introduction to ResearchPath */}
      <section className="section-padding bg-white relative overflow-hidden" id="about-intro">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAF4FF] text-[#1760B8] border border-[#DCE5F0]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2F80ED]" />
                <span>About ResearchPath Clinical Services</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17365D] tracking-tight leading-snug">
                An Independent Clinical Services Provider Driven by Precision and Accountability
              </h2>

              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Headquartered at City Vista in Kharadi, Pune, <strong className="text-[#17212F] font-semibold">ResearchPath</strong> is a dedicated clinical research services organization. We collaborate with pharmaceutical sponsors, contract research organizations (CROs), and clinical investigator teams to manage the operational complexities of clinical trials.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our team focuses exclusively on trial coordination, site feasibility, clinical data management, and regulatory documentation support. By coupling meticulous standard operating procedures with transparent stakeholder communication, we enable research teams to maintain strict protocol fidelity and contemporaneous documentation.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#DCE5F0] space-y-1.5">
                  <div className="font-semibold text-sm text-[#17365D] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1760B8]" />
                    <span>Pure Clinical Focus</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Operating purely as a clinical research operations organization, never as an educational academy.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#DCE5F0] space-y-1.5">
                  <div className="font-semibold text-sm text-[#17365D] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1760B8]" />
                    <span>Pune Operations Hub</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Strategically situated in Kharadi, Pune to coordinate research activities across western and pan-India sites.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/about"
                  className="btn-primary text-sm inline-flex items-center gap-2"
                >
                  <span>Learn More About Our Philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual / Identity Card with Clinical Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DCE5F0] bg-white group">
                {/* Clinical Image Header */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src="/images/clinical/clinical-investigator-team.jpg"
                    alt="Clinical investigators reviewing patient diagnostic records in clinical trial suite"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17365D] via-[#17365D]/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-[#17365D] shadow-md backdrop-blur-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#1760B8]" />
                      <span>Clinical Site Support</span>
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-wider text-[#EAF4FF] font-semibold block">Pune Operational Hub</span>
                    <h4 className="text-base font-bold text-white leading-tight">Patient-Centric Trial Coordination</h4>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#17365D] to-[#1760B8] p-6 text-white space-y-4">
                  <blockquote className="italic text-xs sm:text-sm text-slate-100 leading-relaxed border-l-2 border-[#2F80ED] pl-3.5">
                    &ldquo;To support clinical research through dependable services, collaborative working, and a consistent focus on quality and responsible research practices.&rdquo;
                  </blockquote>

                  <div className="space-y-2 pt-1 text-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#2F80ED] mt-1 shrink-0" />
                      <div>
                        <strong className="text-white">Quality-Conscious Operations: </strong>
                        <span className="text-slate-200">Alignment with GCP principles and approved protocols.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#2F80ED] mt-1 shrink-0" />
                      <div>
                        <strong className="text-white">Transparent Reporting: </strong>
                        <span className="text-slate-200">Contemporaneous records and live milestone tracking.</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/15 text-[11px] text-slate-300 flex items-center justify-between">
                    <span>City Vista, Kharadi, Pune, India</span>
                    <span className="font-mono text-white/90">+91 91464 52014</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Section B: Clinical Services */}
      <section className="section-padding bg-[#F8FAFC] border-t border-b border-[#DCE5F0]" id="services">
        <div className="container-custom">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="badge-clinical">
              <span>Verified Clinical Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17365D] tracking-tight">
              Comprehensive Support Across the Clinical Study Lifecycle
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We deliver structured operational and administrative coordination across essential study phases. Every service is delivered in strict adherence to approved protocols and applicable regulatory frameworks.
            </p>
          </div>

          {/* Service Cards Grid (3x2) with Clinical Photography */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-2xl border border-[#DCE5F0] overflow-hidden shadow-subtle hover:shadow-hover hover:border-[#1760B8]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Visual Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[#17365D] shadow-sm backdrop-blur-md">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-[#17365D] group-hover:text-[#1760B8] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {service.shortDescription}
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-xs font-semibold text-[#17365D] block mb-1.5">
                        Scope Preview:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-500">
                        {service.scopeOfSupport.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#1760B8] font-bold">•</span>
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100/60">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1760B8] group-hover:text-[#134e96] group-hover:translate-x-0.5 transition-all"
                  >
                    <span>View Service Scope & FAQs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="btn-secondary text-sm font-semibold inline-flex items-center gap-2"
            >
              <span>Explore Full Clinical Services Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Section C: Our Approach */}
      <section className="section-padding bg-white relative" id="approach">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="badge-clinical">
              <span>Structured Execution Model</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17365D] tracking-tight">
              Our 4-Stage Operational Approach
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Precision in clinical research requires disciplined process management. We implement a systematic four-stage methodology to ensure every milestone is clearly scoped, executed, and validated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-[#F8FAFC] border border-[#DCE5F0] rounded-2xl p-6 relative space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#1760B8] text-white flex items-center justify-center font-bold text-sm shadow-md">
                01
              </div>
              <h3 className="text-base font-bold text-[#17365D]">
                Understand Requirements
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We perform an in-depth review of study protocols, regulatory parameters, investigator needs, and sponsor deliverables to define precise operational objectives.
              </p>
              <div className="text-[11px] text-[#1760B8] font-medium pt-2 border-t border-[#DCE5F0]">
                • Protocol review & scope alignment
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F8FAFC] border border-[#DCE5F0] rounded-2xl p-6 relative space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#2F80ED] text-white flex items-center justify-center font-bold text-sm shadow-md">
                02
              </div>
              <h3 className="text-base font-bold text-[#17365D]">
                Plan Agreed Scope
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Establishing clear timelines, delegation logs, communication matrices, and documentation checklists before any site or data workflows begin.
              </p>
              <div className="text-[11px] text-[#1760B8] font-medium pt-2 border-t border-[#DCE5F0]">
                • Workflows, matrices & checklists
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F8FAFC] border border-[#DCE5F0] rounded-2xl p-6 relative space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#17365D] text-white flex items-center justify-center font-bold text-sm shadow-md">
                03
              </div>
              <h3 className="text-base font-bold text-[#17365D]">
                Coordinate Work
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active daily coordination across investigator sites, vendors, and sponsors. Routine tracking of queries, visit milestones, and documentation collation.
              </p>
              <div className="text-[11px] text-[#1760B8] font-medium pt-2 border-t border-[#DCE5F0]">
                • Daily site liaison & progress tracking
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#F8FAFC] border border-[#DCE5F0] rounded-2xl p-6 relative space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                04
              </div>
              <h3 className="text-base font-bold text-[#17365D]">
                Review Deliverables
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contemporaneous quality audits, reconciliation of trial records, verification against ALCOA+ standards, and structured sponsor handoffs.
              </p>
              <div className="text-[11px] text-[#1760B8] font-medium pt-2 border-t border-[#DCE5F0]">
                • Audit-ready dossiers & verified records
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section D: Quality and Responsible Research */}
      <section className="section-padding bg-[#EAF4FF]/40 border-t border-b border-[#DCE5F0]" id="quality">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <div className="badge-clinical">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2F80ED]" />
                <span>Quality & Compliance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17365D] tracking-tight leading-snug">
                Quality and Responsible Research Standards
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                In clinical research, quality is not a static audit checkpoint—it is an operational culture. ResearchPath approaches quality through systematic documentation verification, ethical vigilance, and risk awareness.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We adhere strictly to approved protocol parameters and applicable national regulatory guidelines, ensuring that study records are accurate, verifiable, and prepared for scrutiny.
              </p>
              <div className="pt-2">
                <Link
                  href="/quality-compliance"
                  className="btn-primary text-xs !py-3 !px-5 inline-flex items-center gap-2"
                >
                  <span>Read Quality & Compliance Framework</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl border border-[#DCE5F0] p-5 shadow-subtle space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#EAF4FF] text-[#1760B8] flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#17365D]">Contemporaneous Records</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Adherence to ALCOA+ documentation principles ensures records are attributable, legible, contemporaneous, original, and accurate.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#DCE5F0] p-5 shadow-subtle space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#EAF4FF] text-[#1760B8] flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#17365D]">Confidentiality & Privacy</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Strict participant pseudonymization and secure handling protocols protect sensitive medical information and intellectual property.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#DCE5F0] p-5 shadow-subtle space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#EAF4FF] text-[#1760B8] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#17365D]">Ethical Alignment</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every site activity is aligned with Institutional Ethics Committee approvals and the ethical principles of the Declaration of Helsinki.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#DCE5F0] p-5 shadow-subtle space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#EAF4FF] text-[#1760B8] flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#17365D]">Risk Awareness & Review</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Proactive identification of protocol deviations and bottleneck risks with documented corrective and preventive action (CAPA) routines.
                </p>
              </div>
            </div>

          </div>

          {/* Quality Assurance Visual Feature */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-[#DCE5F0] bg-white shadow-subtle grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[240px]">
              <Image
                src="/images/clinical/clinical-data-review-team.jpg"
                alt="Clinical researchers performing quality audits and data verification"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#17365D]/20 to-[#17365D]/80" />
            </div>
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1760B8]">GCP Verified Operational Culture</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#17365D]">
                Integrated Quality Verification at Every Step
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From initial site initiation checklists through to formal database lock, our quality team conducts ongoing reconciliations, audit readiness checks, and protocol compliance sweeps to safeguard the scientific validity of your clinical trial data.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1760B8]" />
                  <span>ALCOA+ Adherence</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1760B8]" />
                  <span>Continuous CAPA Tracking</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1760B8]" />
                  <span>Transparent Escalation</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section E: Who We Support */}
      <section className="section-padding bg-white" id="stakeholders">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="badge-clinical">
              <span>Stakeholder Collaboration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17365D] tracking-tight">
              Collaborative Support for Healthcare Stakeholders
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We provide tailored operational support to diverse research entities across the clinical development ecosystem, adapting our coordination model to their organizational workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stakeholder 1 */}
            <div className="bg-gradient-to-b from-white to-[#F8FAFC] rounded-2xl border border-[#DCE5F0] p-7 shadow-subtle space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] text-[#1760B8] flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#17365D]">
                Biopharma & Medical Device Sponsors
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Assisting clinical development teams with site identification, feasibility assessments, regional operational coordination, and centralized milestone tracking in India.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1760B8]" />
                  <span>Objective site feasibility dossiers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1760B8]" />
                  <span>Milestone progress oversight</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1760B8]" />
                  <span>Regulatory document collation</span>
                </li>
              </ul>
            </div>

            {/* Stakeholder 2 */}
            <div className="bg-gradient-to-b from-white to-[#F8FAFC] rounded-2xl border border-[#DCE5F0] p-7 shadow-subtle space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] text-[#1760B8] flex items-center justify-center">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#17365D]">
                Contract Research Organisations (CROs)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Extending your operational reach with dependable on-the-ground coordination, clinical research coordinators, and data reconciliation support during peak study workloads.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1760B8]" />
                  <span>Flexible site coordination resources</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1760B8]" />
                  <span>EDC query backlog reduction</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1760B8]" />
                  <span>TMF filing & audit preparation</span>
                </li>
              </ul>
            </div>

            {/* Stakeholder 3 */}
            <div className="bg-gradient-to-b from-white to-[#F8FAFC] rounded-2xl border border-[#DCE5F0] p-7 shadow-subtle space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] text-[#1760B8] flex items-center justify-center">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#17365D]">
                Principal Investigators & Trial Sites
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Supporting clinical investigators and hospital research offices with participant scheduling, source documentation, regulatory binders, and Ethics Committee submissions.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1760B8]" />
                  <span>Subject appointment workflow management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1760B8]" />
                  <span>Investigator delegation support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1760B8]" />
                  <span>Ethics Committee submission packages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section F: Knowledge and Insights */}
      <section className="section-padding bg-[#F8FAFC] border-t border-[#DCE5F0]" id="insights">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="badge-clinical mb-2">
                <span>Clinical Perspectives</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17365D] tracking-tight">
                Knowledge & Clinical Insights
              </h2>
              <p className="text-slate-600 text-sm mt-1 max-w-xl">
                Original educational articles and perspectives on trial operations, documentation best practices, quality frameworks, and participant engagement.
              </p>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1760B8] hover:text-[#134e96]"
            >
              <span>Explore all articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightsData.slice(0, 3).map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-[#DCE5F0] p-6 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#64748B]">
                    <span className="font-semibold text-[#1760B8] px-2.5 py-0.5 rounded-full bg-[#EAF4FF]">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-bold text-base text-[#17365D] hover:text-[#1760B8] transition-colors leading-snug">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{article.publishDate}</span>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="font-semibold text-[#1760B8] hover:text-[#134e96] inline-flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Section G: Contact CTA */}
      <section className="bg-gradient-to-r from-[#17365D] via-[#1760B8] to-[#17365D] text-white py-16 sm:py-20">
        <div className="container-custom text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold uppercase tracking-wider text-[#EAF4FF]">
            <Sparkles className="w-3.5 h-3.5 text-[#60a5fa]" />
            <span>Connect with our Clinical Operations Team</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Ready to Discuss Your Clinical Trial Operations Requirements?
          </h2>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Whether you require site feasibility assessments, clinical research coordinators, data management support, or regulatory documentation collation in India, ResearchPath is prepared to assist.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary !bg-white !text-[#17365D] hover:!bg-[#EAF4FF] hover:!text-[#1760B8] !py-3.5 !px-8 text-sm font-bold shadow-xl"
            >
              Discuss Your Requirements
            </Link>
            <a
              href={`tel:${companyInfo.phoneTel}`}
              className="btn-outline-white !py-3.5 !px-6 text-sm font-semibold flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#60a5fa]" />
              <span>Call +91 91464 52014</span>
            </a>
          </div>

          <div className="pt-6 text-xs text-slate-300">
            <span>Location: 406, B Wing, City Vista, Kharadi, Pune, Maharashtra, India</span>
          </div>
        </div>
      </section>
    </div>
  );
}
