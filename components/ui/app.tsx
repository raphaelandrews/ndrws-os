'use client'

import Draggable from "react-draggable";

interface AppProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export const App: React.FC<AppProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}) => {
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <>
            {isOpen && (
                <Draggable>
                    <div
                        className="
                            fixed
                            top-0
                            left-0
                            w-[200px]
                            h-[200px]
                        "
                    >

                        <div onClick={() => onChange(false)}>
                            Close
                        </div>
                        <div className="absolute text-white p-4 bg-blue-500 z-10">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            {children}
                        </div>
                    </div>
                </Draggable>
            )}
        </>
    );
};
