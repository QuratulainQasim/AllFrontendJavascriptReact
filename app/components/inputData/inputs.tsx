import React, { useState } from "react";


import "./style.css"

const Inputs = () => {

    const [allData1, setAllData1] = useState<any[]>([])
    const [allData, setAllData] = useState<{ name: string, contactNumber: string, grade: string }>({ name: '', contactNumber: "", grade: '' })
    const [editingData, setEditingData] = useState<number|null>(null);

    const submitForm = () => {
        
        setAllData1((olddata) => {
            let newArr = [...olddata, allData]
            return newArr
        })
        setAllData({ name: "", contactNumber: "", grade: "" })

    }
    const changeValue = (key: string, value: string) => {
        setAllData((olddata) => {
            let newob = { ...olddata, [key]: value };
            return newob;
        })
    }


    const getDataOnClick = () => {

        submitForm();

    }
    const deleteData = (index: any) => {
        setAllData1((oldData) => oldData.filter((_, i) => i !== index));
    }

    const EditItem = (data: any, index:number| null) => {
        setAllData(data);
        setEditingData(index)
    }
    return (
        <>
            <div className="mainDiv">
                <div className="center-divv">
                    <h1 className="blue-head">Student Form </h1>
                    <input className="input-Style"
                        type="text"
                        placeholder="Name"
                        value={allData.name}
                        onChange={(e) => changeValue('name', e.target.value)} /><br /> <br />
                    <input className="input-Style"
                        type="number"
                        placeholder="contactNumber"
                        value={allData.contactNumber?.toString()}
                        onChange={(e) => changeValue('contactNumber', e.target.value)} /><br /><br />
                    <input className="input-Style"
                        type="text"
                        placeholder="Class "
                        value={allData.grade}
                        onChange={(e) => changeValue('grade', e.target.value)} /> <br /><br />

                    <img className="goButton" src="/goButton.jpg" alt="" onClick={() => getDataOnClick()} />

                    <div className="table">
                        <table>
                            <thead>
                                <tr><th>Name</th>
                                    <th>contactNumber</th>
                                    <th>Grade</th>
                                    <th><img className="deleteButton" src="/deleteButton.webp" alt="" /></th>
                                    <th><img className="editButton" src="/EditButton.jpg" alt="" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {allData1.map((data, index) =>

                                    <tr key={index}>
                                        <td>{data.name}</td>
                                        <td>{data.contactNumber}</td>
                                        <td>{data.grade}</td>
                                        <td><img className="deleteButton" src="/deleteButton.webp" alt="" onClick={() => deleteData(index)} /> </td>
                                        <td><img className="editButton" src="EditButton.jpg" alt="" onClick={() => EditItem(data, index)} /></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Inputs;