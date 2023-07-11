'use client'

import { Folder as FolderIcon, User } from "lucide-react";
import Folder from "./folder";
import { useDrag, useDrop, DropTargetMonitor, DragSourceMonitor } from "react-dnd";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface FolderData {
    Icon: JSX.Element;
    label: string;
}

const folderData: FolderData[] = [
    {
        Icon: <FolderIcon width={16} height={16} />,
        label: "Projects",
    },
    {
        Icon: <User width={16} height={16} />,
        label: "Profile",
    },
    {
        Icon: <FolderIcon width={16} height={16} />,
        label: "Projects",
    },
    {
        Icon: <User width={16} height={16} />,
        label: "Profile",
    },
    {
        Icon: <FolderIcon width={16} height={16} />,
        label: "Projects",
    },
    {
        Icon: <User width={16} height={16} />,
        label: "Profile",
    },
    {
        Icon: <FolderIcon width={16} height={16} />,
        label: "Projects",
    },
    {
        Icon: <User width={16} height={16} />,
        label: "Profile",
    },
    {
        Icon: <FolderIcon width={16} height={16} />,
        label: "Projects",
    },
    {
        Icon: <User width={16} height={16} />,
        label: "Profile",
    },
];

const Folders: React.FC = () => {
    const [folders, setFolders] = useState<FolderData[]>(folderData);

    const moveFolder = (dragIndex: number, hoverIndex: number) => {
        const draggedFolder = folders[dragIndex];
        const updatedFolders = [...folders];
        updatedFolders.splice(dragIndex, 1);
        updatedFolders.splice(hoverIndex, 0, draggedFolder);
        setFolders(updatedFolders);
    };

    interface FolderItemProps {
        folder: FolderData;
        index: number;
    }

    const FolderItem: React.FC<FolderItemProps> = ({ folder, index }) => {
        const [{ isDragging }, drag] = useDrag<{ type: string; index: number }, void, { isDragging: boolean }>({
            type: "folder",
            item: { type: "folder", index },
            collect: (monitor: DragSourceMonitor) => ({
                isDragging: monitor.isDragging(),
            }),
        });

        const [{ canDrop, isOver }, drop] = useDrop({
            accept: "folder",
            drop: (item: { type: string; index: number }, monitor: DropTargetMonitor) => {
                const dragIndex = item.index;
                const hoverIndex = index;

                if (dragIndex === hoverIndex) {
                    return;
                }

                moveFolder(dragIndex, hoverIndex);
                item.index = hoverIndex;
            },
            collect: (monitor: DropTargetMonitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        });

        const opacity = isDragging ? 0.4 : 1;
        const backgroundColor = isOver && canDrop ? "rgba(0, 0, 0, 0.2)" : "transparent";

        return (
            <div ref={drop} style={{ opacity, backgroundColor }}>
                <div ref={drag} style={{ cursor: "move" }}>
                    <Folder Icon={folder.Icon} label={folder.label} />
                </div>
            </div>
        );
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="grid grid-cols-10 grid-rows-6 justify-start gap-6">
                {folders.map((folder, index) => (
                    <FolderItem key={(folder.label + index)} folder={folder} index={index} />
                ))}
            </div>
        </DndProvider>
    );
};

export default Folders;
