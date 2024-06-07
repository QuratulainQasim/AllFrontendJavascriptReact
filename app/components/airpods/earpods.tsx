import React, { useState } from 'react';
import './style.css';

const Earpods = () => {
    const [earpodsData, setEarpodsData] = useState([
        { key: "brand", value: "Apple" },
        { key: "model", value: "Airpods Pro" },
        { key: "color", value: "white" },
        { key: "wireless", value: "true" },
    ]);
    const [key, setKey] = useState("");
    const [value, setValue] = useState("");

    const deleteItem = (item: { key: string; value: string; }) => {
        let copy = [...earpodsData];
        let index = copy.findIndex((i) => i === item);
        copy.splice(index, 1);
        setEarpodsData(copy);
    };

    const searchKey = (e: any) => {
        setKey(e.target.value);
    };

    const searchValue = (e: any) => {
        setValue(e.target.value);
    };

    const addProperty = () => {
        if (key && value) {
            setEarpodsData([...earpodsData, { key, value }]);
            setKey('');
            setValue('');
        }
    };

    return (
        <>
            <h3 className='head-1'>Earpods discription</h3>
            <table className='earpods-table'>
                <thead>
                    <tr>
                        <th>property</th>
                        <th>value</th>
                        <th>deletion</th>
                    </tr>
                </thead>
                <tbody>
                    {earpodsData.map((item) => (
                        <tr key={item.key}>
                            <td>{item.key}</td>
                            <td>{item.value}</td>
                            <td onClick={() => deleteItem(item)}>delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>add more properties</h3> <br /><br />
            <input type="text" placeholder='key' value={key} onChange={searchKey} /><br /><br />
            <input type="text" placeholder='value' value={value} onChange={searchValue} /><br /><br />
            <button onClick={addProperty}>add button </button>
            
        </>
    );
};

export default Earpods;
