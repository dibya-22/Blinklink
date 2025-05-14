import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='text-white fixed bottom-0 left-0 right-0 w-full 
            bg-[#304B5D]/80 backdrop-blur-sm text-center py-3 
            text-sm md:text-base flex items-center justify-center gap-1'>
            <div className='logo font-bold font-serif hover:text-gray-200'>
                <Link href={"/"}>blinkl!nk</Link>
            </div>
            <span>-</span>
            <span>Made by</span>
            <a href="https://github.com/dibya-22"
                target='_blank'
                title='https://github.com/dibya-22'
                rel="noopener noreferrer"
                className='hover:text-gray-200 hover:underline'>
                Dibya!
            </a>
        </footer>
    )
}

export default Footer
