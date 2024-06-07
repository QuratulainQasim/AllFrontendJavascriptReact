import React from "react";
import "./style.css"
interface numberprops{
    image:string;
    para:string;
}


const Numbers = (props:numberprops) => {
    return (
        <>
<div>
    <img className="img-1" src={props.image} alt="showimg" />
    <p className="para-1">{props.para}</p>

</div>

        </>
    )
}
export default Numbers;