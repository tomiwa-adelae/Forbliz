import React from "react";
import { Hero } from "./_components/Hero";
import { ProjectsGrid } from "./_components/ProjectsGrid";
import { ProjectMethodology } from "./_components/ProjectMethodology";
import { ComingSoon } from "@/components/ComingSoon";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Projects Forbliz Global Resources | Heavy Equipment & Industrial Services",
  description:
    "Forbliz Global Resources Ltd is a premier industrial partner providing heavy equipment sourcing, civil infrastructure engineering, and site mobilization across Nigeria.",
};

const page = () => {
  return (
    <div className="relative">
      <ComingSoon />
      <Hero />
      <ProjectsGrid />
      <ProjectMethodology />
    </div>
  );
};

export default page;
