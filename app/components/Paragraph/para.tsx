"use client"
import { myframework } from '@/helpers/interface';
// import './style.css';
import React, { useEffect, useState } from 'react';
import { parse } from 'path';


interface Props {
    funnySkit1: string,
    funnySkit2:string,
    cooking:boolean,

}
export default function Para(props: Props) { // single line function with export is m tm nechy r bhi tag bna 
    // sakti ho pages ki file m ziada page ni ban sakti ho
    // lkin tags tm 1 file zaida ban sakti ho page 1 k lea 1 he file ho ge
    // smjh ag ge?  yes yes yes
    // m tag bnaata 1 file 2
    console.log(props)
    let [data, setData] = React.useState<myframework[]>([])
    const [srNumber, setsrNumber] = React.useState<number>(0);

    return (
        <>
            <h1>Paragraph </h1>
            <p>{props.funnySkit1}</p>
            <p>{props.funnySkit2}</p>
           <h3>{props.cooking}</h3>





        </>
    )
}
