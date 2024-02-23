import Image from "next/image";
import React from "react";

const SE_Logo = () => {
    return (
        <div>
            <Image
                src="/assets/images/png/Housing-Logo.png"
                alt="Housing Logo"
                width={120}
                height={120}
                priority
            />
        </div>
    );
};

export default SE_Logo;
