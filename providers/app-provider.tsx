"use client";

import { useZIndex } from "@/hooks/use-z-index";
import { ProjectsApp } from "@/components/apps/projects-app";
import { AboutApp } from "@/components/apps/about-app";
import { ThisPcApp } from "@/components/apps/this-pc-app";


export const AppProvider = () => {
  const { activeIndex, setActiveIndex } = useZIndex();

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <ProjectsApp zIndex={activeIndex === 0 ? 2 : 1} onMouseDown={() => handleClick(0)} />
      <AboutApp zIndex={activeIndex === 1 ? 2 : 1} onMouseDown={() => handleClick(1)} />
      <ThisPcApp zIndex={activeIndex === 2 ? 2 : 1} onMouseDown={() => handleClick(2)} />
    </>
  );
};