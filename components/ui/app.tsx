"use client"

import Image from "next/image";
import Draggable from "react-draggable";
import { X } from "lucide-react";

import logo from "@/public/logo.png";
import { AppProps } from "@/types";
import { Button } from "@/components/ui/button";

export const App: React.FC<AppProps> = ({
    title,
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
                <Draggable handle="#imHandle">
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
                            <div
                                id="imHandle"
                                className="
                                    flex
                                    justify-between
                                    items-center
                                    gap-4
                                    w-full
                                    p-4
                                    bg-foreground
                                    rounded-t-lg
                                "
                            >
                                <div
                                    className="
                                        flex
                                        justify-center
                                        items-center
                                    "
                                >
                                    <Image
                                        src={logo}
                                        alt={title}
                                        width={16}
                                        height={16}
                                        className="pointer-events-none"
                                    />

                                    <h2
                                        className="
                                    text-sm
                                    ml-2
                                    "
                                    >
                                        {title}
                                    </h2>
                                </div>

                                <Button
                                    variant="ghost"
                                    className="h-auto p-0"
                                    onClick={() => onChange(false)}
                                >
                                    <X width={16} height={16} />
                                </Button>
                            </div>

                            <div
                                className="
                                    absolute 
                                    w-full 
                                    p-4
                                    bg-foreground
                                    rounded-b-lg
                                "
                            >
                                {children}
                            </div>
                        </div>
                    </div>
                </Draggable>
            )}
        </>
    );
};
