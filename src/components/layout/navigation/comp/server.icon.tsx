import Link from "next/link";
import React from "react";

interface IPropsIcon {
    icon: string | React.ReactNode;
    href?: string;
}
const SE_Icon: React.FC<IPropsIcon> = ({ icon, href = "#" }) => {
    return (
        <Link
            href={href}
            className="flex justify-center items-center bg-white rounded-full size-8 cursor-pointer"
        >
            {icon}
        </Link>
    );
};

export default SE_Icon;
