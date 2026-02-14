"use client";

import React from "react";
import {
  IconSettingsAutomation,
  IconEngine,
  IconDropletHalf2,
  IconAlertTriangle,
} from "@tabler/icons-react";

export const FleetMaintenance = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Tactical Stats & Benefits */}
          <div className="space-y-8">
            <div>
              <h2 className="text-amber-600 font-black uppercase tracking-[0.4em] text-sm mb-4">
                Operational Integrity
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic leading-tight">
                Zero Downtime <br />
                <span className="text-slate-400">Philosophy.</span>
              </h3>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              Every hour a machine sits idle is a loss for your project. Our
              integrated maintenance ecosystem ensures that every unit in the
              FORBLIZ fleet operates at peak efficiency, backed by a 24-hour
              rapid-response technical team.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
                <IconEngine className="text-amber-500 mb-4" size={32} />
                <h4 className="font-black uppercase italic text-slate-900 text-sm">
                  OEM Parts Only
                </h4>
                <p className="text-xs text-slate-500 mt-2">
                  We only use genuine components to ensure machine longevity and
                  safety.
                </p>
              </div>

              <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
                <IconDropletHalf2 className="text-emerald-500 mb-4" size={32} />
                <h4 className="font-black uppercase italic text-slate-900 text-sm">
                  Fluid Analysis
                </h4>
                <p className="text-xs text-slate-500 mt-2">
                  Regular oil and lubricant testing via AIRMOB to predict engine
                  health.
                </p>
              </div>
            </div>
          </div>

          {/* Right: The "Service Protocol" Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-full" />
            <div className="relative bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl">
              <h4 className="text-2xl font-black uppercase italic mb-8 border-b border-white/10 pb-6">
                Maintenance <span className="text-amber-500">Protocol</span>
              </h4>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="text-amber-500 font-black text-xl italic">
                    01
                  </span>
                  <div>
                    <p className="font-bold uppercase text-sm tracking-widest">
                      Pre-Shift Inspection
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Operator-led 50-point safety and fluid check before every
                      deployment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <span className="text-amber-500 font-black text-xl italic">
                    02
                  </span>
                  <div>
                    <p className="font-bold uppercase text-sm tracking-widest">
                      Mobile Workshop Units
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      On-site repair vans equipped for immediate hydraulic and
                      engine fixes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <span className="text-amber-500 font-black text-xl italic">
                    03
                  </span>
                  <div>
                    <p className="font-bold uppercase text-sm tracking-widest">
                      AIRMOB Fuel Scrutiny
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Precision-filtered fuel supply to prevent injector
                      clogging in dusty terrains.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center gap-4">
                <IconAlertTriangle className="text-amber-500 shrink-0" />
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-500">
                  98.4% Average Fleet Availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
