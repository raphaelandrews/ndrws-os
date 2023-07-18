"use client"

import React, { useState } from "react";
import { useAboutApp } from "./use-about-app";
import { useProjectsApp } from "./use-projects-app";
import { useThisPcApp } from "./use-this-pc-app";

interface App {
    name: string;
    isOpen: boolean;
}

const OpenApp = () => {
    const aboutApp = useAboutApp();
    const projectsApp = useProjectsApp();
    const thisPcApp = useThisPcApp();

    const [openApps, setOpenApps] = useState<App[]>([]);

    const apps = [
        { name: "About App", isOpen: aboutApp.isOpen },
        { name: "Projects App", isOpen: projectsApp.isOpen },
        { name: "ThisPC App", isOpen: thisPcApp.isOpen },
    ];

    apps.forEach((app) => {
        if (app.isOpen && !openApps.some((openApp) => openApp.name === app.name)) {
            setOpenApps((prevApps) => [...prevApps, app]);
        } else if (!app.isOpen && openApps.some((openApp) => openApp.name === app.name)) {
            setOpenApps((prevApps) => prevApps.filter((openApp) => openApp.name !== app.name));
        }
    });

    return (
        <div className="flex">
            {openApps.map((app) => (
                <TaskbarIcon key={app.name} appName={app.name} />
            ))}
        </div>
    );
};

const TaskbarIcon = ({ appName }: { appName: string }) => {
    return (
        <div className="w-8 h-8 p-2">
            {appName}
        </div>
    );
};

export default OpenApp;
