"use client";

import React from "react";
import Image from "next/image";
import {
  IconEngine,
  IconWeight,
  IconManualGearbox,
  IconArrowUpRight,
  IconFilter,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const machinery = [
  {
    name: "CAT 390F Excavator",
    category: "Mining & Excavation",
    specs: { weight: "90 Tons", power: "391 kW", capacity: "6.0 m³" },
    image: "/assets/images/cat-excavator.jpg",
  },
  {
    name: "Komatsu D375A Dozer",
    category: "Earthworks",
    specs: { weight: "72 Tons", power: "474 kW", blade: "18.5 m³" },
    image: "/assets/images/komatsu-dozer.jpg",
  },
  {
    name: "Terex TR100 Hauler",
    category: "Logistics & Transport",
    specs: { payload: "91 Tons", power: "783 kW", volume: "57 m³" },
    image: "/assets/images/terex-hauler.jpg",
  },
  {
    name: "Metso LT120 Crusher",
    category: "Mineral Processing",
    specs: { weight: "62 Tons", feed: "1200mm", type: "Mobile Jaw" },
    image: "/assets/images/metso-crusher.jpg",
  },
];

export const FleetCatalog = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Catalog Header */}
        <div className="flex flex-col mb-10 gap-8">
          <div className="max-w-xl">
            <h2 className="text-amber-600 font-black uppercase tracking-[0.4em] text-sm mb-4">
              Hardware Asset List
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-none uppercase italic">
              Heavy <br className="hidden lg:block" />
              <span className="text-slate-400">Inventory.</span>
            </h3>
          </div>
        </div>

        {/* Machinery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {machinery.map((item, i) => (
            <div
              key={i}
              className="group relative bg-slate-50 rounded-[2.5rem] p-4 border border-slate-200 transition-all hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div className="relative h-[350px] w-full rounded-[2rem] overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                  {item.category}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">
                    {item.name}
                  </h4>
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-amber-500 group-hover:text-slate-900 group-hover:border-amber-500 transition-all">
                    <IconArrowUpRight size={24} />
                  </div>
                </div>

                {/* Technical Spec Sheet Layout */}
                <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                  {Object.entries(item.specs).map(([key, value], idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {key}
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Footnote */}
        <div className="mt-10 p-8 bg-slate-950 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3 text-white">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-slate-950">
              <IconManualGearbox size={32} />
            </div>
            <div>
              <h5 className="font-black uppercase italic text-lg leading-none">
                Custom Configuration?
              </h5>
              <p className="text-gray-400 text-sm mt-1">
                We can deploy specialized attachments for unique project
                requirements.
              </p>
            </div>
          </div>
          <Button className="w-full md:w-auto">Enquire for Rental</Button>
        </div>
      </div>
    </section>
  );
};
