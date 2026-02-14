"use client";

import React from "react";
import Image from "next/image";
import {
  IconCheck,
  IconSettings,
  IconPick,
  IconShieldCheck,
} from "@tabler/icons-react";

const miningFeatures = [
  "Surface & Open-Cast Mining",
  "Precision Drilling & Blasting",
  "Mineral Resource Estimation",
  "Mine Site Rehabilitation",
  "Haulage & Crushing Services",
];

export const MiningDetailSection = () => {
  return (
    <section id="mining" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Image with Technical Overlay */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/mining-detail.jpg"
                alt="Mining Operations"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Floating Stat Badge */}
              <div className="absolute bottom-8 right-8 bg-amber-500 p-6 rounded-2xl shadow-xl text-slate-950">
                <p className="text-4xl font-black leading-none">1.2M</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">
                  Tons Extracted Annually
                </p>
              </div>
            </div>
            {/* Architectural Grid Line Decoration */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-amber-500/30 rounded-tl-3xl -z-10" />
          </div>

          {/* Right: Technical Narrative */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full">
              <IconPick size={16} className="text-amber-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Service Category: 01
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic leading-tight">
              Mining & <br />
              <span className="text-amber-500">Mineral Extraction.</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              FORBLIZ specializes in high-yield mineral extraction operations.
              We combine advanced geological surveying with a massive fleet of
              crushers and haulers to deliver raw material efficiency at scale.
            </p>

            {/* Feature List */}
            <ul className="grid sm:grid-cols-2 gap-4">
              {miningFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-700 font-bold text-sm"
                >
                  <div className="bg-amber-500/10 p-1 rounded-md">
                    <IconCheck
                      size={14}
                      className="text-amber-600"
                      strokeWidth={3}
                    />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-slate-100 flex gap-8">
              <div className="flex items-center gap-3">
                <IconSettings className="text-slate-400" />
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-tighter">
                  Modern Equipment
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconShieldCheck className="text-slate-400" />
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-tighter">
                  EIA Compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
