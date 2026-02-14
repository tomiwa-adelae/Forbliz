"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  IconMapPin,
  IconCalendar,
  IconArrowUpRight,
  IconPick,
  IconCrane,
  IconTruck,
} from "@tabler/icons-react";

const categories = [
  { label: "All Works", value: "all" },
  { label: "Mining", value: "mining", icon: <IconPick size={16} /> },
  {
    label: "Civil Infrastructure",
    value: "civil",
    icon: <IconCrane size={16} />,
  },
  { label: "Logistics", value: "logistics", icon: <IconTruck size={16} /> },
];

const projects = [
  {
    id: 1,
    title: "Delta State Quarry Expansion",
    category: "mining",
    location: "Agbor, Nigeria",
    duration: "24 Months",
    image: "/assets/images/project-quarry.jpg",
    highlight: "1.2M Tons Extracted",
  },
  {
    id: 2,
    title: "Lekki-Epe Coastal Roadway",
    category: "civil",
    location: "Lagos, Nigeria",
    duration: "18 Months",
    image: "/assets/images/project-road.jpg",
    highlight: "15KM Paved",
  },
  {
    id: 3,
    title: "Regional Fleet Deployment",
    category: "logistics",
    location: "West Africa",
    duration: "Ongoing",
    image: "/assets/images/project-fleet.jpg",
    highlight: "50+ Heavy Units",
  },
  // Add more projects as needed
];

export const ProjectsGrid = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all
                ${
                  activeFilter === cat.value
                    ? "bg-amber-500 text-slate-950 shadow-xl shadow-amber-500/20"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200"
                }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                />

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="inline-block px-4 py-1 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-widest rounded-md mb-4">
                    {project.highlight}
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black uppercase italic leading-none group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h4>
                </div>

                <div className="absolute top-8 right-8">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <IconArrowUpRight size={28} />
                  </div>
                </div>
              </div>

              {/* Meta Stats */}
              <div className="flex items-center gap-8 px-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <IconMapPin size={18} className="text-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {project.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <IconCalendar size={18} className="text-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {project.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
