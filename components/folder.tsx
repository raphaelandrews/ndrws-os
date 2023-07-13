import { useAboutApp } from "@/hooks/use-about-app";
import { useProjectsApp } from "@/hooks/use-projects-app";

interface FolderProps {
    Icon: React.ReactNode;
    label: string;
}

const Folder: React.FC<FolderProps> = ({ Icon, label }) => {
    const aboutApp = useAboutApp();
    const projectsApp = useProjectsApp();

    const openApp = (app: string) => {
        if (app === "Projects") {
            projectsApp.onToggle();
        } else if (app === "About") {
            aboutApp.onToggle();
        }
    }

    return (
        <div
            className="
                grid 
                place-items-center 
                gap-2 
                m-3 
                hover:cursor-pointer
            "
            onClick={() => openApp(label)}
        >
            <div
                className="
                    text-primary
                    p-3
                    bg-frosted-white/5
                    border
                    rounded
                    border-frosted-grey/10
                    backdrop-blur-xl
                "
            >
                {Icon}
            </div>
            <div
                className="
                    text-sm
                    text-primary
                    font-light
                "
            >
                {label}
            </div>
        </div>
    );
}

export default Folder;