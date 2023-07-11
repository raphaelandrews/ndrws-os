interface FolderProps {
    Icon: React.ReactNode;
    label: string;
}

const Folder: React.FC<FolderProps> = ({ Icon, label }) => {
    return (
        <div className="grid place-items-center gap-2 hover:cursor-pointer">
            <span
                className="
                    text-primary
                    p-3
                    bg-[hsla(0,0%,100%,.05)]
                    border
                    rounded
                    border-[hsla(0,0%,78%,.1)]
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
        </div>
    );
}

export default Folder;