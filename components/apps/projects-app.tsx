"use client";

import { App } from "@/components/ui/app";
import { useProjectsApp } from "@/hooks/use-projects-app";

export const ProjectsApp = () => {
  const projectsApp = useProjectsApp();

  return (
    <App
      title="Projects"
      description="This App is Open"
      isOpen={projectsApp.isOpen} 
      onClose={projectsApp.onClose}
    >
        <h2>My projects</h2>
    </App>
  );
};