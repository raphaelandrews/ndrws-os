"use client";

import { App } from "@/components/ui/app";
import { useProjectsApp } from "@/hooks/use-projects-app";
import { useZIndex } from "@/hooks/use-z-index";
import { useEffect } from "react";

interface ProjectsAppProps {
  zIndex: number;
  onMouseDown: () => void;
}

export const ProjectsApp = ({ zIndex, onMouseDown }: ProjectsAppProps) => {
  const projectsApp = useProjectsApp();
  const { setActiveIndex } = useZIndex();

  useEffect(() => {
          setActiveIndex(0)
  }, [projectsApp.isOpen])

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