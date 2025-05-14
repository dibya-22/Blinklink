"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from "next/image"

const Navbar = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && 
                menuRef.current && 
                !menuRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <nav className={`relative w-full md:w-[70vw] mx-auto my-5 h-auto md:h-20 px-4 md:px-5 ${className}`}>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                {/* Logo and Menu Button */}
                <div className='flex justify-between w-full md:w-auto items-center'>
                    <div className='logo font-bold font-serif text-3xl md:text-4xl text-white hover:text-gray-200'>
                        <Link href={"/"} className='flex'>blinkl!nk</Link>
                    </div>
                    <button 
                        ref={buttonRef}
                        className='md:hidden text-white p-2'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Image 
                            width={24} 
                            height={24} 
                            src={isMenuOpen ? "/icons/close.png" : "/icons/menu.png"} 
                            alt="menu" 
                            className='invert'
                        />
                    </button>
                </div>

                {/* Navigation Links */}
                <ul ref={menuRef} 
                    className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-row items-center 
                    justify-center gap-6 md:gap-8 w-full md:w-auto md:relative absolute 
                    left-0 top-full bg-[#304B5D]/95 backdrop-blur-sm md:bg-transparent 
                    md:backdrop-blur-none py-4 md:py-0 transition-all duration-300 z-50`}
                >
                    <li>
                        <Link href={"/"} title='Home'>
                            <button onClick={() => setIsMenuOpen(false)} className='p-1'>
                                <Image width={28} height={28} src="/icons/home.png" alt="Home" 
                                    className='invert-75 hover:scale-125 hover:invert-100'/>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/shorten"} title='Shorten'>
                            <button onClick={() => setIsMenuOpen(false)} className='p-1'>
                                <Image width={28} height={28} src="/icons/link.png" alt="Shorten" 
                                    className='invert-75 hover:scale-125 hover:invert-100'/>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"} title='About'>
                            <button onClick={() => setIsMenuOpen(false)} className='p-1'>
                                <Image width={28} height={28} src="/icons/about.png" alt="About" 
                                    className='invert-75 hover:scale-125 hover:invert-100'/>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contact"} title='Contact Us'>
                            <button onClick={() => setIsMenuOpen(false)} className='p-1'>
                                <Image width={28} height={28} src="/icons/contact.png" alt="Contact" 
                                    className='invert-75 hover:scale-125 hover:invert-100'/>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://github.com/dibya-22/Blinklink"} title='Github' target='_blank'>
                            <button onClick={() => setIsMenuOpen(false)} className='p-1'>
                                <Image width={28} height={28} src="/icons/github.png" alt="Github" 
                                    className='invert-75 hover:scale-125 hover:invert-100'/>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar