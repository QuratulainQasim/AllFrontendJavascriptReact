"use client"
import React, { useState } from "react";
import "./style6.css";

const WithUs = () => {
    const imageArray = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg"]

    const [inputText, setInputText] = useState("");
    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputText(event.target.value);
    };
    const sendMessage = () => {
        setInputText("");
    };

    return (
        <>
            <div className="biggestDiv">
                <div className="allInOne">
                    <div className="inputContainer">
                        <h3>Chat with us</h3>
                        <div className="twoInOne">
                            <input
                                className="sendingInput"
                                type="text"
                                placeholder="Type here..."
                                value={inputText}
                                onChange={handleInputChange}
                            />
                            <img src="/sendMessageIcon.jpg" alt="Send" onClick={sendMessage} />
                        </div>
                    </div>
                </div>
                <div className="imageContainer">
                    {imageArray.map((imagePath, index) => (
                        <img className="imgss" key={index} src={imagePath} alt={`Image ${index + 1}`} />
                    ))}
                </div>

                <footer className="lastContainer">
                    <div className="intirecontainer">
                        <img src="/Ainee.jpg" alt="Quratulain" /><br /><br />
                        <h1>Develop by Quratulain</h1> 
                       <div className="btndiv"> <button>Follow</button>
                       <button>e-mail</button>
                       </div>
                        <p>76 followers</p>
                        <p>Undergraduate at Virtual University of Pakistan , Computer Science</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default WithUs;


