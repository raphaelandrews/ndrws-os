import { Folder as FolderIcon, User } from "lucide-react";
import Folder from "./folder";

const folderData = [
    {
        Icon: <FolderIcon width={18} height={18} />,
        label: "Projects"
    },
    {
        Icon: <User width={18} height={18} />,
        label: "Profile"
    },
]

const Folders = () => {
    return (
        <div className="grid justify-start gap-6">
            {folderData.map((folder) => (
                <Folder key={folder.label} Icon={folder.Icon} label={folder.label} />
            ))}
        </div>
    );
}

export default Folders;