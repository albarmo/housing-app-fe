import React from "react";
import SE_Logo from "./comp/server.logo";
import CE_ButtonSlide from "@/components/buttons/client.slide-button";
import { Calculator, Facebook, Instagram, PhoneCall, Menu } from "lucide-react";
import SE_Icon from "./comp/server.icon";

const SOCIAL_ICONS = [
    {
        id: "facebook",
        href: "#",
        icon: <Facebook size={16} />,
    },
    {
        id: "instagram",
        href: "#",
        icon: <Instagram size={16} />,
    },
    {
        id: "whatsApp",
        href: "#",
        icon: <PhoneCall size={16} />,
    },
];

const CE_Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between space-x-5 px-5">
            <nav className="flex items-center justify-between w-1/2 pr-10">
                <SE_Logo />
                <section className="flex  justify-center items-center space-x-5">
                    <p>0812 8070 9988</p>
                    <button>
                        <Menu />
                    </button>
                </section>
            </nav>
            <nav className="flex items-center justify-between w-1/2 pl-5">
                <section className="flex space-x-2">
                    {SOCIAL_ICONS.map((icon) => (
                        <SE_Icon
                            key={icon.id}
                            icon={icon?.icon}
                            href={icon?.href}
                        />
                    ))}
                    <CE_ButtonSlide
                        icon={<Calculator size="18px" />}
                        label="Simulasi Cicilan"
                    />
                </section>
                <button className="bg-white px-4 py-1 rounded-full">
                    Login
                </button>
            </nav>
        </header>
    );
};

export default CE_Navbar;
