import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  BookOpen,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { insightsData } from '@/lib/insightsData';
import { companyInfo } from '@/lib/companyInfo';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return insightsData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = insightsData.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} | ResearchPath Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishDate,
      authors: [article.author],
      url: `https://researchpath.in/insights/${article.slug}`,
    },
  };
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = insightsData.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = insightsData.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Article Header */}
      <section className="bg-gradient-to-r from-[#17365D] via-[#1760B8] to-[#17365D] text-white py-14 sm:py-20">
        <div className="container-custom max-w-4xl space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#EAF4FF]">
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.publishDate}</span>
            </div>
            <span className="text-slate-400">•</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs text-slate-200">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
              RP
            </div>
            <div>
              <p className="font-semibold text-white">{article.author}</p>
              <p className="text-slate-300 text-[11px]">{article.authorRole} • Pune, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F8FAFC] border-b border-[#DCE5F0] py-2.5 text-xs text-[#64748B]">
        <div className="container-custom max-w-4xl flex items-center gap-2">
          <Link href="/" className="hover:text-[#1760B8]">Home</Link>
          <span>/</span>
          <Link href="/insights" className="hover:text-[#1760B8]">Insights</Link>
          <span>/</span>
          <span className="text-[#17365D] font-medium line-clamp-1">{article.title}</span>
        </div>
      </div>

      {/* Article Body */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            
            {/* Key Takeaways Box */}
            <div className="bg-[#EAF4FF]/80 border border-[#DCE5F0] rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1760B8] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#2F80ED]" />
                <span>Executive Summary & Key Takeaways</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {article.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1760B8] shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content Paragraphs */}
            <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              {article.content.map((paragraph, idx) => (
                <p key={idx} className="text-justify sm:text-left">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Author Attribution Box */}
            <div className="pt-8 mt-12 border-t border-[#DCE5F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#F8FAFC] p-6 rounded-2xl">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">Published By</span>
                <h4 className="font-bold text-sm text-[#17365D]">{article.author}</h4>
                <p className="text-xs text-slate-500">
                  {companyInfo.name} — {companyInfo.descriptor}, Pune, India.
                </p>
              </div>
              <Link
                href="/insights"
                className="btn-secondary !text-xs !py-2 !px-4 inline-flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Insights Directory</span>
              </Link>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="pt-10 space-y-6">
                <h3 className="text-xl font-bold text-[#17365D]">Related Clinical Perspectives</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedArticles.map((rel) => (
                    <div
                      key={rel.slug}
                      className="p-6 rounded-2xl border border-[#DCE5F0] bg-white shadow-subtle hover:border-[#1760B8] transition-all space-y-3"
                    >
                      <span className="text-[11px] font-semibold text-[#1760B8] uppercase">
                        {rel.category}
                      </span>
                      <h4 className="font-bold text-base text-[#17365D] hover:text-[#1760B8]">
                        <Link href={`/insights/${rel.slug}`}>{rel.title}</Link>
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2">{rel.excerpt}</p>
                      <Link
                        href={`/insights/${rel.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#1760B8] pt-1"
                      >
                        <span>Read perspective</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}
