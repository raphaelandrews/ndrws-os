"use client";

import { ProjectsApp } from "@/components/apps/projects-app";
import { AboutApp } from "@/components/apps/about-app";

import { useIndex } from "@/hooks/use-index";

export const AppProvider = () => {
  const { activeIndex, setActiveIndex } = useIndex();

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <ProjectsApp zIndex={activeIndex === 0 ? 2 : 1} onMouseDown={() => handleClick(0)} />
      <AboutApp zIndex={activeIndex === 1 ? 2 : 1} onMouseDown={() => handleClick(1)} />
    </>
  );
};