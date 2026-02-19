"use client";

import React from "react";
import Image from "next/image";
import { IconCheck, IconCrane, IconRoad, IconTower } from "@tabler/icons-react";

const civilFeatures = [
  "Highway & Road Construction",
  "Reinforced Concrete Structures",
  "Site Grading & Land Clearing",
  "Drainage & Irrigation Systems",
  "Industrial Foundation Engineering",
];

export const CivilDetailSection = () => {
  return (
    <section id="civil" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Left: Technical Narrative */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full">
              <IconCrane size={16} className="text-amber-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Service Category: 02
              </span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 uppercase italic leading-tight">
                Civil Works & <br className="hidden lg:block" />
                <span className="text-amber-500">Infrastructure.</span>
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed">
                We provide the structural foundations for national growth. From
                complex highway links to industrial-grade site grading, our
                civil engineering team ensures every project meets rigorous
                structural integrity standards.
              </p>
            </div>
            {/* Feature List */}
            <ul className="grid sm:grid-cols-1 gap-4">
              {civilFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-700 font-bold text-sm bg-white p-4 rounded-xl border border-slate-200 hover:border-amber-500/50 transition-colors shadow-sm"
                >
                  <div className="bg-amber-500 text-slate-950 p-1 rounded-md">
                    <IconCheck size={14} strokeWidth={4} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-slate-200 flex gap-8">
              <div className="flex items-center gap-3">
                <IconRoad className="text-slate-400" />
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-tighter">
                  Urban Development
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconTower className="text-slate-400" />
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-tighter">
                  Structural Steel
                </span>
              </div>
            </div>
          </div>

          {/* Right: Image with Frame Overlay */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/civil-detail.jpg"
                alt="Civil Engineering Site"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Floating Stat Badge */}
              <div className="absolute hidden top-8 left-8 bg-slate-900 border border-white/10 p-6 rounded-2xl shadow-xl text-white backdrop-blur-md">
                <p className="text-4xl font-black leading-none text-amber-500">
                  500+
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest">
                  KMs of Road Completed
                </p>
              </div>
            </div>
            {/* Design Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-amber-500/30 rounded-br-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
