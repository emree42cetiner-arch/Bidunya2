"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { quoteText, whatsappHref } from "@/data/site";

const slides = [
  {
    title: "Kurumsal kupa, madalya ve plaket üretiminde hızlı teklif",
    description:
      "Turnuva, okul, şirket ve özel etkinlikler için kişiye özel ödül modellerini ürün koduyla kolayca talep edin.",
    href: "/kupa-odul",
    image: "/images/catalog/hero-kupa.webp",
    alt: "Altın futbol topu detaylı modern kupa ödülü",
    mobilePosition: "object-[76%_center]",
  },
  {
    title: "Prestijli plaket ve kristal ödül çözümleri",
    description:
      "Kristal, ahşap ve kutulu plaket seçeneklerini kurumsal kimliğinize uygun metin ve logo ile hazırlayalım.",
    href: "/kristal-plaket",
    image: "/images/catalog/hero-plaket.webp",
    alt: "Altın detaylı modern kristal plaket",
    mobilePosition: "object-[74%_center]",
  },
  {
    title: "Etkinliğe özel madalya üretimi",
    description:
      "Madalya, kurdele, kutu ve logo uygulamalarını toplu organizasyonlar için planlı ve hızlı şekilde üretelim.",
    href: "/madalya",
    image: "/images/catalog/hero-madalya.webp",
    alt: "Altın çerçeveli kurumsal madalya",
    mobilePosition: "object-[72%_center]",
  },
];

const quoteSteps = ["Ürünü seç", "Kodunu gönder", "Hızlı teklif al"];

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={activeSlide.image}
          alt={activeSlide.alt}
          fill
          priority
          sizes="100vw"
          className={`object-cover sm:object-center ${activeSlide.mobilePosition}`}
        />
        <div className="absolute inset-0 bg-slate-900/48" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.82),rgba(15,23,42,0.62),rgba(15,23,42,0.26))]" />
      </div>

      <div className="mx-auto grid min-h-[470px] max-w-7xl content-center gap-10 px-4 py-14 sm:px-6 md:min-h-[560px] lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
            BİDÜNYA REKLAM KATALOG
          </p>
          <div className="mt-5 h-px w-24 bg-gold" />
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {activeSlide.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base font-light leading-8 text-slate-100 sm:text-lg">
            {activeSlide.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={activeSlide.href}
              className="rounded-md bg-gold px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:shadow-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              Kataloğu İncele
            </Link>
            <a
              href={whatsappHref(quoteText(activeSlide.title))}
              className="rounded-md border border-champagne/40 bg-white/8 px-6 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:border-gold hover:shadow-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              WhatsApp ile Teklif Al
            </a>
          </div>

          <div className="mt-9 grid gap-2 border-l border-gold/70 pl-4 sm:inline-grid sm:grid-cols-3 sm:border-l-0 sm:pl-0">
            {quoteSteps.map((step, index) => (
              <div key={step} className="rounded-md bg-white/8 px-4 py-3 ring-1 ring-white/10 backdrop-blur">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">0{index + 1}</span>
                <p className="mt-1 text-sm font-medium text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.href}
              type="button"
              className={`h-1.5 rounded-sm transition ${index === activeIndex ? "w-10 bg-gold" : "w-5 bg-white/45"}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`${index + 1}. slayta geç`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
