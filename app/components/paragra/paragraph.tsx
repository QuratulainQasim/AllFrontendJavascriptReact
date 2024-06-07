import React from "react";
import Para from "../Paragraph/para";

interface ParaProps {
    paragraph: string;
    my2ndpro: number;
}
const Paragraph= (props:ParaProps) => {
    return (
        <>
            <p>{props.my2ndpro}</p>
        </>
    );
};

export default Paragraph;
