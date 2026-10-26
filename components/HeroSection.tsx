'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    src: '/images/hero-slider/slide-1.jpg',
    alt: 'Clinical doctor and physician in medical research facility',
  },
  {
    id: 2,
    src: '/images/hero-slider/slide-2.jpeg',
    alt: 'Scientific DNA double-helix molecular structure visualization',
  },
  {
    id: 3,
    src: '/images/hero-slider/slide-3.jpg',
    alt: 'ResearchPath clinical trial operations team in research laboratory',
  },
];

// Extend with clone of first slide for unbroken, infinite forward sliding
const extendedSlides = [...slides, { ...slides[0], id: 'clone-0' }];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Automatically cycle through background slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  // Seamless infinite loop handler
  const handleTransitionEnd = () => {
    if (currentIndex >= slides.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  const goToSlide = (idx: number) => {
    setIsTransitioning(true);
    setCurrentIndex(idx);
  };

  const activeIndicator = currentIndex % slides.length;

  return (
    <section 
      className="relative w-full bg-[#081528] text-white overflow-hidden min-h-[500px] sm:min-h-[570px] md:min-h-[640px] lg:min-h-[710px] xl:min-h-[760px] flex items-center" 
      id="hero"
    >
      {/* 1. CONTINUOUS HORIZONTAL SLIDING BACKGROUND TRACK (3s Loop) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className={`flex h-full w-full ${
            isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, idx) => (
            <div 
              key={`${slide.id}-${idx}`} 
              className="relative min-w-full w-full h-full shrink-0"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* 2. AMBIENT OVERLAY WEIGHTED TO THE LEFT (Maximum text contrast on left, rich image visibility on right) */}
        <div className="absolute inset-0 z-10 bg-[#071322]/40" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#071322]/85 via-[#071322]/50 to-[#071322]/25" />
        <div className="absolute top-0 inset-x-0 h-16 z-10 bg-gradient-to-b from-[#071322]/70 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-16 z-10 bg-gradient-to-t from-[#071322]/85 to-transparent" />
      </div>

      {/* 3. FOREGROUND CONTENT: Left-Aligned Headline (-8% Sizing) */}
      <div className="container-custom relative z-20 py-12 sm:py-16 md:py-20 lg:py-24 w-full">
        <div className="max-w-4xl lg:max-w-5xl flex flex-col items-start text-left">
          
          {/* Minimal Accent Bar */}
          <div className="mb-4 sm:mb-6">
            <span className="block w-16 sm:w-24 h-1.5 rounded-full bg-gradient-to-r from-[#58A5FF] via-[#2F80ED] to-transparent shadow-lg shadow-[#2F80ED]/40" />
          </div>

          {/* Headline (-8% Size) */}
          <h1 className="text-[33px] min-[380px]:text-[40px] sm:text-[49px] md:text-[57px] lg:text-[59px] xl:text-[66px] font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.12] drop-shadow-md">
            Supporting Better Clinical Research{' '}
            <br className="hidden md:inline" />
            Through{' '}
            <span className="bg-gradient-to-r from-[#58A5FF] via-[#93C5FD] to-[#58A5FF] bg-clip-text text-transparent drop-shadow-sm">
              <span className="whitespace-nowrap">Quality-Driven</span> Services
            </span>
          </h1>

          {/* Slider Indicators — Left-Aligned under Headline */}
          <div className="flex items-center gap-2.5 mt-7 sm:mt-9">
            {slides.map((_, idx) => (
              <button
                key={idx}
                id={`hero-slide-btn-${idx}`}
                type="button"
                onClick={() => goToSlide(idx)}
                className="py-2 px-1 focus:outline-none group cursor-pointer"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === activeIndicator 
                      ? 'w-10 bg-[#58A5FF] shadow-md shadow-[#58A5FF]/50' 
                      : 'w-2.5 bg-white/40 group-hover:bg-white/70'
                  }`}
                />
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
