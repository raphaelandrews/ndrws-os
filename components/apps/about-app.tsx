"use client";

import { App } from "@/components/ui/app";
import { useAboutApp } from "@/hooks/use-about-app";

export const AboutApp = () => {
  const aboutApp = useAboutApp();

  return (
    <App
      title="About"
      description="This App is Open"
      isOpen={aboutApp.isOpen} 
      onClose={aboutApp.onClose}
    >
        <h2>Raphael Andrews</h2>
    </App>
  );
};