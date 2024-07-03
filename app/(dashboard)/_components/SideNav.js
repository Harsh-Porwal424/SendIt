"use client"
import { Files, Mail, Newspaper, Shield, Upload } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


const SideNav = ({closeSideBar}) => {
    const router = useRouter();
    const menuList = [
        {
            id: 1,
            name: "Upload",
            icon: Upload,
            path: "/upload"
        },
        {
            id: 2,
            name: "Files",
            icon: Files,
            path: "/files"
        },
        {
            id: 3,
            name: "Upgrade",
            icon: Shield,
            path: "/upgrade"
        },
        {
            id: 4,
            name: "Newsletter",
            icon: Mail,
            path: "/newsletter"
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0);
    //console.log(activeIndex)

    const handleNavigation = (index, path) => {
        setActiveIndex(index);
        router.push(path);
    };

    return (
        <div className="flex flex-col shadow-sm border-r h-full">
            <div className="p-5 border-b">
                <Image src='/logo.svg' width={150} height={100} alt="Logo" />
            </div>
            <div className="flex-1">
                {menuList.map((item, index) => (
                    <button
                        key={item.id}
                        className={`flex items-center gap-2 p-4 px-6 w-full text-gray-700 hover:bg-gray-100 transition-colors ${activeIndex === index ? 'bg-blue-100 text-blue-700 font-semibold' : null}`}
                        onClick={() => {handleNavigation(index, item.path); closeSideBar()}}
                    >
                        <item.icon className="w-5 h-5" />
                        <h2>{item.name}</h2>
                    </button>
                ))}
            </div>
        </div>
    )
};

export default SideNav;