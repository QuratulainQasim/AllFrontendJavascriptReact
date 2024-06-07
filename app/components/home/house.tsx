import React, { useState } from "react";
interface houseprops {
    image: string;
    image2: string;
}


const House = (props: houseprops) => {

    const [firstNum, setFirstNum] = useState(Number);
    const [secondNum, setSecondNum] = useState(Number);
    const [result, setResult] = useState(Number);

    const devideFunc = () => {
        const devideNmbrs = firstNum / secondNum;
        setResult(devideNmbrs);
    }
    return (
        <>
            <img src={props.image} alt="@" /> <br /><br />
            <input type="text" onChange={((e) => setFirstNum(Number(e.target.value)))} /> <br />
            <input type="text" onChange={((e) => setSecondNum(Number(e.target.value)))} /> <br />

            <button onClick={devideFunc}>click</button>
            {result != null && (
                <div><h3>result : {result}</h3>
                </div>
            )} 
            <div>
                <img src={props.image2} alt="" />
            </div>

        </>
    )
}
export default House;










