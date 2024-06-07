import React, { useState } from "react";
import ShowImage from '../props2/showImage';
import Para from "../Paragraph/para";
import Paragraph from "../paragra/paragraph";
import Numbers from "../numbers/numbers";
import SecondPara from "../functions/secondPara";
import ChildComponent from "../dataType/childComponent";


const MultipleTypes = () => {



    let myob = { name: 'Ali', class: 4 }
    // const myFunction = (p: number, q: number) => {

    //     const sumnum = p + q;
    //     console.log(sumnum);
    // }
    // const multiplication = (a: number, b: number) => {
    //     const multiNum = a * b;
    //     console.log(multiNum);
    // }



    return (
        <>

            <ShowImage image={'https://tse1.mm.bing.net/th?id=OIP.4c0vTFSJ9BhcIkKuTpmOpwHaK1&pid=Api&P=0&h=220'} />
            <h1>show image</h1>
            <Paragraph my2ndpro={2} paragraph={"this is a paragraph"} />
            {/* <SecondPara ob={myob} secondParagraph={"second paragrph"} myfunction={myFunction} multipleNumbers={multiplication}

            /> */}
            < Numbers image={"https://thumbs.dreamstime.com/b/young-business-woman-student-girl-sitting-office-workplace-laptop-computer-home-business-concept-92707838.jpg"}
                para={"I'm Lina. I'm a coder. I'm from South Korea. I'm 28 years old."} />


            <ChildComponent image={"https://tse1.mm.bing.net/th?id=OIP.uTnQnoHAfst_mn0gLTv2MAHaE8&pid=Api&P=0&h=220"}
             heading={"Managing the perfect classRoom"} />

        </>
    )
}
export default MultipleTypes;


