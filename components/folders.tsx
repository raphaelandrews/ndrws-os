'use client'

import { Folder as FolderIcon, User } from "lucide-react";
import Folder from "./folder";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { useRef, useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface FolderData {
  Icon: JSX.Element;
  label: string;
}

const folderData: FolderData[] = [
  {
    Icon: <FolderIcon width={16} height={16} />,
    label: "Projects1",
  },
  {
    Icon: <User width={16} height={16} />,
    label: "Profile2",
  },
  {
    Icon: <FolderIcon width={16} height={16} />,
    label: "Projects3",
  },
  {
    Icon: <User width={16} height={16} />,
    label: "Profile4",
  },
  {
    Icon: <FolderIcon width={16} height={16} />,
    label: "Projects5",
  },
  {
    Icon: <User width={16} height={16} />,
    label: "Profile6",
  },
];

let numColumns = Math.ceil((window.innerWidth - 64) / 94);
let numRows = Math.ceil((window.innerHeight - 106) / 94);

const numPositions = numColumns * numRows;

const Folders: React.FC = () => {
  const [folders, setFolders] = useState<FolderData[]>(folderData);

  const moveFolder = (dragIndex: number, hoverIndex: number) => {
    const updatedFolders = [...folders];
    const draggedFolder = updatedFolders[dragIndex];
    updatedFolders[dragIndex] = updatedFolders[hoverIndex];
    updatedFolders[hoverIndex] = draggedFolder;
    setFolders(updatedFolders);
  };

  interface FolderItemProps {
    folder: FolderData | null;
    index: number;
  }

  const FolderItem: React.FC<FolderItemProps> = ({ folder, index }) => {
    const [{ isDragging }, drag] = useDrag<
      { type: string; index: number },
      void,
      { isDragging: boolean }
    >({
      type: "folder",
      item: { type: "folder", index },
      canDrag: () => folder != null,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [{ canDrop, isOver }, drop] = useDrop({
      accept: "folder",
      drop: (
        item: { type: string; index: number },
        monitor: DropTargetMonitor
      ) => {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        moveFolder(dragIndex, hoverIndex);
      },
      canDrop: () => true,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    });

    const opacity = isDragging ? 0.4 : 1;
    const backgroundColor = isOver && canDrop ? "rgba(0, 0, 0, 0.2)" : "transparent";

    const dropRef = useRef<HTMLDivElement>(null);
    drag(drop(dropRef));

    return (
      <div ref={dropRef} style={{ opacity, backgroundColor }}>
        <div style={{ cursor: "move" }}>
          {folder && <Folder Icon={folder.Icon} label={folder.label} />}
        </div>
      </div>
    );
  };

  const gridStyles = {
    display: "grid",
    justifyContent: "start",
    gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${numRows}, minmax(0, 1fr))`,
  };

  useEffect(() => {
    const updateGridDimensions = () => {
      numColumns = Math.ceil((window.innerWidth - 64) / 94)
      numRows = Math.ceil((window.innerHeight - 106) / 94);
    };

    window.addEventListener("resize", updateGridDimensions);
    return () => window.removeEventListener("resize", updateGridDimensions);
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={gridStyles}>
        {Array(numPositions)
          .fill(null)
          .map((_, index) => (
            <FolderItem key={index} folder={folders[index]} index={index} />
          ))}
      </div>
    </DndProvider>
  );
};

export default Folders;

