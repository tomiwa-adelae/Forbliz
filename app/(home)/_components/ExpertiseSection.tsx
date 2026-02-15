"use client";

import React from "react";
import {
  IconPick,
  IconBuildingBridge,
  IconTruckDelivery,
  IconArrowUpRight,
  IconBackhoe,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

const expertise = [
  {
    title: "Surface & Deep Mining",
    desc: "Large-scale mineral extraction and resource management with precision drilling and blasting operations.",
    icon: <IconPick size={32} />,
    image: "/assets/images/mining.jpg", // Replace with your asset
    color: "from-amber-500/20",
  },
  {
    title: "Civil Infrastructure",
    desc: "Construction of highways, bridges, and industrial foundations that stand the test of time.",
    icon: <IconBuildingBridge size={32} />,
    image: "/assets/images/bridges.jpg",
    color: "from-blue-500/20",
  },
  {
    title: "Earthworks & Excavation",
    desc: "Massive site preparation, trenching, and grading using our state-of-the-art heavy machinery fleet.",
    icon: <IconBackhoe size={32} />,
    image: "/assets/images/excavation.jpg",
    color: "from-emerald-500/20",
  },
  {
    title: "Industrial Logistics",
    desc: "Heavy equipment haulage and supply chain management for remote mining and construction sites.",
    icon: <IconTruckDelivery size={32} />,
    image: "/assets/images/logistics.jpg",
    color: "from-orange-500/20",
  },
];

export const ExpertiseSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-2 mb-8">
          <div className="">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-amber-600 mb-2">
              Core Competencies
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-none uppercase italic">
              Heavy Industry <span className="text-slate-400">Solutions.</span>
            </h3>
          </div>
          <p className="text-slate-600 font-medium leading-relaxed">
            FORBLIZ provides end-to-end operational support for the most
            demanding environments, bridging the gap between resource discovery
            and infrastructure.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
          {expertise.map((item, i) => (
            <div
              key={i}
              className="group relative h-[350px] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* 1. IMAGE LAYER: This was missing */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-30 group-hover:opacity-50 transition-opacity grayscale group-hover:grayscale-0"
                />
                {/* Overlay to ensure text stays readable */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${item.color} via-slate-900/80 to-slate-900`}
                />
              </div>

              {/* 2. CONTENT LAYER */}
              <div className="relative h-full p-8 flex flex-col justify-between z-10">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md text-amber-500 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-black text-white uppercase italic mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 font-medium leading-snug">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white group-hover:text-amber-500 transition-colors"
                >
                  Explore Service <IconArrowUpRight size={18} />
                </Link>
              </div>

              {/* Decorative Subtle Icon in Background */}
              <div className="absolute -bottom-6 -right-6 text-white opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500 scale-150 rotate-12">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
