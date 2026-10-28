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
                  width={356}
                  height={75}
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

      {/* Lower Footer: Legal, Originality Notice, Copyright, & Social Channels */}
      <div className="bg-[#0f233c] text-xs text-slate-400 py-6 border-t border-[#1d3d63]">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-0.5">
            <p className="text-slate-300">
              &copy; {currentYear} {companyInfo.name} — {companyInfo.descriptor}
            </p>
            <p className="text-xs text-slate-400">
              All Rights Reserved
            </p>
          </div>

          {/* Right side: Single-line Legal Links & Social Channels below */}
          <div className="flex flex-col items-center md:items-end gap-3.5 shrink-0">
            {/* Single-line legal links */}
            <div className="flex items-center whitespace-nowrap gap-3 sm:gap-4 text-xs text-slate-300">
              <Link href="/privacy-policy" className="hover:text-white hover:underline transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-600 select-none">•</span>
              <Link href="/terms-of-use" className="hover:text-white hover:underline transition-colors">
                Terms of Use
              </Link>
              <span className="text-slate-600 select-none">•</span>
              <Link href="/cookie-policy" className="hover:text-white hover:underline transition-colors">
                Cookie Policy
              </Link>
            </div>

            {/* Social channels: Instagram, Facebook, LinkedIn, WhatsApp */}
            <div className="flex items-center gap-2.5">
              {/* Instagram */}
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E1306C] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                aria-label="Follow ResearchPath on Instagram"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                aria-label="Visit ResearchPath on Facebook"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                aria-label="Connect with ResearchPath on LinkedIn"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={companyInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                aria-label={`Chat with ResearchPath on WhatsApp (${companyInfo.social.whatsappNumber})`}
                title="Chat on WhatsApp (+91 91464 52014)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.075-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
