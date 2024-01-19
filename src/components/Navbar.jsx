"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XmarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavBarOpen] = useState(false);
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-90'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={"/"} className='text-lg md:text-2xl text-black font-semibold hover:text-gray-500'>
                    Mariel Alaba
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        navbarOpen ? (
                            <button onClick={() => setNavBarOpen(false)} className='flex items-center px-3 py-2 border rounded border-black text-black hover:text-gray-50'>
                                <XmarkIcon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button onClick={() => setNavBarOpen(true)} className='flex items-center px-3 py-2 border rounded border-black text-black hover:text-gray-50'>
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        )
                    }

                </div>
                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}> </NavLink>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav >
    )
}

export default Navbar