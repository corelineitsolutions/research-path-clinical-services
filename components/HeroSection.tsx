'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Shield, FileCheck, Layers } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#17365D] overflow-hidden text-white">
      {/* Background Image Container with Perfect Full-Span Scaling */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-cover.jpg"
          alt="ResearchPath clinical research environment with researchers and monitoring screens"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full"
        />
        {/* Soft, balanced ambient overlay that preserves the vivid colors and center branding while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17365D]/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17365D]/70 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="container-custom relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-lg lg:max-w-md">
          {/* Frosted text panel designed to keep text legible while letting background visuals breathe */}
          <div className="bg-[#17365D]/75 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-4">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider uppercase text-[#EAF4FF]">
              <span className="w-2 h-2 rounded-full bg-[#2F80ED] animate-pulse" />
              <span>CLINICAL SERVICES | PUNE, INDIA</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.2]">
              Supporting Better Clinical Research Through{' '}
              <span className="text-[#60a5fa] underline decoration-[#2F80ED] decoration-2 underline-offset-4">
                Quality-Driven Services
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              ResearchPath aims to support clinical research and healthcare stakeholders through professional services, collaborative working, and a responsible approach to research operations.
            </p>

            {/* CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="btn-primary !py-3 !px-5 text-xs sm:text-sm font-semibold shadow-lg shadow-[#1760B8]/40 flex items-center justify-center gap-2"
                id="hero-primary-cta"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="btn-outline-white !py-3 !px-5 text-xs sm:text-sm font-medium flex items-center justify-center"
                id="hero-secondary-cta"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-3 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px] sm:text-xs text-slate-200">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#60a5fa] shrink-0" />
                <span>Ethical & Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-[#60a5fa] shrink-0" />
                <span>Audit-Ready Records</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#60a5fa] shrink-0" />
                <span>End-to-End Coordination</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Lower Ribbon / Info Bar */}
      <div className="relative z-10 w-full bg-[#17212F]/90 backdrop-blur-sm border-t border-white/10 py-3 text-xs text-slate-300">
        <div className="container-custom flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#2F80ED]" />
            <span className="font-medium text-white">Pune Operational Hub:</span>
            <span>406, B Wing, City Vista, Kharadi, Pune, India</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Direct Line: <strong className="text-white">+91 9146452014</strong></span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span>Email: <strong className="text-white">info@researchpath.in</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
