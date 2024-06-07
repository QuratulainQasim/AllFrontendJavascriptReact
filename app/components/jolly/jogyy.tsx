import React, { useState } from "react";
import "./style.css";
import House from "../home/house";
import TodoList from "../lists/todolist";

interface Jogyyprops {
    image: string;
    headng: string;
}
const Jogyy = (props: Jogyyprops) => {
    const [addNum, setAddNum] = useState(Number);
    const [addNum2, setAddNum2] = useState(Number);
    const [result, setResult] = useState(Number);

    const dataFunction = () => {
        const addnum = addNum + addNum2;
        setResult(addnum);


    }
    return (
        <>
            <div className="over-All">
                <img className={"img-employee"} src={props.image} alt="@" />
                <h1 className="head-office-worker">{props.headng}</h1>
            </div><br /><br />
            <input type="text" onChange={(e) => setAddNum(Number(e.target.value))} />
            <input type="text" onChange={(e) => setAddNum2(Number(e.target.value))} />
            <button onClick={dataFunction}>Numbers</button>
            {result != null && (
                <div>
                    <h1>result</h1>
                    <p>{result}</p>
                </div>
            )}

            <br /><br />
            <House image={"https://tse1.mm.bing.net/th?id=OIP.L1EtwZp8HF-try_KsKL9RAHaFj&pid=Api&P=0&h=220"}
                image2={"https://tse2.mm.bing.net/th?id=OIP.izqqI6zf0-Ot-O1iaVu4KAHaEK&pid=Api&P=0&h=220"} />

            <br /><br />
            <TodoList />
        </>

    )
}
export default Jogyy;