import React from "react";
import paragraph from "../paragra/paragraph";
import "./style.css"
interface paragraphprops {
    secondParagraph: string;
    ob: { name: string, class: number }
    myfunction: (p: number, q: number) => void
    multipleNumbers: (a: number, b: number) =>number
}
const SecondPara = (props: paragraphprops) => {
    return (
        <>
            <p>{props.secondParagraph}</p>
            <h2>{props.ob.name}</h2>
            <h2 className={props.ob.class > 5 ? "student-class" : "student2-class"}>{props.ob.class}</h2>
            <button onClick={() => props.myfunction(2, 3)}>clickButton</button>
            <p>{props.multipleNumbers(7, 9)}</p>
        </>
    )
}
export default SecondPara;