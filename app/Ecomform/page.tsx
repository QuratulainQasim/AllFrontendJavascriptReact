"use client";
import React, { useState } from "react";
import "./form.css"
const Ecomform = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);


    const submitEcomForm = (e: any) => {
        e.preventDefault();
        const newEntry = {
            email: email, password: password
        };
        setAllEntry([...allEntry, newEntry]);
        setEmail("");
        setPassword("");
    }
    return (

        <>

            <div className="mainFormDiv">
                <form className="innerFormDiv" onSubmit={submitEcomForm}>
                    <h1> Login</h1>
                    <input type="text"
                        autoComplete="off"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /><br /><br /><br />


                    <input type="password"
                        autoComplete="off"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /><br /><br /><br />
                    <button>login</button>
                </form>
            </div>
            <div className="details">
                {allEntry.map((entry, index) => (
                    <div key={index}>
                        <h2>Email:</h2>
                        <p>{entry.email}</p>
                        <h2>Password:</h2>
                        <p>{entry.password}</p>
                    </div>
                ))}
            </div>

            <br /><br />
        </>
    )
}
export default Ecomform;

