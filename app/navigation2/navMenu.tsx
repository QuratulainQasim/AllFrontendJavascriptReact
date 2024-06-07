import React, { useState } from "react";
import "./navmenu.css";

const NavMenu = () => {
    const [previouData, setpreviousData] = useState<any[]>([])
    const [dataInfo, setDataInfo] = useState<{ username: string, email: string }>({ username: "", email: "" })

    const submitForm = () => {
        setpreviousData((oldData) => {
            let newArray = [...oldData, dataInfo]
            return newArray;
        })
        setDataInfo({ username: "", email: "" })
    }
    const changeValue = (key: string, value: string) => {
        setDataInfo((oldData) => {
            let newObj = { ...oldData, [key]: value }
            return newObj;
        })
    }
    const clickButton = () => {
        submitForm();
    }

    return (
        <>
            <div className="navigationDiv">
                <h1 className="amzHead">Amazon instructions</h1>
                <nav className="topNav">
                    <ul>
                        <li className="dropdown">
                            <a href="/Alldepartments">Alldepartments</a>
                            <ul className="dropdownContent">
                                <li><a href="">baby product</a></li>
                                <li><a href="">medical products</a></li>
                                <li><a href=""> beauty nd personal care</a></li>
                                <li><a href="">sports products</a></li>
                            </ul>
                        </li>
                        <li><a href="/AmazonBasic">AmazonBasic</a></li>
                        <li><a href="/Blog">Blog</a></li>
                    </ul>
                </nav>
            </div>
            <br /><br /> <br /><br />
            {/* a new login form */}

            <div className="mainDiv">

                <div className="miniDiv">
                    <h1 className="logform">Login Form</h1>
                    <input className="dataInfoInputs"
                        type="text"
                        placeholder="username"
                        value={dataInfo?.username}
                        onChange={(e) => changeValue("username", e.target.value)} />
                    <br /> <br />
                    <input className="dataInfoInputs"
                        type="text"
                        placeholder="email"
                        value={dataInfo?.email}
                        onChange={(e) => changeValue("email", e.target.value)} />
                    <br /><br /><br />
                    <img className="formButton" src="/goButton.jpg" alt="$" onClick={() => clickButton()} />
                </div>

            </div> 
            <div className="emptyBox">
                <ul>
                    <h2>Entered Data:</h2>
                    {
                        previouData.map((item, index) => (
                            <li key={index}>
                                <h3>username:</h3>{item.username},<h3>email:</h3>{item.email}
                            </li>
                        ))
                    }
                </ul>
            </div>

        </>
    )
}
export default NavMenu;