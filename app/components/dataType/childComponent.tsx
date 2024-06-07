
import React from "react";
import "./style.css";
import Ariba from "../siblings/Ariba";
import Earpods from "../airpods/earpods";
import Jogyy from "../jolly/jogyy";

interface ChilComponentdProps {


  image: string;
  heading: string;
}

const ChildComponent = (props: ChilComponentdProps) => {

  const thisFunc = (m: number, n: number) => {
    const sol = m * n;
    console.log(sol);
  }

  return (


    <>
      <img src={props.image} alt="@" />
      <h2 className="st-head">{props.heading}</h2>

      <Ariba image={"https://tse2.mm.bing.net/th?id=OIP.QCNMuZp-ybhD2Aalq6V8rwHaL8&pid=Api&P=0&h=220"}
        head={"Female student"} thisFunc={thisFunc} />
      <Earpods />
<br /><br />
      <Jogyy image={"https://i0.wp.com/healthcheckscreening.com/wp-content/uploads/2017/11/AdobeStock_108067216.jpeg?fit=6168%2C2784&ssl=1"}
        headng={"Employees Health-Check Image"} />

    </>


  );
};

export default ChildComponent;
