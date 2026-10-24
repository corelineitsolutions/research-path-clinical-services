import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Clock,
  Layers,
  FileCheck,
  AlertCircle,
  Phone,
  Mail,
  Share2
} from 'lucide-react';
import { servicesData, ServiceItem } from '@/lib/servicesData';
import ContactForm from '@/components/ContactForm';
import { companyInfo } from '@/lib/companyInfo';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | ResearchPath Clinical Services`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ResearchPath Clinical Services`,
      description: service.shortDescription,
      url: `https://researchpath.in/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Service Header Banner */}
      <section className="bg-gradient-to-r from-[#17365D] via-[#1760B8] to-[#17365D] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="container-custom relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-sm border border-white/20 text-[#EAF4FF]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#60a5fa]" />
            <span>{service.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {service.title}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-[#F8FAFC] border-b border-[#DCE5F0] py-2.5 text-xs text-[#64748B]">
        <div className="container-custom flex items-center gap-2">
          <Link href="/" className="hover:text-[#1760B8]">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#1760B8]">Services</Link>
          <span>/</span>
          <span className="text-[#17365D] font-medium">{service.title}</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Area: Details, Scope, Workflow, FAQs */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Service Featured Image Visual */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-[#DCE5F0] shadow-card group">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17365D]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                    {service.badge} Core Focus
                  </span>
                  <span className="text-slate-200 hidden sm:inline text-[11px]">
                    ResearchPath Clinical Operations • Pune, India
                  </span>
                </div>
              </div>

              {/* 1. What the service involves (Overview) */}
              <div className="space-y-4">
                <div className="badge-clinical">
                  <span>Service Overview</span>
                </div>
                <h2 className="text-2xl font-bold text-[#17365D] tracking-tight">
                  What This Service Involves
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.overview}
                </p>
              </div>

              {/* 2. Who it is intended for */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-[#17365D] tracking-tight">
                  Who It Is Intended For
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.intendedFor.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F8FAFC] border border-[#DCE5F0] rounded-xl p-4 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1760B8] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Scope of Support */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-[#17365D] tracking-tight">
                  Scope of Support
                </h2>
                <div className="bg-[#F8FAFC] border border-[#DCE5F0] rounded-2xl p-6 sm:p-7 space-y-3">
                  <p className="text-xs text-slate-500 mb-2">
                    Our team provides disciplined coordination across the following agreed operational parameters:
                  </p>
                  <ul className="space-y-2.5">
                    {service.scopeOfSupport.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1760B8] mt-2 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 4. Relevant Workflow */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-[#17365D] tracking-tight">
                  Operational Workflow Stages
                </h2>
                <div className="space-y-4">
                  {service.workflow.map((step) => (
                    <div
                      key={step.step}
                      className="bg-white border border-[#DCE5F0] rounded-xl p-5 shadow-subtle flex items-start gap-4"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#EAF4FF] text-[#1760B8] flex items-center justify-center font-bold text-sm shrink-0">
                        0{step.step}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-sm sm:text-base text-[#17365D]">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Expected Deliverables */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="text-xl font-bold text-[#17365D] tracking-tight">
                  Expected Deliverables
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-[#DCE5F0] bg-white shadow-subtle flex items-start gap-2.5"
                    >
                      <FileCheck className="w-4 h-4 text-[#1760B8] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Quality Considerations */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="bg-[#EAF4FF]/70 border border-[#DCE5F0] rounded-2xl p-6 sm:p-7 space-y-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#17365D]">
                    <ShieldCheck className="w-5 h-5 text-[#1760B8]" />
                    <span>Quality Considerations & Safeguards</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {service.qualityConsiderations.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1760B8] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500 pt-2 border-t border-[#DCE5F0]/60 italic">
                    Note: ResearchPath provides coordination and operational support. We do not provide guarantees regarding regulatory approval decisions, trial clinical efficacy, or patient recruitment targets.
                  </p>
                </div>
              </div>

              {/* 7. Frequently Asked Questions */}
              <div className="space-y-5 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#1760B8]" />
                  <h2 className="text-xl font-bold text-[#17365D] tracking-tight">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-[#DCE5F0] rounded-xl p-5 bg-[#F8FAFC]"
                    >
                      <h3 className="font-bold text-sm text-[#17365D] mb-1.5">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar: Contact Form & Quick Meta */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Quick Inquiry Form Box */}
              <div className="sticky top-24 space-y-6">
                <ContactForm defaultService={service.title} />

                {/* Quick Office Card */}
                <div className="bg-[#F8FAFC] border border-[#DCE5F0] rounded-2xl p-6 text-xs text-slate-600 space-y-3">
                  <h4 className="font-bold text-sm text-[#17365D]">Operational Office</h4>
                  <p>{companyInfo.address.full}</p>
                  <div className="pt-2 border-t border-slate-200 space-y-1.5 font-medium">
                    <p>Phone: <a href={`tel:${companyInfo.phoneTel}`} className="text-[#1760B8]">{companyInfo.phoneDisplay}</a></p>
                    <p>Email: <a href={`mailto:${companyInfo.email}`} className="text-[#1760B8]">{companyInfo.email}</a></p>
                  </div>
                </div>

                {/* Other Services Navigation */}
                <div className="bg-white border border-[#DCE5F0] rounded-2xl p-6 shadow-subtle space-y-3">
                  <h4 className="font-bold text-sm text-[#17365D]">Other Clinical Services</h4>
                  <div className="space-y-1.5 text-xs">
                    {servicesData
                      .filter((s) => s.slug !== service.slug)
                      .map((other) => (
                        <Link
                          key={other.slug}
                          href={`/services/${other.slug}`}
                          className="block p-2 rounded-lg hover:bg-[#EAF4FF] hover:text-[#1760B8] transition-colors text-slate-700 font-medium"
                        >
                          {other.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
