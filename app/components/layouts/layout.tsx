"use client"
import { myframework } from '@/helpers/interface';
// import './style.css';
import React, { useEffect, useState } from 'react';
import { parse } from 'path';
import Currency from '@/app/currency/page';


interface Props {


    roseName: string,
    fruit1: string,
    fruit2: string,
    fruit3: string,
    fruit4: string,
    fruit5: string
}
export default function Layout(props: Props) {
    console.log(props)
    let [data, setData] = React.useState<myframework[]>([])
    const [srNumber, setsrNumber] = React.useState<number>(0);

   

    return (
        <>
            <h3>Layouts</h3>
            <h2>{props.roseName}</h2>


            <h2>Fruits Name</h2>

            <ul><li>{props.fruit1}</li></ul>
            <ul>  <li>{props.fruit2}</li></ul>
            <ul>   <li>{props.fruit3}</li></ul>
            <ul>   <li>{props.fruit4}</li></ul>
            <ul>   <li>{props.fruit5}</li></ul>




        </>
    )
}
