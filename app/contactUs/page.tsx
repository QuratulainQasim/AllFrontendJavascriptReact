// "use client"
// import { myframework } from '@/helpers/interface';
// // import './style.css';
// import React, { useEffect, useState } from 'react';
// import { parse } from 'path';
// import Image from 'next/image'
// import Link from 'next/link';
// import Navebar from '../components/navebar';
// import Footer from '../components/footer/footer';
// import Header from '../components/header/header';
// import Para from '../components/Paragraph/para';
// import Layout from '../components/layouts/layout';



// export default function contactUs() {
//     let [data, setData] = React.useState<[myframework]>()
//     const [srNumber, setsrNumber] = React.useState<number>(0);
//     const myfunc1 = () => {
//         console.log('first function console');
//     }
//     const myfunc2 = () => {
//         myfunc3()
//         console.log('function two log');

//     }
//     const myfunc3 = () => {
//         console.log('function three log');
//         myfunc1();

//     }
// yahan bhi hover krny p path show hta r oper bhi 
//     // call the function when array variable changes 
//     useEffect(() => {
//         console.log('sr number changes', srNumber);
//     }, [srNumber]);
//     // useEffect(()=>{},[]);

//     const images = [
//         { url: "https://picsum.photos/seed/a/1600/900" },
//         { url: "https://picsum.photos/seed/b/1920/1080" },
//         { url: "https://picsum.photos/seed/c/1366/768" },
//     ];


//     return (
//         <>

//             <h1>contactUs </h1>

//             <Navebar extra={{ is1: true, is2: 2 }}
//                 bgColor={"red"}
//                 isInline={false}
//                 more={6}
//                 myfunc={myfunc3}
//                 name={"Rozi"}
//                 flower={"Red Rose"}
//             />
//             <Para funnySkit1={"Bob: Why did you bring a ladder to work, Carol?" +
//                 "Carol: I heard it was a high-stakes meeting, Bob!"}
//                 funnySkit2={'Gary: I accidentally sent a cat meme to the entire company!' +
//                     'Linda: Well, at least it was a purr-fectly innocent mistake, Gary.' +
//                     "Bob: Now the office chat is flooded with 'meow-tivational' quotes!" +
//                     "Carol: Looks like we've upgraded to a 'paw-sitively' hilarious work environment"}
//                 cooking={false}
//             />
//             <Layout roseName={'Red Rose'}
//                 fruit1={'Apple'}
//                 fruit2={'Banana'}
//                 fruit3={'Mango'}
//                 fruit4={'Pear'}
//                 fruit5={'Watermelon'}        />    














//         </>
//     )

// }

