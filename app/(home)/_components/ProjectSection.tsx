"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconMapPin, IconArrowRight, IconCalendar } from "@tabler/icons-react";

const projects = [
  {
    title: "Delta State Quarry Expansion",
    location: "Asaba, Nigeria",
    category: "Mining",
    status: "Completed",
    image: "/assets/images/project-mining.jpg",
    year: "2024",
  },
  {
    title: "Urban Highway Link-Road",
    location: "Lagos, Nigeria",
    category: "Civil Works",
    status: "In Progress",
    image: "/assets/images/project-road.jpg",
    year: "2025",
  },
  {
    title: "Industrial Site Preparation",
    location: "Ogun State, Nigeria",
    category: "Earthworks",
    status: "Completed",
    image: "/assets/images/project-earth.jpg",
    year: "2023",
  },
];

export const ProjectSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-amber-600 font-black uppercase tracking-[0.4em] text-sm mb-4">
              Proven Track Record
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic leading-none">
              Engineering <br />
              <span className="text-slate-400 font-normal not-italic">
                Milestones.
              </span>
            </h3>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-3 text-slate-900 font-black uppercase tracking-widest hover:text-amber-600 transition-colors"
          >
            View All Projects
            <div className="p-2 bg-slate-100 rounded-full group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
              <IconArrowRight size={20} />
            </div>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-6 shadow-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Status Badge */}
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                  {project.status}
                </div>
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              <div className="space-y-3 px-2">
                <div className="flex items-center gap-4 text-amber-600 text-xs font-bold uppercase tracking-widest">
                  <span>{project.category}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <div className="flex items-center gap-1">
                    <IconCalendar size={14} />
                    {project.year}
                  </div>
                </div>
                <h4 className="text-2xl font-black text-slate-900 uppercase italic group-hover:text-amber-600 transition-colors leading-tight">
                  {project.title}
                </h4>
                <div className="flex items-center gap-1 text-slate-500 font-medium">
                  <IconMapPin size={18} className="text-amber-500" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
