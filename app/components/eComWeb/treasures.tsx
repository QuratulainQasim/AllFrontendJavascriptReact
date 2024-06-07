import React from "react";
import "./style2.css";
import Link from "next/link";

const Treasures = () => {
    return (
        <>
            <div>
                <nav className="topNav">
                    <ul>
                        <li><a className="myTreasure" href="#"><b>Qazi's Treasures</b></a></li>
                        <li className="dropdown">
                            <a href="/Alldepartments">Alldepartments</a>
                            <ul className="dropdownContent">
                                <li><a href="">baby product</a></li>
                                <li><a href="">medical products</a></li>
                                <li><a href="">beauty nd personal care</a></li>
                                <li><a href="">sports products</a></li>
                            </ul>
                        </li>
                        <li><a href="/homeAndKitchen">homeAndKitchen</a></li>
                        <li><a href="/Blog">Blog</a></li>
                        <li><a href="/ExclusiveCollections">ExclusiveCollections</a></li>
                        {/* <li><a href="/GiftIdeas">GiftIdeas</a></li> */}
                    </ul>
                    <li><a className="login-button" href="/Ecomform">Login</a></li>
                </nav>
            </div>
            <br /><br />
            <img className="pic1" src="blueFamily.webp" alt="" />
            <div className="bnch">
                <p className="my-para">WELCOME TO</p>
                <h1 className="heading">Qazi's Treasures</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, <br />
                    hic quisquam id illo iste nobis ipsa sint ducimus? Fugiat, voluptatum <br />
                    vel ullam a illo modi enim libero consectetur eum id?</p><br /><br />
                <button className="shop-button"><a href="/ecomproducts">SHOP NOW</a></button><br /><br />
            </div>
            <div className="lowerdiv">
                <div className="phd">
                    <p>CHECK NOW</p>
                    <h1>Our Feature Services</h1>
                </div>
                <div className="imageDiv">
                    <div>
                        <img src="th.jpg" alt="" />
                        <p>iphone X  $60,000</p>
                    </div>
                    <div>
                        <img src="Accessories.jpg" alt="" />
                        <p>Accessories  $15,000</p>
                    </div>
                    <div>
                        <img src="glaxy.jpg" alt="" />
                        <p> Glaxy $40,000</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="intirelowerdiv">
                    <div className="imgDiv"> <img src="/noConnectionimg.jpg" alt="" />
                        <p>non connect shipping</p></div>
                    <div className="imgDiv">
                        <img src="/supperShipping.jpg" alt="" />
                        <p>super fast & free delivery</p>
                    </div><br />
                    <div className="imgDiv">
                        <img src="/money.png" alt="" />
                        <p>money back guaranteed</p>
                    </div>
                    <div className="imgDiv">
                        <img src="/moneysecure.png" alt="" />
                        <p>super secure payment system</p>
                    </div>
                </div>
            </div>
            <div className="secondlast">
                <h4>Trusted by 100+ Companies</h4>
                <div className="logoDiv">
                    <img src="/appleLogo.png" alt="" />
                    <img src="/nikelogo.png" alt="" />
                    <img src="/mcdola.png" alt="" />
                    <img src="/logotayota.png" alt="" />

                </div>
            </div>
            <footer className="footer">
                <p>Ready to get started ? <br /> Talk to us today</p> <br />
                <button><Link href={"/withUs"}>Get STARTED</Link></button>
            </footer>
        </>
    );
};

export default Treasures;
