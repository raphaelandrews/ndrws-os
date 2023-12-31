/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";

import { SetAppIndex } from "@/types";
import { useProjectsApp } from "@/hooks/use-projects-app";
import { useZIndex } from "@/hooks/use-z-index";
import { App } from "@/components/ui/app";

export const ProjectsApp = ({ zIndex, onMouseDown }: SetAppIndex) => {
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
        isOpen={projectsApp.isOpen}
        onClose={projectsApp.onClose}
      >
        <h2>My projects</h2>
        {zIndex}
      </App>
    </div>
  );
};