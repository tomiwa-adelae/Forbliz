"use client";

import React from "react";
import Image from "next/image";
import {
  IconMapPin,
  IconCalendar,
  IconArrowNarrowRight,
  IconCategory,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { ComingSoon } from "@/components/ComingSoon";

const projects = [
  {
    title: "Delta Quarry Deep-Mining",
    location: "Agbor, Delta State",
    year: "2024",
    category: "Mining",
    image: "/assets/images/project-delta.jpg",
    tags: ["Surface Mining", "1.2M Tons", "24/7 Ops"],
  },
  {
    title: "Lagos-Ibadan Link Bridge",
    location: "Ogun State Border",
    year: "2023",
    category: "Civil Works",
    image: "/assets/images/project-bridge.jpg",
    tags: ["Structural Steel", "Foundations", "Logistics"],
  },
  {
    title: "Coastal Road Earthworks",
    location: "Lekki, Lagos",
    year: "2025",
    category: "Infrastructure",
    image: "/assets/images/project-coastal.jpg",
    tags: ["Grading", "Sand Filling", "Fleet Deployment"],
  },
];

export const ProjectsPortfolio = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f8fafc]">
      <div className="container">
        {/* Header Area */}
        <div className="flex flex-col mb-10">
          <div className="max-w-2xl">
            <h2 className="text-amber-600 font-black uppercase tracking-[0.4em] text-sm mb-4">
              Proven Results
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-none uppercase italic">
              Impact{" "}
              <span className="text-slate-400 font-normal not-italic">
                Delivered.
              </span>
            </h3>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer relative">
              <ComingSoon />
              {/* Image Container */}
              <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden mb-4 shadow-2xl bg-slate-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Year Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-black uppercase">
                  Est. {project.year}
                </div>

                {/* Bottom Content Over Image */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-black uppercase tracking-widest bg-amber-500 text-slate-950 px-3 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-black text-white uppercase italic leading-tight group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h4>
                </div>
              </div>

              {/* Meta Data */}
              <div className="flex items-center justify-between px-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <IconMapPin size={16} className="text-amber-600" />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      {project.location}
                    </span>
                  </div>
                </div>
                <Button variant={"secondary"} size={"icon"}>
                  <IconArrowNarrowRight />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Partnership Box */}
        <div className="hidden mt-16 p-8 md:p-12 bg-white rounded-[3rem] border border-slate-200 shadow-xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 text-slate-900 pointer-events-none">
            <IconCategory size={200} />
          </div>
          <div className="md:w-2/3 space-y-4 relative z-10">
            <h5 className="text-2xl font-black uppercase italic text-slate-900">
              Our Next Landmark Could Be Yours.
            </h5>
            <p className="text-slate-500 font-medium">
              Forbliz is currently accepting proposals for Q3-Q4 infrastructure
              cycles. Let’s discuss how our fleet can accelerate your timeline.
            </p>
          </div>
          <div className="md:w-1/3 text-right w-full relative z-10">
            <Button className="w-full md:w-auto">Download Portfolio PDF</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
