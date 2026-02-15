"use client";

import React from "react";
import Image from "next/image";
import {
  IconTractor,
  IconShieldCheck,
  IconTools,
  IconHierarchy2,
} from "@tabler/icons-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-[#020806] overflow-hidden">
      {/* Background: Abstract Machine Detail or blurred site shot */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/fleet-hero-bg.jpg"
          alt="Heavy Machinery Detail"
          fill
          className="object-cover opacity-30 grayscale contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020806] via-[#020806]/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl">
          {/* Synergy Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
            <IconHierarchy2 size={16} className="text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">
              Powered by AIRMOB Energy Network
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] uppercase italic tracking-tighter mb-8">
            Heavy <br className="hidden lg:block" />
            <span className="text-amber-500">Assets.</span>
          </h1>

          <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mb-12">
            Our fleet is our backbone. We maintain a multi-million dollar
            inventory of specialized machinery, precision-engineered to perform
            in the toughest African terrains.
          </p>

          {/* Value Props Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl text-amber-500">
                <IconShieldCheck size={24} />
              </div>
              <div>
                <p className="text-white font-black uppercase italic text-sm">
                  Tier-1 Safety
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Daily inspections & global safety compliance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl text-amber-500">
                <IconTools size={24} />
              </div>
              <div>
                <p className="text-white font-black uppercase italic text-sm">
                  In-House Techs
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Certified engineers for zero-downtime maintenance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl text-amber-500">
                <IconTractor size={24} />
              </div>
              <div>
                <p className="text-white font-black uppercase italic text-sm">
                  Rapid Deploy
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Strategic logistics for fast mobilization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
