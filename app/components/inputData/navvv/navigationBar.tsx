import React from "react";
import Link from 'next/link';
import "./navStyle.css";

const NavigationBar = () => {
    return (
        <>
            <div className="navDiv">
                <nav className="navigationMenu">
                    <ul>
                        <li><Link href="/">Home</Link></li>

                        <li>
                            <Link className="droButton" href="/About">About</Link>
                            <ul>
                                <li><Link href="/About#mission">Mission</Link></li>
                                <li><Link href="/About#vission">Vision</Link></li>
                                <li><Link href="/About#team">Team</Link></li>
                            </ul>
                        </li>

                        <li><Link href="/Contact">Contact</Link></li>
                        <li><Link href="/Blog">Blog</Link></li>

                        <li>
                            <Link className="droButton" href="/Product">Product</Link>
                            <ul>
                                <li><Link href="/Product#cosmetic">Cosmetic Product</Link></li>
                                <li><Link href="/Product#kitchen">Kitchen Products</Link></li>
                                <li><Link href="/Product#sports">Sports Product</Link></li>
                                <li><Link href="/Product#jewelry">Jewelry</Link></li>
                                <li><Link href="/Product#toys">Toys and Games</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavigationBar;
