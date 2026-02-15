"use client";

import React from "react";
import {
  IconTruckDelivery,
  IconMapPins,
  IconTimeline,
  IconShieldLock,
} from "@tabler/icons-react";

const logisticsStats = [
  {
    label: "Deployment Speed",
    value: "24-48h",
    sub: "Standard mobilization window",
  },
  { label: "Heavy Haulers", value: "15+", sub: "Dedicated low-bed trailers" },
  { label: "Regional Hubs", value: "04", sub: "Strategically located centers" },
];

export const FleetLogistics = () => {
  return (
    <section className="py-16 md:py-24 bg-[#040d0a] text-white overflow-hidden relative">
      {/* Decorative Texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Side: The Narrative */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-amber-500 font-black uppercase tracking-[0.4em] text-sm">
              Global Mobilization
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic leading-tight">
              From Yard to Site.{" "}
              <span className="text-gray-500">
                No Territory is Out of Reach.
              </span>
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Logistics is where most projects fail. We own our entire supply
              chain, from the low-bed trailers that move our machines to the
              AIRMOB tankers that fuel them on arrival.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500">
                  <IconMapPins size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase italic text-sm">
                    Nationwide Reach
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Full operational coverage across Nigeria and the sub-region.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500">
                  <IconShieldLock size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase italic text-sm">
                    Secure Transport
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Certified escorts and GPS tracking for every asset in
                    transit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The "Power Card" */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[3rem] p-8 md:p-12">
              <div className="flex items-center gap-4 mb-10">
                <IconTruckDelivery size={40} className="text-amber-500" />
                <h4 className="text-xl font-black uppercase italic tracking-widest text-white">
                  Logistics Specs
                </h4>
              </div>

              <div className="space-y-10">
                {logisticsStats.map((stat, i) => (
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
                    <div className="text-3xl md:text-4xl font-black italic">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-white/5 p-6 rounded-2xl flex items-center justify-between border border-white/5">
                <div className="flex items-center gap-4">
                  <IconTimeline className="text-emerald-500" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">
                    Live Logistics Tracking
                  </p>
                </div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
