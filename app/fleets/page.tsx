import React from "react";
import { Hero } from "./_components/Hero";
import { FleetMaintenance } from "./_components/FleetMaintenance";
import { FleetLogistics } from "./_components/FleetLogistics";
import { FleetCatalog } from "../services/_components/FleetCatalog";

const page = () => {
  return (
    <div>
      <Hero />
      <FleetMaintenance />
      <FleetLogistics />
      <FleetCatalog />
    </div>
  );
};

export default page;
