import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Users,
  UserCheck,
  Database,
  Compass,
  FileCheck,
  Sparkles,
  Phone,
  Mail
} from 'lucide-react';
import { servicesData } from '@/lib/servicesData';
import { companyInfo } from '@/lib/companyInfo';

export const metadata: Metadata = {
  title: 'Clinical Services Directory | ResearchPath Pune',
  description: 'Explore the full spectrum of verified clinical research support services offered by ResearchPath in Pune, India, including trial operations, coordination, feasibility, and data management.',
};

export default function ServicesDirectoryPage() {
  const getIcon = (name: string) => {
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
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#17365D] via-[#1760B8] to-[#17365D] text-white py-14 sm:py-20">
        <div className="container-custom space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-sm border border-white/20 text-[#EAF4FF]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#60a5fa]" />
            <span>Clinical Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Clinical Research Services
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            Delivering structured operational coordination, site support, and documentation rigor across phase I–IV clinical studies in India.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F8FAFC] border-b border-[#DCE5F0] py-2.5 text-xs text-[#64748B]">
        <div className="container-custom flex items-center gap-2">
          <Link href="/" className="hover:text-[#1760B8]">Home</Link>
          <span>/</span>
          <span className="text-[#17365D] font-medium">Services Directory</span>
        </div>
      </div>

      {/* Intro Note */}
      <section className="pt-12 pb-4 bg-white">
        <div className="container-custom">
          <div className="bg-[#EAF4FF]/60 border border-[#DCE5F0] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <h3 className="text-base sm:text-lg font-bold text-[#17365D]">
                Verified Clinical Service Portfolio
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All services listed below reflect verified operational areas provided by ResearchPath. We operate strictly in compliance with approved study protocols and applicable ethical guidelines. We do not provide unverified or unapproved speculative offerings.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary text-xs !py-3 !px-5 whitespace-nowrap shrink-0 shadow-sm"
            >
              Request Custom Study Scope
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={service.slug}
                className="bg-[#F8FAFC] rounded-2xl border border-[#DCE5F0] p-7 shadow-subtle hover:shadow-card hover:border-[#1760B8] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-[#DCE5F0] flex items-center justify-center">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EAF4FF] text-[#1760B8]">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
                      0{index + 1} • Clinical Service
                    </span>
                    <h2 className="text-xl font-bold text-[#17365D] hover:text-[#1760B8] transition-colors">
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="pt-3 border-t border-[#DCE5F0]">
                    <span className="text-xs font-semibold text-[#17365D] block mb-2">
                      Key Scope Points:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {service.scopeOfSupport.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1760B8] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#DCE5F0] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="btn-primary !text-xs !py-2 !px-4 inline-flex items-center gap-1.5"
                  >
                    <span>Read Details & Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="text-xs font-semibold text-[#1760B8] hover:underline"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Inquiry Help Banner */}
      <section className="bg-[#17365D] text-white py-12 border-t border-[#234b7e]">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Need Guidance on Your Specific Clinical Trial Parameters?</h3>
            <p className="text-xs text-slate-300">
              Speak directly with our clinical operations coordinators in Pune to review your protocol requirements, site needs, and documentation timelines.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${companyInfo.phoneTel}`}
              className="btn-outline-white !py-2.5 !px-5 !text-xs flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#60a5fa]" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="btn-primary !bg-[#2F80ED] hover:!bg-[#1760B8] !py-2.5 !px-5 !text-xs font-semibold"
            >
              Submit Study Scope
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
