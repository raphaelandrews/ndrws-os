"use client";

import { App } from "@/components/ui/app";
import { useAboutApp } from "@/hooks/use-about-app";

interface AboutAppProps {
  zIndex: number;
  onMouseDown: () => void;
}

export const AboutApp = ({ zIndex, onMouseDown }: AboutAppProps) => {
  const aboutApp = useAboutApp();

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