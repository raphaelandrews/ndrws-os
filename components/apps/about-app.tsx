"use client";

import { useEffect, useState } from "react";

import { App } from "@/components/ui/app";

interface AboutAppProps {

}

export const AboutApp: React.FC<AboutAppProps> = ({
}) => {
  return (
    <App
      title="About"
      description="This App is Open"
    >
        <h2>Raphael Andrews</h2>
    </App>
  );
};