import Folders from "@/components/folders";

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
        </div>
    );
}

export default Workspace;