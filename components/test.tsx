'use client'

import { useState } from "react";
import { AboutApp } from "./apps/about-app";

const Test = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <Component zIndex={activeIndex === 0 ? 10 : 3} onClick={() => handleClick(0)} />
            <Component zIndex={activeIndex === 1 ? 10 : 3} onClick={() => handleClick(1)} />
            <Component zIndex={activeIndex === 2 ? 10 : 3} onClick={() => handleClick(2)} />
        </div>
    );
};

type ComponentProps = {
    zIndex: number;
    onClick: () => void;
};

const Component = ({ zIndex, onClick }: ComponentProps) => {
    return (
        <div
            className="relative p-4 bg-blue-500 text-white"
            style={{ zIndex }}
            onClick={onClick}
        >
            <AboutApp />(z-index: {zIndex})
        </div>
    );
};

export default Test;