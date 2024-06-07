import React, { useState } from 'react';
import './style.css';
import Link from 'next/link';











const Navebar = () => {
    return (
        <>
            <h1 className='heading-first'>navebar</h1>
            <nav className='navbar'>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/Contact">Contact</Link></li>
                    <li><Link href="/Blog">Blog</Link></li>
                    <li><Link href="/Product">Product</Link></li>


                </ul>
            </nav>
        </>
    )
}
export default Navebar;