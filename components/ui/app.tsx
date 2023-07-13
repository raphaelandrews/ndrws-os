"use client"

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
                            top-1/2
                            left-1/2          
                        "
                    >
                        <div
                            className="
                                -translate-y-2/4 
                                -translate-x-2/4
                            "
                        >
                            <div onClick={() => onChange(false)}>
                                Close
                            </div>
                            <div className="absolute text-white p-4">
                                <h2>{title}</h2>
                                <p>{description}</p>
                                {children}
                            </div>
                        </div>
                    </div>
                </Draggable>
            )}
        </>
    );
};
