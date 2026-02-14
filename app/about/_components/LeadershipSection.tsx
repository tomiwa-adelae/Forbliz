"use client";

import React from "react";
import Image from "next/image";
import { IconBrandLinkedin, IconMessages } from "@tabler/icons-react";
import Link from "next/link";
import { DEFAULT_IMAGE } from "@/constants";

const leaders = [
  {
    name: "Engr. Michael Chen",
    role: "Chief Executive Officer",
    desc: "20+ years of experience in multinational mining operations across Africa.",
    image: "/assets/images/leader-1.jpg",
  },
  {
    name: "Sarah Adebayo",
    role: "Director of Operations",
    desc: "Specialist in large-scale civil infrastructure and project management.",
    image: "/assets/images/leader-2.jpg",
  },
  {
    name: "David Olatunji",
    role: "Head of Safety (QHSE)",
    desc: "Dedicated to maintaining our zero-harm culture and site compliance.",
    image: "/assets/images/leader-3.jpg",
  },
];

export const LeadershipSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-amber-600 font-black uppercase tracking-[0.4em] text-sm mb-4">
              Our Leadership
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-none uppercase italic">
              The Minds Behind <br />
              <span className="text-slate-400">The Machinery.</span>
            </h3>
          </div>
          <p className="max-w-md text-slate-600 font-medium">
            Guided by a board of seasoned engineering and energy veterans,
            Forbliz combines local expertise with international industrial
            standards.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <div key={i} className="group">
              <div className="relative h-[450px] w-full rounded-3xl overflow-hidden mb-6 bg-slate-100">
                <Image
                  src={DEFAULT_IMAGE}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Social/Contact Overlay */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Link
                    href="#"
                    className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors shadow-lg"
                  >
                    <IconBrandLinkedin size={20} />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors shadow-lg"
                  >
                    <IconMessages size={20} />
                  </Link>
                </div>
              </div>

              <div className="space-y-2 px-2">
                <h4 className="text-2xl font-black text-slate-900 uppercase italic leading-none">
                  {leader.name}
                </h4>
                <p className="text-amber-600 text-xs font-bold uppercase tracking-widest">
                  {leader.role}
                </p>
                <p className="text-slate-500 text-sm font-medium pt-2">
                  {leader.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
