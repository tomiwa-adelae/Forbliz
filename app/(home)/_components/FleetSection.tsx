"use client";

import React from "react";
import {
  IconSettings,
  IconWeight,
  IconEngine,
  IconTractor,
} from "@tabler/icons-react";
import Image from "next/image";

const fleet = [
  {
    name: "CAT 6015B Excavator",
    type: "Mass Excavation",
    specs: { weight: "140 Tons", engine: "606 kW", capacity: "8.1 m³" },
    image: "/assets/images/cat-excavator.jpg",
  },
  {
    name: "Komatsu HD785",
    type: "Off-Highway Hauler",
    specs: { weight: "100 Tons", engine: "895 kW", capacity: "60 m³" },
    image: "/assets/images/hauler.jpg",
  },
];

export const FleetSection = () => {
  return (
    <section className="py-16 md:py-20 bg-[#040d0a] text-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Content & Stats */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-amber-500 font-black uppercase tracking-[0.3em] text-sm mb-4">
                Operational Power
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic leading-none mb-6">
                The <span className="text-amber-500">Fleet.</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our strength lies in our hardware. FORBLIZ maintains a
                multi-million dollar fleet of Tier-1 heavy machinery, ensuring
                zero downtime on critical mining and civil paths.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-slate-900">
                  <IconSettings size={24} />
                </div>
                <div>
                  <p className="font-bold text-white uppercase tracking-tighter">
                    Precision Maintenance
                  </p>
                  <p className="text-xs text-gray-500">
                    In-house mechanical engineering team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Fleet Showcase */}
          <div className="w-full lg:w-2/3 grid md:grid-cols-2 gap-4">
            {fleet.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-3 transition-all hover:border-amber-500/50"
              >
                <div className="relative h-48 w-full mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-black uppercase italic">
                      {item.name}
                    </h4>
                    <p className="text-amber-500 text-xs font-bold uppercase tracking-widest">
                      {item.type}
                    </p>
                  </div>
                  <IconTractor className="text-white/20" />
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                  <div className="text-center">
                    <IconWeight
                      size={16}
                      className="mx-auto text-gray-500 mb-1"
                    />
                    <p className="text-[10px] text-gray-400 uppercase">
                      Weight
                    </p>
                    <p className="text-xs font-bold">{item.specs.weight}</p>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <IconEngine
                      size={16}
                      className="mx-auto text-gray-500 mb-1"
                    />
                    <p className="text-[10px] text-gray-400 uppercase">Power</p>
                    <p className="text-xs font-bold">{item.specs.engine}</p>
                  </div>
                  <div className="text-center">
                    <IconTractor
                      size={16}
                      className="mx-auto text-gray-500 mb-1"
                    />
                    <p className="text-[10px] text-gray-400 uppercase">Load</p>
                    <p className="text-xs font-bold">{item.specs.capacity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
