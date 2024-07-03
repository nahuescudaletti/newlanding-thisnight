"use client";

import Image from "next/image";
import { RiMenu3Line } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import { dataHeader } from "./Header.data";
import { useState } from "react";
import { MotionTransition } from "../MotionTransition/";
import { getBasePath } from "@/utils/utils";
import { Reveal } from "../Reveal";
import { DataDropDown } from "./DropDown.data";

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openProductDropdown, setOpenProductDropdown] = useState(false);

    const toggleMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
        setOpenProductDropdown(false);
    };

    const toggleProductDropdown = () => {
        setOpenProductDropdown(!openProductDropdown);
    };

    return (
        <MotionTransition>
            <nav className="flex flex-wrap items-center justify-between max-w-10xl p-4 mx-auto md:py- bg-transparent" style={{ backgroundImage: `url(${getBasePath()}/assets/navback.png)` }}>
                <div className="flex items-center cursor-pointer p-2">
                    <Image src={`${getBasePath()}/assets/ghghjg.png`} width="55" height="100" alt="Logo Bank" />
                </div>
                <RiMenu3Line className="block text-3xl md:hidden cursor-pointer" onClick={toggleMobileMenu} />
                <div className={`${openMobileMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <div className="flex flex-col mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        {dataHeader.slice(0, 1).map(({ id, name, idLink }) => (
                            <div key={id} className="px-4 transition-all duration-500 ease-in-out cursor-pointer flex items-center">
                                <a href={idLink} className="group hover:bg-purple-700 hover:bg-opacity-50 rounded-full px-3 py-2 text-white group-hover:text-white hover:text-white" onClick={toggleMobileMenu}>{name}</a>
                            </div>
                        ))}
                        <div className="relative px-4 transition-all duration-500 ease-in-out cursor-pointer">
                            <div className="group">
                                <button className="group flex items-center hover:bg-purple-700 hover:bg-opacity-50 rounded-full px-3 py-2 text-white group-hover:text-white hover:text-white" onClick={toggleProductDropdown}>
                                    <span>Modulos</span> 
                                    <IoIosArrowDown className={`ml-1 ${openProductDropdown ? 'transform rotate-180' : ''}`} />
                                </button>
                                <div className={`${openProductDropdown ? 'block' : 'hidden'} absolute left-0 mt-2 w-48 bg-black rounded-lg shadow-lg z-10`}>
                                    <div className="py-1">
                                        {DataDropDown.map(({ id, name, idLink }) => (
                                            <a key={id} href={idLink} className="block px-4 py-2 text-white hover:bg-purple-700 hover:text-white" onClick={toggleMobileMenu}>{name}</a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {dataHeader.slice(1).map(({ id, name, idLink }) => (
                            <div key={id} className="px-4 transition-all duration-500 ease-in-out cursor-pointer flex items-center">
                                <a href={idLink} className="group hover:bg-purple-700 hover:bg-opacity-50 rounded-full px-3 py-2 text-white group-hover:text-white hover:text-white" onClick={toggleMobileMenu}>{name}</a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden md:flex lg:flex items-center cursor-pointer">
                </div>
            </nav>
        </MotionTransition>
    );
}
