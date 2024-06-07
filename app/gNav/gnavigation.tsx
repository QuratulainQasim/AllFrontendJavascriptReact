import React from "react";
import "./gnav.css";
import Link from "next/link"

const Gnavigation = () => {
    return (
        <>
            <h1 className="navmanue">navigation menu</h1>
            <div className="nav">
                <nav>
                    <ul className="currencyNavigation">
                        <li className="dropDown">
                            <a href="">United States</a>
                            <ul className="dropdownContent">
                                <li><a href="">id:1</a></li>
                                <li><a href="">symbol:USD</a></li>
                                <li><a href="">exchangeRate:1.0</a></li>
                                <li><a href="">LastUpdate:2024-01-25</a></li>
                            </ul>
                        </li>
                        <li className="dropDown">
                            <a href="">United Kingdom</a>
                            <ul className="dropdownContent">
                                <li><a href="">id:2</a></li>
                                <li><a href="">symbol:GBP</a></li>
                                <li><a href="">exchangeRate:0.73</a></li>
                                <li><a href="">LastUpdate:2024-01-25</a></li>
                            </ul>
                        </li>
                        <li className="dropDown">
                            <a href="">Japan</a>
                            <ul className="dropdownContent">
                                <li><a href="">id:3</a></li>
                                <li><a href="">symbol:JPY</a></li>
                                <li><a href="">exchangeRate:114.38</a></li>
                                <li><a href="">LastUpdate:2024-01-25</a></li>
                            </ul>
                        </li>
                        <li className="dropDown">
                            <a href="">Germany</a>
                            <ul className="dropdownContent">
                                <li><a href="">id:4</a></li>
                                <li><a href="">symbol:EUR</a></li>
                                <li><a href="">exchangeRate:0.81</a></li>
                                <li><a href="">LastUpdate:2024-01-25</a></li>
                            </ul>
                        </li>
                        <li className="dropDown">
                            <a href="">Australia</a>
                            <ul className="dropdownContent">
                                <li><a href="">id:5</a></li>
                                <li><a href="">symbol:AUD</a></li>
                                <li><a href="">exchangeRate:1.35</a></li>
                                <li><a href="">LastUpdate:2024-01-25</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Gnavigation;