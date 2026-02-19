"use client";

import React from "react";
import Image from "next/image";
import {
  IconUsers,
  IconCalendarEvent,
  IconLocation,
  IconTractor,
  IconChartInfographic,
  IconQuote,
} from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Projects Forbliz Global Resources | Heavy Equipment & Industrial Services",
  description:
    "Forbliz Global Resources Ltd is a premier industrial partner providing heavy equipment sourcing, civil infrastructure engineering, and site mobilization across Nigeria.",
};

export default function ProjectDetail() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Technical Header */}
      <section className="pt-32 pb-16 bg-[#020806] text-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 items-end">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 text-amber-500 mb-6 font-black uppercase tracking-[0.3em] text-xs">
                <IconLocation size={16} /> Delta State, Nigeria
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic leading-none mb-8">
                Delta Quarry <br className="hidden lg:block" />
                <span className="text-amber-500 text-3xl md:text-5xl border-l-4 border-amber-500 pl-6 block mt-4 not-italic font-bold tracking-normal">
                  Phase II Expansion & Extraction
                </span>
              </h1>
            </div>

            {/* Quick Specs Box */}
            <div className="grid grid-cols-2 gap-4 bg-white/5 p-6 rounded-3xl border border-white/10">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest">
                  Duration
                </p>
                <p className="font-bold">24 Months</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest">
                  Personnel
                </p>
                <p className="font-bold">85 On-Site</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest">
                  Fleet Size
                </p>
                <p className="font-bold">12 Units</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest">
                  Status
                </p>
                <p className="text-emerald-500 font-bold uppercase text-xs">
                  Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Project Narrative & Machinery */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/project-quarry.jpg"
                  alt="Site Operation"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-black uppercase italic text-slate-900">
                  The Challenge
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  The expansion required navigating high-density granite layers
                  while maintaining active operations in adjacent zones. Our
                  team had to implement a staggered blasting schedule to ensure
                  zero downtime for the existing processing plant.
                </p>
              </div>
            </div>

            {/* Sidebar: Technical Assets */}
            <div className="space-y-8">
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-200">
                <h4 className="flex items-center gap-3 text-lg font-black uppercase italic text-slate-900 mb-6">
                  <IconTractor className="text-amber-500" /> Fleet Deployed
                </h4>
                <ul className="space-y-4">
                  {[
                    "3x CAT 390F Excavators",
                    "5x Terex TR100 Haulers",
                    "2x Metso Mobile Crushers",
                    "1x Komatsu D375A Dozer",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm font-bold text-slate-600"
                    >
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* AIRMOB Synergy Note */}
              <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem]">
                <h4 className="text-sm font-black uppercase italic text-emerald-700 mb-2">
                  Logistical Edge
                </h4>
                <p className="text-xs text-emerald-800/70 font-medium">
                  Site fueling was managed via **AIRMOB Nigeria** dedicated
                  mobile dispensers, maintaining 99.8% fleet uptime over 24
                  months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Final Result / Impact Section */}
      <section className="py-16 md:py-20 bg-slate-900 text-white rounded-t-[4rem]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <IconChartInfographic size={48} className="text-amber-500" />
              <h3 className="text-4xl font-black uppercase italic">
                Project Impact
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-gray-400 uppercase text-xs font-black tracking-widest">
                    Total Extraction
                  </span>
                  <span className="text-2xl font-bold">1,450,000 Tons</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-gray-400 uppercase text-xs font-black tracking-widest">
                    Safety Incidents
                  </span>
                  <span className="text-2xl font-bold text-emerald-500">
                    0.00
                  </span>
                </div>
              </div>
            </div>
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 italic text-xl text-gray-300 relative">
              <IconQuote
                className="absolute top-6 left-6 text-amber-500/20"
                size={60}
              />
              <p className="relative z-10 pl-8">
                "Forbliz demonstrated exceptional technical mastery in the Agbor
                site. Their fleet reliability—supported by the AIRMOB
                network—was the deciding factor in our project timeline
                success."
              </p>
              <p className="mt-6 text-sm font-black uppercase text-amber-500 tracking-widest pl-8">
                — Project Director, Delta Resources Ltd.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
