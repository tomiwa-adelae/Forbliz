import React from "react";
import { Hero } from "./_components/Hero";
import { ProjectsGrid } from "./_components/ProjectsGrid";
import { ProjectMethodology } from "./_components/ProjectMethodology";

const page = () => {
  return (
    <div>
      <Hero />
      <ProjectsGrid />
      <ProjectMethodology />
    </div>
  );
};

export default page;
