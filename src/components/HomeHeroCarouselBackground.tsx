'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  { src: '/assets/images/homepage-hero-miami-pylon.png', label: 'Coastal pylon at dusk' },
  { src: '/assets/images/homepage-hero-campus-wayfinding.png', label: 'Campus wayfinding' },
  { src: '/assets/images/homepage-hero-retail-pylon.png', label: 'Retail display pylon' },
  { src: '/assets/images/homepage-hero-product-display.png', label: 'Product display stand' },
  { src: '/assets/images/homepage-hero-dimensional-letters.png', label: 'Dimensional letters' },
  { src: '/assets/images/home-factory-hero.webp', label: 'Factory aerial' },
];

export default function HomeHeroCarouselBackground() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('[aria-labelledby="home-project-title"]');
    if (!hero) return;

    let startX: number | null = null;
    let startY = 0;
    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== 'touch' && event.pointerType !== 'pen') return;
      startX = event.clientX;
      startY = event.clientY;
    };
    const onPointerUp = (event: PointerEvent) => {
      if (startX === null) return;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      startX = null;
      if (Math.abs(deltaX) < 55 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;
      setActiveSlide((current) => (current + (deltaX < 0 ? 1 : slides.length - 1)) % slides.length);
    };
    const onPointerCancel = () => { startX = null; };

    hero.addEventListener('pointerdown', onPointerDown);
    hero.addEventListener('pointerup', onPointerUp);
    hero.addEventListener('pointercancel', onPointerCancel);
    return () => {
      hero.removeEventListener('pointerdown', onPointerDown);
      hero.removeEventListener('pointerup', onPointerUp);
      hero.removeEventListener('pointercancel', onPointerCancel);
    };
  }, []);

  return (
    <>
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div
        className="absolute right-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/45 px-3 py-2 backdrop-blur-sm sm:right-8 sm:top-7"
        role="group"
        aria-label="Homepage background slides"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
        }}
      >
        <button
          type="button"
          aria-label="Previous background image"
          onClick={() => setActiveSlide((current) => (current + slides.length - 1) % slides.length)}
          className="grid h-7 w-7 place-items-center rounded-full text-lg text-white/80 transition hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          ‹
        </button>
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show ${slide.label} background`}
            aria-pressed={index === activeSlide}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white ${index === activeSlide ? 'w-7 bg-white' : 'w-2.5 bg-white/55 hover:bg-white/85'}`}
          />
        ))}
        <button
          type="button"
          aria-label="Next background image"
          onClick={() => setActiveSlide((current) => (current + 1) % slides.length)}
          className="grid h-7 w-7 place-items-center rounded-full text-lg text-white/80 transition hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          ›
        </button>
      </div>
    </>
  );
}
