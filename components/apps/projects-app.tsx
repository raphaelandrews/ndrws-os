"use client";

import { App } from "@/components/ui/app";
import { useProjectsApp } from "@/hooks/use-projects-app";

interface ProjectsAppProps {
  zIndex: number;
  onMouseDown: () => void;
}

export const ProjectsApp = ({ zIndex, onMouseDown }: ProjectsAppProps) => {
  const projectsApp = useProjectsApp();

  return (
    <div
      className="relative"
      style={{ zIndex }}
      onMouseDown={onMouseDown}
    >
      <App
        title="Projects"
        description="This App is Open"
        isOpen={projectsApp.isOpen}
        onClose={projectsApp.onClose}
      >
        <h2>My projects</h2>
        {zIndex}
      </App>
    </div>
  );
};