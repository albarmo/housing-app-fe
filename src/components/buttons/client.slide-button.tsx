import { cn } from "@/utils/cssInJs";
import React from "react";

interface IPropsButtonSlide {
    icon?: string | React.ReactNode;
    label: string;
}
const CE_ButtonSlide: React.FC<IPropsButtonSlide> = ({ icon, label }) => {
    return (
        <div className="group flex relative rounded-full min-w-44 h-8 overflow-hidden">
            <span
                className={cn(
                    "absolute left-0 bg-white h-8 rounded-r-full overflow-hidden w-max p-1 px-4 pl-5 transition-all duration-700",
                    "h-8 -left-48 group-hover:left-5"
                )}
            >
                {label}
            </span>
            <button className="absolute flex justify-center items-center bg-[#040404] size-8 shadow-md rounded-full text-white">
                {icon}
            </button>
        </div>
    );
};

export default CE_ButtonSlide;
