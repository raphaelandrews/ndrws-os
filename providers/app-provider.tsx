"use client";

import { AboutApp } from "@/components/apps/about-app";
import { ProjectsApp } from "@/components/apps/projects-app";

export const AppProvider = () => {

  return (
    <>
      <ProjectsApp />
      <AboutApp />
    </>
  );
}