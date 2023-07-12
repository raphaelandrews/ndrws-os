import Folders from "@/components/folders";
import { AboutApp } from "@/components/apps/about-app";
import Test from "./test";

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
            <AboutApp />
            <Test />
            <Folders />
        </div>
    );
}

export default Workspace;