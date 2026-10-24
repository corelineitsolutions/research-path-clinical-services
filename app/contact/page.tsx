import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  FileCheck,
  Lock,
  ArrowRight
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { companyInfo } from '@/lib/companyInfo';

export const metadata: Metadata = {
  title: 'Contact ResearchPath | Clinical Services Pune',
  description: 'Connect with ResearchPath Clinical Services in Kharadi, Pune, India. Contact us for trial operations, site feasibility, clinical coordination, and regulatory documentation inquiries.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#17365D] via-[#1760B8] to-[#17365D] text-white py-14 sm:py-20">
        <div className="container-custom space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-sm border border-white/20 text-[#EAF4FF]">
            <Phone className="w-3.5 h-3.5 text-[#60a5fa]" />
            <span>Connect With Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Contact ResearchPath
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            Discuss your study requirements, site feasibility scopes, or operational coordination needs with our team in Pune, India.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F8FAFC] border-b border-[#DCE5F0] py-2.5 text-xs text-[#64748B]">
        <div className="container-custom flex items-center gap-2">
          <Link href="/" className="hover:text-[#1760B8]">Home</Link>
          <span>/</span>
          <span className="text-[#17365D] font-medium">Contact Us</span>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Contact Details, Location & Response SLAs */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Official Office Details Card */}
              <div className="bg-white rounded-2xl border border-[#DCE5F0] p-7 shadow-card space-y-6">
                <div className="border-b border-[#DCE5F0] pb-4">
                  <span className="text-xs font-bold text-[#1760B8] uppercase tracking-wider block mb-1">
                    Corporate Office
                  </span>
                  <h3 className="text-xl font-bold text-[#17365D]">
                    ResearchPath Clinical Services
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Pune Operational Hub, Maharashtra, India
                  </p>
                </div>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#1760B8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider">
                        Address
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                        {companyInfo.address.full}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#1760B8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider">
                        Telephone
                      </strong>
                      <a
                        href={`tel:${companyInfo.phoneTel}`}
                        className="text-xs sm:text-sm text-[#1760B8] font-bold hover:underline block mt-0.5"
                      >
                        {companyInfo.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#1760B8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider">
                        Official Inquiries
                      </strong>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-xs sm:text-sm text-[#1760B8] font-bold hover:underline block mt-0.5"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#1760B8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider">
                        Operating Hours
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                        {companyInfo.operatingHours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#EAF4FF]/80 border border-[#DCE5F0] text-xs text-[#17365D] space-y-1">
                  <span className="font-bold block">Inquiry Response Commitment</span>
                  <p className="text-slate-600 leading-relaxed">
                    All formal study inquiries and feasibility requests are reviewed by our operations team with responses typically provided within one business day.
                  </p>
                </div>
              </div>

              {/* Location Landmark Guide */}
              <div className="bg-white rounded-2xl border border-[#DCE5F0] p-6 shadow-subtle space-y-3">
                <h4 className="font-bold text-sm text-[#17365D] flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#1760B8]" />
                  <span>Kharadi IT & Healthcare Hub Location</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Located at City Vista in Kharadi, Pune, our operational facility is conveniently connected to major academic medical hospitals, diagnostic centers, and Pune International Airport (PNQ), facilitating rapid coordination across regional study sites.
                </p>
              </div>

              {/* Data Safeguard Reminder */}
              <div className="bg-[#17365D] text-white rounded-2xl p-6 shadow-subtle space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#60a5fa] uppercase tracking-wider">
                  <Lock className="w-4 h-4 text-[#60a5fa]" />
                  <span>Confidentiality Safeguards</span>
                </div>
                <h4 className="font-bold text-sm text-white">Non-Disclosure & Protocol Privacy</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We execute mutual Non-Disclosure Agreements (NDAs) prior to receiving proprietary clinical synopses, investigator brochures, or draft clinical protocols.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
