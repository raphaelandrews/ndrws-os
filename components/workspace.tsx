import Folders from "@/components/folders";
import AppTaskbar from "@/components/app-taskbar";

const Workspace = () => {
    return (
        <div
            className="
                relative
                w-screen
                max-w-full 
                h-taskbar-total-height
                max-h-full 
                p-8
            "
        >
            <Folders />
            <AppTaskbar />
        </div>
    );
}

export default Workspace;