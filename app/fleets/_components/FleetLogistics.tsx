"use client";

import React from "react";
import {
  IconTruckDelivery,
  IconMapPins,
  IconTimeline,
  IconShieldLock,
  IconPackageImport,
} from "@tabler/icons-react";

const sourcingCapabilities = [
  {
    label: "On-Demand Sourcing",
    value: "Global",
    sub: "Direct access to international OEMs",
  },
  {
    label: "Technical Vetting",
    value: "100%",
    sub: "Pre-purchase inspection standards",
  },
  {
    label: "Custom Logistics",
    value: "End-to-End",
    sub: "Direct site delivery across Nigeria",
  },
];

export const FleetLogistics = () => {
  return (
    <section className="py-16 md:py-24 bg-[#040d0a] text-white overflow-hidden relative">
      {/* Decorative Texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Side: The Narrative */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-amber-500 font-black uppercase tracking-[0.4em] text-sm">
              Operational Strategy
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic leading-tight">
              Sourcing Power. <br />
              <span className="text-gray-500">
                The Right Iron for the Right Task.
              </span>
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              While we expand our physical inventory, our strength lies in our
              **Global Sourcing Network**. We act as a technical bridge,
              securing high-performance machinery tailored specifically to your
              site's geological requirements and project budget.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500">
                  <IconPackageImport size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase italic text-sm">
                    Verified Sourcing
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Direct procurement pipelines for CAT, Komatsu, and Liebherr.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500">
                  <IconShieldLock size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase italic text-sm">
                    Asset Management
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Complete oversight of fleet mobilization and site
                    integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The "Capability Card" */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[3rem] p-8 md:p-12">
              <div className="flex items-center gap-4 mb-10">
                <IconTimeline size={40} className="text-amber-500" />
                <h4 className="text-xl font-black uppercase italic tracking-widest text-white">
                  Procurement Specs
                </h4>
              </div>

              <div className="space-y-10 relative">
                {sourcingCapabilities.map((stat, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-end border-b border-white/10 pb-6 group"
                  >
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 mb-1 group-hover:translate-x-2 transition-transform">
                        {stat.label}
                      </p>
                      <p className="text-gray-400 text-xs font-medium italic">
                        {stat.sub}
                      </p>
                    </div>
                    <div className="text-xl md:text-2xl font-black italic text-right">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-amber-500/10 p-6 rounded-2xl flex items-center justify-between border border-amber-500/20">
                <div className="flex items-center gap-4">
                  <IconTruckDelivery className="text-amber-500" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-amber-500">
                    Phase 1 Inventory Mobilizing Q3 2026
                  </p>
                </div>
                <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
