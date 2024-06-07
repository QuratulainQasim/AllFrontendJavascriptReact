"use client"
import { myframework } from '@/helpers/interface';
import './style.css';
import React, { useEffect, useState } from 'react';
import { parse } from 'path';
import Image from 'next/image'
import Link from 'next/link';

interface Props {
    isInline: boolean,
    bgColor: string,
}
export default function Footer(props: Props) {
    console.log(props)
    let [data, setData] = React.useState<myframework[]>([])
    const [srNumber, setsrNumber] = React.useState<number>(0);
    
    const myfunc1 = () => {
        console.log('first function console');
    }
    const myfunc2 = () => {

    }
    // hm ny file save ni ki the bs ya issue tha

    // ya compoent links k lea hy ab hm isay diff pages m use kren gy ta k link tag br br na sub m lgany perain

    return (
        <>
        <h1>footer links</h1>
            {/* ab hamri css bhi link ho ge r condition bhi lg ge */}
            <nav className={props.bgColor}> 
            {/* props came as object form we can access them using dot */}
                <Link className={props.isInline ? 'inline-d' : 'block-d'} href="/">home</Link>
                <Link className={props.isInline ? 'inline-d' : 'block-d'} href="/contactUs"> contactUs </Link>
                <Link className={props.isInline ? 'inline-d' : 'block-d'} href="/services"> services </Link>

            </nav>






        </>
    )

}

