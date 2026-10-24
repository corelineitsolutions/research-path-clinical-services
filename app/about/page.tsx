import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Target,
  Compass,
  CheckCircle2,
  ArrowRight,
  Building2,
  FileText,
  Users,
  Microscope,
  Phone,
  Mail,
  MapPin,
  Lock,
  HeartHandshake
} from 'lucide-react';
import { companyInfo } from '@/lib/companyInfo';

export const metadata: Metadata = {
  title: 'About ResearchPath | Clinical Services Pune',
  description: 'Learn about ResearchPath, an independent clinical services provider based in Pune, India, dedicated to quality-driven trial operations and collaborative research support.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-[#17365D] via-[#1760B8] to-[#17365D] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="container-custom relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-sm border border-white/20 text-[#EAF4FF]">
            <Building2 className="w-3.5 h-3.5 text-[#60a5fa]" />
            <span>Corporate Identity & Purpose</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            About ResearchPath
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            A dedicated clinical research services organization based in Pune, India, committed to supporting sponsors, investigators, and research teams through rigorous, quality-driven operational coordination.
          </p>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="bg-[#F8FAFC] border-b border-[#DCE5F0] py-2.5 text-xs text-[#64748B]">
        <div className="container-custom flex items-center gap-2">
          <Link href="/" className="hover:text-[#1760B8]">Home</Link>
          <span>/</span>
          <span className="text-[#17365D] font-medium">About ResearchPath</span>
        </div>
      </div>

      {/* Main Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="badge-clinical">
                <span>Who We Are</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#17365D] tracking-tight leading-snug">
                Dedicated Exclusively to Clinical Services and Operational Coordination
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-[#17212F] font-semibold">ResearchPath</strong> is an independent clinical services business established in Pune, Maharashtra. Our mission is to alleviate the operational, administrative, and documentation burdens inherent in modern clinical research.
                </p>
                <p>
                  Clinical trials require the synchronization of complex timelines, multiple investigative sites, diverse data collection points, and strict regulatory standards. ResearchPath acts as a dependable operational ally, delivering specialized support in clinical trial operations, site-level coordination, patient recruitment strategies, data management, and regulatory documentation collation.
                </p>
                <p className="text-xs sm:text-sm bg-[#EAF4FF]/60 p-4 rounded-xl border border-[#DCE5F0] text-[#17365D]">
                  <strong>Clarification of Corporate Identity:</strong> ResearchPath operates strictly as a clinical research services organization. We do not operate as an educational institution, university, or clinical training institute.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#17365D]">
                <div className="flex items-center gap-2 bg-[#F8FAFC] px-3.5 py-2 rounded-lg border border-[#DCE5F0]">
                  <MapPin className="w-4 h-4 text-[#1760B8]" />
                  <span>City Vista, Kharadi, Pune, India</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F8FAFC] px-3.5 py-2 rounded-lg border border-[#DCE5F0]">
                  <Phone className="w-4 h-4 text-[#1760B8]" />
                  <span>+91 91464 52014</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-[#DCE5F0] overflow-hidden shadow-card group">
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/clinical/clinical-scientist-laboratory.jpg"
                    alt="Clinical research diagnostic scientist in Pune laboratory"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/25 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#60a5fa] block">Operations & Diagnostics</span>
                    <h3 className="font-bold text-base text-white">Dedicated Clinical Research Services</h3>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-5 bg-[#F8FAFC]">
                  <div className="flex items-center gap-4 border-b border-[#DCE5F0] pb-4">
                    <div className="w-12 h-12 rounded-xl bg-white p-2 shadow-sm border border-[#DCE5F0] flex items-center justify-center">
                      <Image
                        src="/images/logo-mark.png"
                        alt="ResearchPath mark"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#17365D]">ResearchPath</h3>
                      <p className="text-xs text-[#1760B8] font-semibold uppercase tracking-wider">Clinical Services Pune</p>
                    </div>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-600">
                    <div className="space-y-0.5">
                      <span className="font-bold text-[#17365D] uppercase tracking-wider block text-[11px]">Primary Location</span>
                      <p>406, B Wing, City Vista, Kharadi, Pune, Maharashtra, India.</p>
                    </div>
                    <div className="space-y-0.5">
                      <span className="font-bold text-[#17365D] uppercase tracking-wider block text-[11px]">Core Operations</span>
                      <p>Clinical Trial Coordination, Site Feasibility, Data Management, Protocol Documentation.</p>
                    </div>
                    <div className="space-y-0.5">
                      <span className="font-bold text-[#17365D] uppercase tracking-wider block text-[11px]">Operating Philosophy</span>
                      <p>Evidence-based methodologies, absolute protocol fidelity, and contemporaneous ALCOA+ documentation.</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="btn-primary w-full text-xs text-center !py-2.5 block"
                    >
                      Discuss Study Scope with our Team
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-[#F8FAFC] border-t border-b border-[#DCE5F0]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="badge-clinical">
              <span>Strategic Purpose</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17365D] tracking-tight">
              Mission & Vision
            </h2>
            <p className="text-slate-500 text-xs italic">
              (Draft statements developed for corporate presentation and client alignment)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-2xl border border-[#DCE5F0] p-8 shadow-subtle space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] text-[#1760B8] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#17365D]">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed italic">
                &ldquo;To support clinical research through dependable services, collaborative working, and a consistent focus on quality and responsible research practices.&rdquo;
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1760B8]" />
                  <span>Disciplined protocol execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1760B8]" />
                  <span>Responsive operational collaboration</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl border border-[#DCE5F0] p-8 shadow-subtle space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] text-[#1760B8] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#17365D]">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed italic">
                &ldquo;To be a trusted clinical services partner recognised for professionalism, collaboration, and a quality-conscious approach to research.&rdquo;
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1760B8]" />
                  <span>Recognised for documentation integrity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1760B8]" />
                  <span>Trusted by investigators and sponsors alike</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="badge-clinical">
              <span>Foundational Values</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17365D] tracking-tight">
              Principles That Guide Our Operations
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every study we support is governed by an unwavering set of operating values designed to protect trial credibility, participant welfare, and sponsor trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#DCE5F0] rounded-2xl p-6 space-y-3 hover:border-[#1760B8] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAF4FF] text-[#1760B8] font-bold text-sm flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#17365D]">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Philosophy & Quality Commitment */}
      <section className="section-padding bg-[#17365D] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-[#EAF4FF] border border-white/20">
                <HeartHandshake className="w-3.5 h-3.5 text-[#60a5fa]" />
                <span>Working Philosophy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug">
                Collaborative Working & Continuous Quality Oversight
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                We operate not as distant third-party contractors, but as dedicated operational partners integrated into your clinical trial workflow. We maintain transparent communication channels, continuous progress logging, and proactive roadblock identification to ensure your milestones are achieved with scientific rigor.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/services"
                  className="btn-primary !bg-[#2F80ED] hover:!bg-[#1760B8] !py-3 !px-6 text-sm"
                >
                  Explore Clinical Services
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline-white !py-3 !px-6 text-sm"
                >
                  Discuss Your Requirements
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl h-80 w-full group">
                <Image
                  src="/images/clinical/study-startup-collaboration.jpg"
                  alt="Multidisciplinary research coordination meeting in progress"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17365D]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs space-y-1">
                  <span className="font-semibold text-[#60a5fa] block uppercase tracking-wider text-[10px]">Cross-Functional Team Collaboration</span>
                  <p className="text-slate-200 text-xs">Direct alignment between investigators, sponsor monitors, and site coordinators.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
