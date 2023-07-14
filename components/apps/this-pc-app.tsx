/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";

import { SetAppIndex } from "@/types";
import { useThisPcApp } from "@/hooks/use-this-pc-app";
import { useZIndex } from "@/hooks/use-z-index";
import { App } from "@/components/ui/app";

export const ThisPcApp = ({ zIndex, onMouseDown }: SetAppIndex) => {
  const thisPcApp = useThisPcApp();
  const { setActiveIndex } = useZIndex();

  useEffect(() => {
    setActiveIndex(2)
  }, [thisPcApp.isOpen])

  return (
    <div
      className="relative"
      style={{ zIndex }}
      onMouseDown={onMouseDown}
    >
      <App
        title="Projects"
        isOpen={thisPcApp.isOpen}
        onClose={thisPcApp.onClose}
      >
        <h2>This PC</h2>
        {zIndex}
      </App>
    </div>
  );
};