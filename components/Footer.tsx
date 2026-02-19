"use client";

import React from "react";
import Link from "next/link";
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconMapPin,
  IconMail,
  IconPhone,
  IconExternalLink,
} from "@tabler/icons-react";
import { Logo } from "./Logo";
import { ADDRESS, EMAIL, PHONE } from "@/constants";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Forbliz", href: "/about" },
      { label: "Our Fleet", href: "/machinery" },
      { label: "Safety Policy", href: "/safety" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Mining Operations", href: "/services" },
      { label: "Civil Infrastructure", href: "/services" },
      { label: "Earthworks", href: "/services" },
      { label: "Logistics", href: "/services" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#020806] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Brand Identity Area */}
          <div className="space-y-6">
            <Link href="/">
              <Logo color="white" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Pioneering industrial growth through large-scale mining, civil
              engineering, and strategic logistical frameworks.
            </p>
            <div className="flex gap-4">
              {[IconBrandLinkedin, IconBrandInstagram, IconBrandFacebook].map(
                (Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all"
                  >
                    <Icon size={20} />
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* 2. Quick Links Grid */}
          {footerLinks.map((group, i) => (
            <div key={i} className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-amber-500">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 3. Contact & Location */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-amber-500">
              Head Office
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <IconMapPin size={20} className="text-amber-500 shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <IconPhone size={20} className="text-amber-500 shrink-0" />
                <a href={`tel:${PHONE}`}>{PHONE}</a>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <IconMail size={20} className="text-amber-500 shrink-0" />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Bottom Bar: Parent Company Link */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} FORBLIZ Global Resources Ltd. All
            Rights Reserved.
          </p>

          <Link
            href="https://airmob.com"
            className="group flex items-center gap-3 px-6 py-2 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/10 rounded-full transition-all"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/60 group-hover:text-emerald-500">
              A subsidiary of AIRMOB NIGERIA LIMITED
            </span>
            <IconExternalLink size={14} className="text-emerald-500" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
