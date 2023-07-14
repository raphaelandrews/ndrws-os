"use client";

import { App } from "@/components/ui/app";
import { useAboutApp } from "@/hooks/use-about-app";
import { useZIndex } from "@/hooks/use-z-index";
import { useEffect } from "react";

interface AboutAppProps {
  zIndex: number;
  onMouseDown: () => void;
}

export const AboutApp = ({ zIndex, onMouseDown }: AboutAppProps) => {
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
        description="This App is Open"
        isOpen={aboutApp.isOpen}
        onClose={aboutApp.onClose}
      >
        <h2>Raphael Andrews</h2>
        {zIndex}
      </App>
    </div>
  );
};