"use client"
import { useRouter, useSearchParams } from "next/navigation";

import React from "react";



const ProductPage = ()=>{
    const router = useRouter();
    const searchParams = useSearchParams()

  const color = searchParams.get('color');
  const id = searchParams.get('id');
 let localdata = localStorage.getItem('data');
 let parsedData = JSON.parse(localdata!??{});
 let find = parsedData.find((i:any)=> i.id === Number(id));
 console.log('localdata', localdata, parsedData, find);

return(
    <>
    <div>
        <h1>product page</h1>
       
        <p>Color: {color}</p>
        <p>Size: {find? find.name + ' and symbol is this => '+ find.Symbol : 'not found'}</p>
    </div>
 
    </>
)
}
export default ProductPage;


