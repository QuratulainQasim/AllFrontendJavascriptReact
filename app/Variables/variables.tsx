import React, { useState } from 'react';
import './style.css';

export default function Variables() {
    const [search, setSearch] = useState("");
    const [filterdchoper, setFilteredChoper] = useState<any[]>([]);

    const [data, setData] = useState([
        { label: 'name', value: 'Ahmad' },
        { label: 'address', value: 'Karachi' },
        { label: 'profession', value: 'doctor' }
    ]);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [data1, setData1] = useState([
        { label: 'brand', value: 'Dell' },
        { label: 'Model', value: 'Inspiron 15' },
        { label: 'screenSize', value: 15.6 },
        { label: 'storage', value: '512GB SSD' },
        { label: 'ram', value: '8GB' },
        { label: 'color', value: 'silver' }
    ]);
    const [chopper, setChopper] = useState([
        { key: 'brand', value: 'KitchenAid' },
        { key: 'model', value: 'VigieMaster pro' },
        { key: 'color', value: 'silver' },
        { key: 'blade', value: 'Chopping Blade' },
        { key: 'power Source', value: 'Electric' },
        { key: 'warranty', value: '2 years' },
        { key: 'safetyFeatures', value: 'Non-slip Base' },
        { key: 'speedSettings', value: 2 },
        { key: 'capacity', value: '1.5 liters' },
        { key: 'power', value: '500 watts' }
    ]);
    let itemtoDetele = (item: any) => {
        let copy = [...chopper]

        let index = copy.findIndex((i) => i === item);
        copy.splice(index, 1);
        setChopper(copy);
        console.log('item this ', item);
    }

    const changeValues = () => {
        setData([
            { label: 'name', value: 'Ali' },
            { label: 'address', value: 'Lahore' },
            { label: 'profession', value: 'Engineer' }
        ]);
        setButtonClicked(true);
    };
    const searchValue = (e: any) => {
        console.log('value recived ehre', e);

        setSearch(e);

        let filteredata = chopper.filter(i => i.key.indexOf(search) > -1);

        setFilteredChoper(filteredata);
    }


    return (
        <>
            <h2 className="head-1">useState hooks in react js</h2>

            {data.map((item) => (
                <h3 key={item.label} className={item.label}>
                    {item.label}: {item.value}
                </h3>
            ))}

            {/* re-rendering the code */}
            {data.some((item) => item.value.toLowerCase() === 'doctor') && (
                <p>Medical Professional</p>
            )}

            {data.some((item) => item.value.toLowerCase() === 'engineer') && (
                <p>Engineering Professional</p>
            )}

            {buttonClicked && !data.some((item) => item.value.toLowerCase() === 'teacher') && (
                <p>There is no any teacher</p>
            )}
            {buttonClicked &&
                !data.some((item) => item.value.toLowerCase() === ' permanent address') && (
                    <p>Not permanent address </p>
                )}
            <button onClick={changeValues}>Click</button>
            <br />
            <br />

            <h2>Laptop Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Label</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {data1.map((item) => (
                        <tr key={item.label}>
                            <td>{item.label}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />
            <br />

            <h1 className="head-1">Vegetable Chopper Details</h1>
            <br />
            {/* {chopper.map((item) => (
                <p key={item.key} className={item.key}>
                    {item.key}: {item.value}
                </p>
            ))} */}


            <input type="text" onChange={(ee) => searchValue(ee.target.value)} value={search} />
            <br /><br />
            <h2>{search}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* aisay kai ja sakta ab tm usa ko search kr sakti ho yahan m 1 input banata hn search k lea yahan is m search krty hn abok */}
                    {filterdchoper.map((item, tRow) => (
                        <tr key={tRow}>
                            <td>{item.key}</td>
                            <td>{item.value}</td>
                            <td onClick={() => itemtoDetele(item)}>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* aisay kai ja sakta ab tm usa ko search kr sakti ho yahan m 1 input banata hn search k lea yahan is m search krty hn abok */}
                    {chopper.map((item, tRow) => (
                        // wo item m ny jo loop ho rahi the ya funciton ko pas kr day jb clcik kron is lea onlcick function lgaya hy
                        // ta k clcik krny pass ho jay r us function m recive ho jay clcik p ab daikthty hn recive hoi kia
                        <tr key={tRow}>
                            <td>{item.key}</td>
                            <td>{item.value}</td>
                            <td onClick={() => itemtoDetele(item)}>Delete</td>

                        </tr>
                    ))}
                </tbody>
            </table>
          


        </>
    );
}
