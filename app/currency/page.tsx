"use client";

import { ICurrency } from '@/helpers/interface';
import React, { useEffect } from 'react';

export default function Currency() {
    let [data, setData] = React.useState<ICurrency[]>([])
    const [data1, setData1] = React.useState<number>();
    const [data2, setData2] = React.useState("");
    const [data3, setData3] = React.useState("");
    const [ispageLoaded, setIsPageLoaded] = React.useState(false);

    const getValue = (val: string) => {
        console.log(val)
        setData2(val);
    }

    const addNew = () => {
        let ob: ICurrency = {
            id: data.length + 1,
            name: data2,
            Symbol: data3,
        }
        setData([...data, ob]);
    }

    const updateData = (id: number) => {
        let cdata = [...data];
        let findindex = cdata.findIndex(item => item.id === id);
        if (findindex !== -1) {
            setData1(id); // set the id in data1
            setData2(cdata[findindex].name); // set the name in data2
            setData3(cdata[findindex].Symbol); // set the symbol in data3
        }
    }

    const remove = async (id: number) => {
        let cdata = [...data];
        let findindex = cdata.findIndex(item => item.id === id);
        if (findindex > -1) {
            cdata.splice(findindex, 1);
            await setData(cdata);
        }
    }

    const saveData = () => {
        localStorage.setItem('data', JSON.stringify(data));
    }

    const getData = () => {
        let findData = localStorage.getItem('data');
        if (findData) {
            return JSON.parse(findData);
        } else {
            return [];
        }
    }

    useEffect(() => {
        console.log('data changed');
        setTimeout(() => {
            saveData();            
        }, 500);
    }, [data]);

    useEffect(() => {
        setData(getData());
    }, []);

    return (
        <>
            <h2>my new task</h2>
            <h2>currency name</h2>
            <input type="text" value={data2} onChange={event => getValue(event.target.value)} /> <br /><br />
            <h2>currency symbol</h2>
            <input type="text" value={data3} onChange={event => setData3(event.target.value)} /> <br /><br />
            <button onClick={() => addNew()} type='button'>click</button>
            {/* <button onClick={updateData} type='button'>update</button> */}

            <table border={5}>
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>symbol</th>
                        <th>edit</th>
                        <th>remove</th>
                    </tr>
                    {data.map(dt => {
                        return (
                            <tr key={dt.id}>
                                <td>{dt.id}</td>
                                <td>{dt.name}</td>
                                <td>{dt.Symbol}</td>
                                <td onClick={() => updateData(dt.id)}>edit</td>
                                <td onClick={() => remove(dt.id)}>remove</td> {/* Pass dt.id as an argument to the remove function */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}
