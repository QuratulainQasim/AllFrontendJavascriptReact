"use client"
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const AllProducts = () => {
    const router = useRouter();
    const searchParams = useSearchParams()

    const color = searchParams.get('color');
    const id = searchParams.get('id');
    
    let localdata = localStorage.getItem('data');
    let parsedData = JSON.parse(localdata! ?? {});
    let find = parsedData.find((i: any) => i.id === Number(id));
    console.log('localdata', localdata, parsedData, find);
    return (
        <>
           
            <div>
                {parsedData.map(p => (
                    <>
                        <h1>product name</h1>
                        <p>{p.name} </p>
                        <Link href={'/ProductPage?id=' + p.id}>
                            go to detial
                        </Link>
                    </>))}
                    
            </div>
        
        </>
    )
}
export default AllProducts;


