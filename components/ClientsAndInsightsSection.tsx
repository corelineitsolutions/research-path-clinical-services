'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, BookOpen, ShieldCheck } from 'lucide-react';
import { InsightArticle } from '@/lib/insightsData';

interface ClientsAndInsightsSectionProps {
  insightsData: InsightArticle[];
}

export default function ClientsAndInsightsSection({ insightsData }: ClientsAndInsightsSectionProps) {
  const [activeTab, setActiveTab] = useState<'clients' | 'insights'>('clients');

  useEffect(() => {
    // Check hash on mount or hash change
    const handleHash = () => {
      if (typeof window !== 'undefined') {
        if (window.location.hash === '#insights') {
          setActiveTab('insights');
        } else if (window.location.hash === '#clients') {
          setActiveTab('clients');
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const clientLogos = [
    { name: 'Pfizer', logo: '/images/clients/pfizer.png', category: 'Global Biopharma' },
    { name: 'GSK', logo: '/images/clients/gsk.png', category: 'Global Biopharma' },
    { name: 'Cipla', logo: '/images/clients/cipla.png', category: 'Pharmaceuticals' },
    { name: "Dr. Reddy's Laboratories", logo: '/images/clients/dr-reddys.png', category: 'Pharmaceuticals' },
    { name: 'Biocon Biologics', logo: '/images/clients/biocon.png', category: 'Biologics & Biosimilars' },
    { name: 'Syneos Health', logo: '/images/clients/syneos.png', category: 'Global CRO' },
    { name: 'Parexel', logo: '/images/clients/parexel.png', category: 'Global CRO' },
    { name: 'PPD', logo: '/images/clients/ppd.png', category: 'Clinical Research CRO' },
    { name: 'Cognizant Life Sciences', logo: '/images/clients/cognizant.png', category: 'Life Sciences' },
    { name: 'Tata Consultancy Services', logo: '/images/clients/tcs.png', category: 'Life Sciences' },
  ];

  return (
    <section className="section-padding bg-[#F8FAFC] border-t border-[#DCE5F0] scroll-mt-20" id="clients">
      <div className="container-custom">
        {/* Section Header with Interactive Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#DCE5F0]">
          <div className="space-y-3">
            <div className="badge-clinical">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2F80ED]" />
              <span>Industry Collaboration & Perspectives</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17365D] tracking-tight">
              {activeTab === 'clients' ? 'Our Clients' : 'Knowledge & Clinical Insights'}
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              {activeTab === 'clients'
                ? 'Trusted operational collaboration with leading global pharmaceutical sponsors, contract research organizations (CROs), and life sciences innovators.'
                : 'Original educational articles and perspectives on trial operations, documentation best practices, quality frameworks, and participant engagement.'}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/80 backdrop-blur-sm rounded-xl shrink-0 self-start md:self-end border border-slate-300/50">
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'clients'
                  ? 'bg-white text-[#17365D] shadow-sm'
                  : 'text-slate-600 hover:text-[#17365D]'
              }`}
              id="tab-our-clients"
              aria-selected={activeTab === 'clients'}
            >
              <Building2 className="w-4 h-4 text-[#1760B8]" />
              <span>Our Clients</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                activeTab === 'clients' ? 'bg-[#EAF4FF] text-[#1760B8]' : 'bg-slate-300 text-slate-700'
              }`}>
                10
              </span>
            </button>

            <button
              onClick={() => setActiveTab('insights')}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'insights'
                  ? 'bg-white text-[#17365D] shadow-sm'
                  : 'text-slate-600 hover:text-[#17365D]'
              }`}
              id="tab-clinical-insights"
              aria-selected={activeTab === 'insights'}
            >
              <BookOpen className="w-4 h-4 text-[#1760B8]" />
              <span>Clinical Insights</span>
            </button>
          </div>
        </div>

        {/* Tab Content: Our Clients (5 in a column in 2 rows = 10 logos) */}
        {activeTab === 'clients' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              {clientLogos.map((client) => (
                <div
                  key={client.name}
                  className="bg-white rounded-2xl border border-[#DCE5F0] p-6 h-32 flex flex-col items-center justify-center shadow-subtle hover:shadow-card hover:border-[#1760B8]/50 transition-all duration-300 group relative"
                  title={client.name}
                >
                  <div className="relative w-full h-16 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={180}
                      height={65}
                      className="max-h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[10px] font-medium text-slate-400 group-hover:text-[#1760B8] transition-colors mt-2 text-center line-clamp-1">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center">
              <p className="text-xs text-slate-500">
                Supporting clinical trial operations, site feasibility, and regulatory documentation across global and Indian healthcare sponsors.
              </p>
            </div>
          </div>
        )}

        {/* Tab Content: Knowledge & Clinical Insights */}
        {activeTab === 'insights' && (
          <div className="space-y-8 animate-fadeIn" id="insights">
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

            <div className="text-center pt-2">
              <Link
                href="/insights"
                className="btn-secondary text-xs sm:text-sm font-semibold inline-flex items-center gap-2"
              >
                <span>Explore all articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
