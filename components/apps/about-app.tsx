/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";

import { SetAppIndex } from "@/types";
import { useAboutApp } from "@/hooks/use-about-app";
import { useZIndex } from "@/hooks/use-z-index";
import { App } from "@/components/ui/app";

export const AboutApp = ({ zIndex, onMouseDown }: SetAppIndex) => {
  const aboutApp = useAboutApp();
  const { setActiveIndex } = useZIndex();

  useEffect(() => {
    setActiveIndex(1)
}, [aboutApp.isOpen])

  return (
    <div
      className="relative"
      style={{ zIndex }}
      onMouseDown={onMouseDown}
    >
      <App
        title="About"
        isOpen={aboutApp.isOpen}
        onClose={aboutApp.onClose}
      >
        <h2>Raphael Andrews</h2>
        {zIndex}
      </App>
    </div>
  );
};