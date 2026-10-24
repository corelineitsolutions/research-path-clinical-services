import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';
import { companyInfo } from '@/lib/companyInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#17365D] text-white border-t border-[#234b7e]">
      {/* Upper Footer: Main Columns */}
      <div className="container-custom py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
              <div className="relative h-12 w-auto max-w-[280px]">
                <Image
                  src="/images/logo-horizontal-white.png"
                  alt="ResearchPath — Clinical Services"
                  width={340}
                  height={52}
                  className="h-11 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              ResearchPath supports clinical research teams, sponsors, and healthcare stakeholders through dependable operational coordination, documentation rigor, and a responsible, quality-driven approach.
            </p>

            <div className="pt-2 border-t border-white/10 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2F80ED] shrink-0" />
                <span>Dedicated Clinical Services Provider</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#2F80ED] shrink-0" />
                <span>Standardized, Audit-Ready Documentation Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white border-b border-white/10 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors">
                  About ResearchPath
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:underline transition-colors">
                  Clinical Services
                </Link>
              </li>
              <li>
                <Link href="/quality-compliance" className="hover:text-white hover:underline transition-colors">
                  Quality & Compliance
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white hover:underline transition-colors">
                  Insights & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Approved Clinical Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white border-b border-white/10 pb-2">
              Clinical Services
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white hover:underline transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-[#2F80ED]" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white border-b border-white/10 pb-2">
              Contact & Location
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2F80ED] shrink-0 mt-0.5" />
                <span>
                  {companyInfo.address.full}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2F80ED] shrink-0" />
                <a
                  href={`tel:${companyInfo.phoneTel}`}
                  className="hover:text-white font-medium"
                >
                  {companyInfo.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2F80ED] shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-white"
                >
                  {companyInfo.email}
                </a>
              </div>
              <div className="pt-2 text-xs text-slate-400">
                Operating Hours: {companyInfo.operatingHours}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary text-xs w-full text-center !py-2.5 !bg-[#2F80ED] hover:!bg-[#1760B8]"
              >
                Discuss Study Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer: Legal, Originality Notice, & Copyright */}
      <div className="bg-[#0f233c] text-xs text-slate-400 py-6 border-t border-[#1d3d63]">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-1">
            <p>
              &copy; {currentYear} {companyInfo.name} — {companyInfo.descriptor}. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500">
              ResearchPath is an independent clinical services business based in Pune, Maharashtra. We operate exclusively as a clinical research services organisation and not as an educational or vocational institute.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-300">
            <Link href="/privacy-policy" className="hover:text-white hover:underline">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/terms-of-use" className="hover:text-white hover:underline">
              Terms of Use
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/cookie-policy" className="hover:text-white hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
