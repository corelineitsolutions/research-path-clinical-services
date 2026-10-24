'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Filter,
  Sparkles,
  Tag
} from 'lucide-react';
import { insightsData } from '@/lib/insightsData';

export default function InsightsListingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(insightsData.map((a) => a.category)));
    return ['All', ...unique];
  }, []);

  const filteredArticles = useMemo(() => {
    return insightsData.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#17365D] via-[#1760B8] to-[#17365D] text-white py-14 sm:py-20">
        <div className="container-custom space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-sm border border-white/20 text-[#EAF4FF]">
            <BookOpen className="w-3.5 h-3.5 text-[#60a5fa]" />
            <span>Articles & Perspectives</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Clinical Research Insights
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            Original publications, regulatory perspectives, and operational best practices curated by the ResearchPath clinical operations group.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F8FAFC] border-b border-[#DCE5F0] py-2.5 text-xs text-[#64748B]">
        <div className="container-custom flex items-center gap-2">
          <Link href="/" className="hover:text-[#1760B8]">Home</Link>
          <span>/</span>
          <span className="text-[#17365D] font-medium">Insights & Articles</span>
        </div>
      </div>

      {/* Search and Category Filter Section */}
      <section className="py-8 bg-white border-b border-[#DCE5F0]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles by title, topic or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DCE5F0] text-xs sm:text-sm text-[#17212F] placeholder-slate-400 focus:border-[#1760B8] focus:ring-1 focus:ring-[#1760B8] transition-colors"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#1760B8] text-white shadow-sm'
                      : 'bg-[#F8FAFC] text-slate-600 border border-[#DCE5F0] hover:bg-[#EAF4FF] hover:text-[#1760B8]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom space-y-8">
          {filteredArticles.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#DCE5F0] p-12 text-center space-y-3 max-w-md mx-auto">
              <p className="text-slate-500 text-sm">No articles matched your search query &ldquo;{searchTerm}&rdquo;.</p>
              <button
                type="button"
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="btn-secondary !text-xs !py-2 !px-4"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-2xl border border-[#DCE5F0] p-6 sm:p-7 shadow-subtle hover:shadow-card hover:border-[#1760B8] transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#64748B]">
                      <span className="font-semibold text-[#1760B8] px-2.5 py-0.5 rounded-full bg-[#EAF4FF] border border-[#DCE5F0]">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h2 className="font-bold text-lg text-[#17365D] group-hover:text-[#1760B8] transition-colors leading-snug">
                      <Link href={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.publishDate}</span>
                    </div>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="font-semibold text-[#1760B8] group-hover:text-[#134e96] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Read Insight</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
