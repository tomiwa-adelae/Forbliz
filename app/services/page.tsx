import React from "react";
import { ServicesHero } from "./_components/ServicesHero";
import { MiningDetailSection } from "./_components/MiningDetailSection";
import { CivilDetailSection } from "./_components/CivilDetailSection";
import { LogisticsDetailSection } from "./_components/LogisticsDetailSection";
import { ServiceInquiry } from "./_components/ServiceInquiry";
import { FleetCatalog } from "./_components/FleetCatalog";
import { ProjectsPortfolio } from "./_components/ProjectsPortfolio";

const page = () => {
  return (
    <div>
      <ServicesHero />
      <MiningDetailSection />
      <CivilDetailSection />
      <LogisticsDetailSection />
      <ServiceInquiry />
      <FleetCatalog />
      <ProjectsPortfolio />
    </div>
  );
};

export default page;
