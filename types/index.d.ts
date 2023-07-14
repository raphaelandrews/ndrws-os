export interface SetAppIndex {
    zIndex: number;
    onMouseDown: () => void;
}

export interface AppProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export interface FolderProps {
    Icon: React.ReactNode;
    label: string;
}

export interface useAppStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
}