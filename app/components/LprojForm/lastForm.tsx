import React, { useState } from "react";
import "./lForm.css"

const LastForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState(null);


   

    return (
        <>

            <div className="largestDiv">
                <div className="largerDiv">
                    <h3 className="Lheading">Login  Form</h3> <br /><br />
                    <input className="lInput"
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ backgroundImage: "url('emailIcon.png')" }} />
                    <br /><br />
                    <input className="lInput"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ backgroundImage: "url('Lpasswordimg.webp')" }} />
                    <br /><br /> <br /><br />

                    <button className="Lbutton" >Login</button>
                </div>
            </div>
           
           

            {userData && (
                <div>
                    <h3>User Data:</h3>
                    <ul>
                        <li>Email: {userData.email}</li>
                        <li>Password: {userData.password}</li>
                    </ul>
                </div>
            )}
        </>
    );
       
};
export default LastForm;