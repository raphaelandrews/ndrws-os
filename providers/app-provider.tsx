"use client";

import { useState } from "react";

import { ProjectsApp } from "@/components/apps/projects-app";
import { AboutApp } from "@/components/apps/about-app";

const AppIndex = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index: number) => {
    console.log("oi", index);
    setActiveIndex(index);
  };

  return (
    <div>
      <ProjectsApp zIndex={activeIndex === 0 ? 2 : 1} onMouseDown={() => handleClick(0)} />
      <AboutApp zIndex={activeIndex === 1 ? 2 : 1} onMouseDown={() => handleClick(1)} />
      </div>
  );
};

export const AppProvider = () => {

  return (
    <>
     <AppIndex />
    </>
  );
}