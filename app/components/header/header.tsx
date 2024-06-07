"use client"
import { myframework } from '@/helpers/interface';
import './style.css';
import React, { useEffect, useState } from 'react';
import { parse } from 'path';


interface Props {
    isInline: boolean,
    bgColor: string,
    StudentName: string,
}
export default function Header(props: Props) {

// wo dikahana file package ki dosry project ki jo download kia tha
    
    console.log(props)
    let [data, setData] = React.useState<myframework[]>([])
    const [srNumber, setsrNumber] = React.useState<number>(0);

    return (
        <>
            <h1> components chagnes </h1>
            <h3>{props.StudentName}</h3>

        </>
    )
}
