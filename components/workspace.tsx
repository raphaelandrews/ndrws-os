import Folders from "@/components/folders";
import OpenApp from "@/hooks/use-open-apps";

const Workspace = () => {
    return (
        <div
            className="
                w-screen
                max-w-full 
                h-taskbar-total-height
                max-h-full 
                p-8
            "
        >
            <Folders />
            <OpenApp />     
        </div>
    );
}

export default Workspace;