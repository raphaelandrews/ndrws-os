import { useAboutApp } from "@/hooks/use-about-app";

interface FolderProps {
    Icon: React.ReactNode;
    label: string;
}

const Folder: React.FC<FolderProps> = ({ Icon, label }) => {
    const aboutApp = useAboutApp();

    return (
        <div
            className="
                grid 
                place-items-center 
                gap-2 
                m-3 
                hover:cursor-pointer
            "
        >
            <span
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
            </span>
            <span
                className="
                    text-sm
                    text-primary
                    font-light
                "
            >
                {label}
            </span>
            <div onClick={() => aboutApp.onOpen()}>Abrir</div>
        </div>
    );
}

export default Folder;