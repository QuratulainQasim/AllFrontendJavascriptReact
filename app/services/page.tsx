"use client"
import { myframework } from '@/helpers/interface';
// import './style.css';
import React, { useEffect, useState } from 'react';
import { parse } from 'path';
import Image from 'next/image'
import Link from 'next/link';
import Navebar from '../components/navebar';
import Header from '../components/header/header';


export default function Services() {
    let [data, setData] = React.useState<myframework[]>([])
    const [srNumber, setsrNumber] = React.useState<number>(0);
    const myfunc1 = () => {
        console.log('first function console');
    }
    const myfunc2 = () => {

    }
    const myfunc3 = () => {

    }
    // call the function when array variable changes 
    useEffect(() => {
        console.log('sr number changes', srNumber);
    }, [srNumber]);
    // useEffect(()=>{},[]);


    return (
        <>

            <h1>services </h1>
            <Navebar bgColor='pink' isInline={true} moreDetails={"I am a programmer"} />

            {/* <Header isInline={false}
            bgColor='green'
            StudentName={"Ahsan Ali"}
            fruitsName={" Banana,APPLE ,Oragnge, Mango,Pear, Grapes"}
            oddNumbers={357911}
            captalOfPakistan={'Capital of Pakistan => Islamabad'}
            myProfession={'My profession => web development'}
             FavouriteDigit={'My favourite digit => 7'}            /> */}









            {/* services k page m line is lea hy kyn k hm ny props m inline true bhaija */}







        </>
    )

}

