"use client";
import React from "react";
import "./styleN.css";
import Link from "next/link";


const ResNav = () => {
    return (
        <>
            <div className="ResponNav">
                <h1> Responsible Navebar</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href={"/Navigation"}>Navigation</Link>
                            <div className="dropdownmenu">
                                <Link href={"/ecomProductDetails?category=kitchen&id=1"}>Home & Kitchen</Link>
                                <Link href={"/ecomProductDetails?category=office&id=2"}>Health & care</Link>
                                <Link href={"/ecomProductDetails?category=health%20and%20care&id=3"}>School & office</Link>

                            </div>
                        </li>
                        <li>
                            <Link href={"/ecomproducts"}>Products</Link>
                        </li>
                        <li>
                            <Link href={"/myStudents"}>Students</Link>
                        </li>
                        <li>
                            <Link href={"/Blog"}>Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}
export default ResNav;



