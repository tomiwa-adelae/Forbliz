"use client";

import React from "react";
import Image from "next/image";
import {
  IconCheck,
  IconTruckDelivery,
  IconManualGearbox,
  IconGasStation,
} from "@tabler/icons-react";

const logisticsFeatures = [
  "Heavy Machinery Leasing",
  "Site-to-Site Equipment Haulage",
  "Integrated Fuel & Lube Supply",
  "Preventative Fleet Maintenance",
  "Remote Site Logistics Support",
];

export const LogisticsDetailSection = () => {
  return (
    <section id="logistics" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-x-6 gap-y-10">
          {/* Left: High-Impact Image */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100">
              <Image
                src="/assets/images/logistics-fleet.jpg"
                alt="Forbliz Logistics Fleet"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Synergy Badge - Connecting to AIRMOB */}
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-slate-900 shadow-lg">
                    <IconGasStation size={24} />
                  </div>
                  <div>
                    <p className="text-white font-black italic uppercase text-lg leading-none">
                      Logistics Synergy
                    </p>
                    <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mt-1">
                      Guaranteed Fuel & Lube Supply Chain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Narrative */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full">
              <IconTruckDelivery size={16} className="text-amber-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Service Category: 03
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 uppercase italic leading-tight">
                Logistics & <br className="hidden lg:block" />
                <span className="text-amber-500">Fleet Management.</span>
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed">
                Downtime is the enemy of progress. We provide comprehensive
                logistics solutions that ensure your heavy machinery is where it
                needs to be, maintained by experts, and fueled by AIRMOB’s
                premium energy network.
              </p>
            </div>

            {/* Specialized List */}
            <div className="space-y-1.5">
              {logisticsFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-4 hover:bg-slate-50 rounded-2xl transition-colors group"
                >
                  <IconCheck size={20} className="text-amber-500 mt-1" />
                  <div>
                    <p className="text-slate-900 font-black uppercase italic text-sm">
                      {feature}
                    </p>
                    <p className="text-slate-500 text-xs">
                      Ensuring operational continuity in remote terrains.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex gap-8">
              <div className="flex items-center gap-3">
                <IconManualGearbox size={20} className="text-slate-400" />
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-tighter">
                  In-house Tech Team
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconTruckDelivery size={20} className="text-slate-400" />
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-tighter">
                  24/7 Deployment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
