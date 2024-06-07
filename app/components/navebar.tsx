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
    extra? :{is1:boolean, is2:number},
    more?:number,
    name?:string,
    moreDetails?:string,
    myfunc?:()=>void,
    flower?:string,
}
export default function Navebar(props: Props) {
    console.log('porops here in contact us', props)
    let [data, setData] = React.useState<myframework[]>([])
    const [srNumber, setsrNumber] = React.useState<number>(0);
    const myfunc1 = () => {
        console.log('first function console');
    }
    const myfunc2 = () => {

    }
   

    return (
        <>
           
            <h2>{props.more}</h2>
            <h3>{props.extra?.is2}</h3>
            <h2>{props.name}</h2>
            <p>{props.moreDetails}</p>
            <h4 onClick={props?.myfunc}>call function 3</h4>
            <h1>{props.flower}</h1>


            
            <nav className={props.bgColor}>
               
                <Link className={props.isInline ? 'inline-d' : 'block-d'} href="/">home</Link>
                <Link className={props.isInline ? 'inline-d' : 'block-d'} href="/contactUs"> contactUs </Link>
                <Link className={props.isInline ? 'inline-d' : 'block-d'} href="/services"> services </Link>

            </nav>






        </>
    )

}

