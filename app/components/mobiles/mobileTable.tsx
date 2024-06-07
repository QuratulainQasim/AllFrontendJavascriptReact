import React, { useState } from "react";
import "./style1.css";


const MobileTable = () => {


    const deleteButton = (index: any) => {
        const updatedCompanies = [...mobileCompanies];
        updatedCompanies.splice(index, 1);
        setMobileCompanies(updatedCompanies)

    };

    const EditButton = (id) => {

        const company = mobileCompanies.find((comp) => comp.ID === id);
        document.getElementById("editInput").value = id
    }
    const [mobileCompanies, setMobileCompanies] = useState([
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
    ]);





    return (
        <div className="mobtable">
            <h2>Global Mobile Industry Insights: Leading Companies Overview</h2> <br /><br />
            <input id="editInput" className="mobeditInput" type="text" placeholder="Editing companies Data" />
            <br /><br />


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
                                    <td onClick={() => deleteButton(index)}>Delete</td>
                                    <td onClick={() => EditButton(company.ID)}>Edit </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default MobileTable;
