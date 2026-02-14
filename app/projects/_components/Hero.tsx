"use client";

import React from "react";
import Image from "next/image";
import { IconCone, IconChartBar, IconSection } from "@tabler/icons-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[60vh] w-full flex items-center pt-24 overflow-hidden bg-[#020806]">
      {/* Background Visual: High-angle drone shot of a quarry or construction site */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/services-bg.jpg"
          alt="Forbliz Project Site"
          fill
          className="object-cover opacity-40 grayscale"
          priority
        />
        {/* Deep Industrial Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020806] via-[#020806]/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-3 text-amber-500 mb-6">
            <IconSection size={20} />
            <span className="text-xs font-black uppercase tracking-[0.4em]">
              Work Portfolio
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] uppercase italic tracking-tighter mb-8">
            Engineering <br />
            <span className="text-amber-500">Landmarks.</span>
          </h1>

          <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl mb-12 border-l-2 border-white/20 pl-6">
            From the heart of the Delta quarries to the urban arteries of Lagos,
            our projects are the physical evidence of our commitment to
            Nigeria's industrial future.
          </p>

          {/* Project Stats Bar */}
          <div className="flex flex-wrap gap-12 py-8 border-t border-white/10">
            <div className="space-y-1">
              <p className="text-4xl font-black text-white italic leading-none">
                42
              </p>
              <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest flex items-center gap-2">
                <IconCone size={12} /> Active Sites
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-black text-white italic leading-none">
                150+
              </p>
              <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest flex items-center gap-2">
                <IconChartBar size={12} /> Completed Tenders
              </p>
            </div>
            <div className="hidden md:block space-y-1">
              <p className="text-4xl font-black text-white italic leading-none">
                100%
              </p>
              <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                Safety Record
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Decorative Element (Bottom Right) */}
      <div className="absolute bottom-0 right-0 p-12 hidden lg:block">
        <p className="text-white/5 text-[12rem] font-black italic leading-none select-none">
          WORKS
        </p>
      </div>
    </section>
  );
};
