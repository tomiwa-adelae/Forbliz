"use client";

import React from "react";
import Image from "next/image";
import {
  IconSettingsAutomation,
  IconCrane,
  IconTruckLoading,
} from "@tabler/icons-react";

export const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-[#040d0a] overflow-hidden">
      {/* Subtle Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/services-bg.jpg" // High-angle site overview
          alt="Engineering Services"
          width={1000}
          height={1000}
          className="object-cover size-full opacity-20 grayscale"
        />
        <div className="absolute object-cover inset-0 bg-gradient-to-t from-[#040d0a] to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-amber-500 font-black uppercase tracking-[0.4em] text-sm mb-6">
            Our Capabilities
          </h2>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-none mb-8">
            Industrial <br className="hidden lg:block" />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Solutions.
            </span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl font-medium">
            From preliminary earthworks to full-scale mineral extraction,
            FORBLIZ provides the specialized machinery and technical precision
            required for high-stakes environments.
          </p>
        </div>

        {/* Quick Jump / Category Pills */}
        <div className="flex flex-wrap gap-4 mt-12">
          {[
            { label: "Mining", icon: <IconSettingsAutomation size={18} /> },
            { label: "Civil Works", icon: <IconCrane size={18} /> },
            { label: "Logistics", icon: <IconTruckLoading size={18} /> },
          ].map((item, i) => (
            <button
              key={i}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold uppercase text-xs tracking-widest hover:bg-amber-500 hover:text-slate-950 transition-all"
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
