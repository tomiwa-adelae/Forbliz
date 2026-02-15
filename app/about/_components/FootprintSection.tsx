"use client";

import React from "react";
import {
  IconWorldSearch,
  IconBuildingSkyscraper,
  IconHierarchy2,
} from "@tabler/icons-react";
import Image from "next/image";

export const FootprintSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Map/Visual Representation */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-square md:aspect-video lg:aspect-square w-full rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl bg-white p-8 flex items-center justify-center">
              {/* This would be a high-quality SVG or Image of your operational map */}
              <div className="text-center space-y-4">
                <IconWorldSearch
                  size={80}
                  className="mx-auto text-amber-500 animate-pulse"
                />
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                  Operational Map: West Africa & Beyond
                </p>
              </div>
              <Image
                src="/assets/images/operational-map.jpg"
                alt="Forbliz Operational Footprint"
                fill
                className="object-contain p-12 opacity-20 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </div>

          {/* Right Column: Narrative & Connection */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-amber-600 font-black uppercase tracking-[0.4em] text-sm">
                Our Reach
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 uppercase italic leading-tight">
                Strategic Presence. <br className="hidden lg:block" />
                <span className="text-slate-400">Total Synergy.</span>
              </h3>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              From our headquarters in Lagos to remote mining sites across the
              sub-region, FORBLIZ maintains a agile presence. Our operations are
              seamlessly integrated with the AIRMOB energy network.
            </p>

            {/* Synergy Cards */}
            <div className="grid gap-4">
              <div className="flex gap-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-emerald-500/40 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <IconHierarchy2 size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase italic">
                    The AIRMOB Advantage
                  </h4>
                  <p className="text-sm text-slate-500">
                    Access to premium lubricants and fueling infrastructure for
                    zero-downtime projects.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-amber-500/40 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <IconBuildingSkyscraper size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase italic">
                    Regional Hubs
                  </h4>
                  <p className="text-sm text-slate-500">
                    Logistics centers positioned near major industrial corridors
                    and mining belts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
