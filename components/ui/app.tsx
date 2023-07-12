'use client'

import Draggable from "react-draggable";

interface AppProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}


export const App: React.FC<AppProps> = ({
    title,
    description,
    children
}) => {
    return (
        <Draggable>
            <div className="absolute text-white p-4 bg-blue-500 z-10">
                <h2>{title}</h2>
                <p>{description}</p>
                {children}
            </div>
        </Draggable>
    );
};
