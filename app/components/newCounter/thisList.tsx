import React from "react";
import "./style1.css";
const ThisList = () => {


    const fruits = ["Apple", "banana", "orange", "guava", "grapes", "strawberry", "mango", "lichi"]
    const studentNames = ["Emily", "Michael", "Sarah", "Matthew", "Jessica", "Christopher", "Ashley", "Joshua", "Samantha", "David"];
    const offices = [
        {
            "name": "TechHub Lahore",
            "location": "123 Main Street, Lahore"
        },
        {
            "name": "Innovate Labs",
            "location": "45 Liberty Road, Lahore"
        },
        {
            "name": "Digital Nexus",
            "location": "789 Innovation Avenue, Lahore"
        },
        {
            "name": "CodeCrafters HQ",
            "location": "10 Tech Park, Lahore"
        },
        {
            "name": "CyberSolutions Inc.",
            "location": "55 Cyber Street, Lahore"
        }
    ];
    const images = [
        "  mob3.jpg", "mob2.jpg", "mob6.jpg", "mob9.jpg",
    ]
    const mobileCompanies = [
        {
            name: "Apple",
            headquarters: "Cupertino, California, USA",
            founder: "Steve Jobs, Steve Wozniak, Ronald Wayne",
            marketShare: "14.8% (2021)",
            revenue: "$365.78 billion (2021)",
            priceInDollars: "Starting from $699",
            ID: 1
        },
        {
            name: "Samsung",
            headquarters: "Seoul, South Korea",
            founder: "Lee Byung-chul",
            marketShare: "19.1% (2021)",
            revenue: "USD $213.1 billion (2020)",
            priceInDollars: "Starting from $499",
            ID: 2
        },
        {
            name: "Huawei",
            headquarters: "Shenzhen, Guangdong, China",
            founder: "Ren Zhengfei",
            marketShare: "8.0% (2021)",
            revenue: "CNY ¥891.4 billion (2020)",
            priceInDollars: "Starting from $599",
            ID: 3
        },
        {
            name: "Xiaomi",
            headquarters: "Beijing, China",
            founder: "Lei Jun",
            marketShare: "13.1% (2021)",
            revenue: "CNY ¥245.9 billion (2020)",
            priceInDollars: "Starting from $299",
            ID: 4
        },
        {
            name: "OnePlus",
            headquarters: "Shenzhen, Guangdong, China",
            founder: "Pete Lau, Carl Pei",
            marketShare: "N/A",
            revenue: "N/A",
            priceInDollars: "Starting from $699",
            ID: 5
        },
        {
            name: "Google",
            headquarters: "Mountain View, California, USA",
            founder: "Larry Page, Sergey Brin",
            marketShare: "3.4% (2021)",
            revenue: "$182.53 billion (2020)",
            priceInDollars: "Starting from $799",
            ID: 6
        },
        {
            name: "Sony",
            headquarters: "Tokyo, Japan",
            founder: "Masaru Ibuka, Akio Morita",
            marketShare: "3.2% (2021)",
            revenue: "JPY ¥8.259 trillion (2020)",
            priceInDollars: "Starting from $699",
            ID: 7
        },
        {
            name: "Motorola",
            headquarters: "Chicago, Illinois, USA",
            founder: "Paul Galvin, Joseph Galvin",
            marketShare: "2.0% (2021)",
            revenue: "USD $7.77 billion (2020)",
            priceInDollars: "Starting from $299",
            ID: 8
        },
        {
            name: "Nokia",
            headquarters: "Espoo, Finland",
            founder: "Fredrik Idestam, Leo Mechelin",
            marketShare: "1.3% (2021)",
            revenue: "EUR €21.86 billion (2020)",
            priceInDollars: "Starting from $199",
            ID: 9
        },
        {
            name: "LG",
            headquarters: "Seoul, South Korea",
            founder: "Koo In-hwoi",
            marketShare: "1.2% (2021)",
            revenue: "KRW ₩63.26 trillion (2020)",
            priceInDollars: "Starting from $399",
            ID: 10
        }
    ];
    

    return (
        <>
            <ol>
                {
                    fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))
                }
            </ol>
            <ul>
                {
                    studentNames.map((studentName, index) => (
                        <li key={index}>{studentName}</li>
                    ))
                }
            </ul>
            {
                offices.map((office, index) => (
                    <h5 key={index}>
                        {office.name} <br />
                        {office.location}
                    </h5>





                ))
            }

            <div>
                <h1>image gallery</h1>
                <div>
                    {
                        images.map((image, index) => (
                            <img className="mobimg" key={index} src={image} alt={`Image ${index}`} />
                        ))
                    }
                </div>
            </div>

            {/* mobile project with diffrent companies / */}
            <br /><br /><br /><br />
            <div className="mobtable">
                <h2>Global Mobile Industry Insights: Leading Companies Overview</h2>
                <div>
                    <table className="entiredata">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Headquarters</th>
                                <th>Founder</th>
                                <th>Market </th>
                                <th>Revenue</th>
                                <th>Price (USD)</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                mobileCompanies.map((company, index) => (
                                    <tr key={index}>
                                        <td>{company.ID}</td>
                                        <td>{company.name}</td>
                                        <td>{company.headquarters}</td>
                                        <td>{company.founder}</td>
                                        <td>{company.marketShare}</td>
                                        <td>{company.revenue}</td>
                                        <td>{company.priceInDollars}</td>
                                        <td>Delete</td>
                                        <td>Edit </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </>
    )
}
export default ThisList;

















// import { useState } from "react";


// const Thiscount = () => {
//     const [count, setCount] = useState(0);


//     const increment = () => {
//         setCount(count + 1)
//     }
//     const decrement = () => {
//         setCount(count - 1)
//     }
//     return (
//         <>
//             <h2> current counter : {count}</h2>
//             <h1 onClick={increment}> + </h1>
//             <br />
//             <h1 onClick={decrement}> - </h1>

//         </>
//     )
// }
// export default Thiscount;