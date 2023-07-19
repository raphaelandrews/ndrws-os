"use client"

import React, { useState } from "react";
import { useAboutApp } from "../hooks/use-about-app";
import { useProjectsApp } from "../hooks/use-projects-app";
import { useThisPcApp } from "../hooks/use-this-pc-app";
import { User, FolderIcon, PcCase } from "lucide-react";

interface App {
    name: string;
    isOpen: boolean;
    isMinimized: boolean;
    icon: React.ReactNode;
}

const AppTaskbar = () => {
    const aboutApp = useAboutApp();
    const projectsApp = useProjectsApp();
    const thisPcApp = useThisPcApp();

    const [openApps, setOpenApps] = useState<App[]>([]);

    const apps: App[] = [
        { name: "About", isOpen: aboutApp.isOpen, isMinimized: aboutApp.isMinimized, icon: <User width={24} height={24} /> },
        { name: "Projects", isOpen: projectsApp.isOpen, isMinimized: projectsApp.isMinimized, icon: <FolderIcon width={24} height={24} /> },
        { name: "This PC", isOpen: thisPcApp.isOpen, isMinimized: thisPcApp.isMinimized, icon: <PcCase width={24} height={24} /> },
    ];

    apps.forEach((app) => {
        if (app.isOpen && !openApps.some((openApp) => openApp.name === app.name)) {
            setOpenApps((prevApps) => [...prevApps, app]);
        } else if (!app.isOpen && !app.isMinimized && openApps.some((openApp) => openApp.name === app.name)) {
            setOpenApps((prevApps) => prevApps.filter((openApp) => openApp.name !== app.name));
        }
    });

    return (
        <div className="absolute left-1/2 -translate-x-2/4 flex gap-2">
            {openApps.map((app) => (
                <TaskbarIcon key={app.name} appName={app.name} icon={app.icon} />
            ))}
        </div>
    );
};

const TaskbarIcon = ({ appName, icon }: { appName: string; icon: React.ReactNode }) => {
    const aboutApp = useAboutApp();
    const projectsApp = useProjectsApp();
    const thisPcApp = useThisPcApp();

    const openAppTaskbar = (app: string) => {
        if (app === "Projects") {
            projectsApp.onToggle();
            projectsApp.onMinimize();
        } else if (app === "About") {
            aboutApp.onToggle();
            aboutApp.onMinimize();
        } else if (app === "This PC") {
            thisPcApp.onToggle();
            thisPcApp.onMinimize();
        }
    }

    return (
        <div className="p-2" onClick={() => openAppTaskbar(appName)}>
            {icon}
        </div>
    );
};

export default AppTaskbar;

