import React from "react";
import "./style.css";

interface Aribaprops {
    image: string;
    head: string;
    thisFunc: (m: number, n: number) => void;
}


const Ariba = (props: Aribaprops) => {


    return (
        <>
            <img src={props.image} alt="@" />
            <h2 className="Arb-head">{props.head}</h2>
            <button onClick={() => props.thisFunc(78908, 3547888)}>showNumber</button>
        </>
    )


}

export default Ariba;   