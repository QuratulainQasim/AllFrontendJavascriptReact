// import React, { useState } from 'react';
// import './style.css';

// const PizzaPeel = () => {
//     const [pizzapeelData, setPizzapeelData] = useState([
//         { key: "material", value: "wood" },
//         { key: "length", value: 24 },
//         { key: "hasHandle", value: "true" },
//         { key: "brand", value: "pizzaMaster" },
//     ]);
//     const [property, setProperty] = useState("");
//     const [value, setValue] = useState("");

//     const deleteItem = (item: { key: string; value: string; } | { key: string; value: string; }) => {
//         const copyArray = [...pizzapeelData];
//         const index = copyArray.findIndex((i) => i.key === item.key);
//         copyArray.splice(index, 1);
//         setPizzapeelData(copyArray);
//     }
//     const searchProperty = (e: any) => {
//         setProperty(e.target.value)
//     };
//     const searchValue = (e: any) => {
//         setValue(e.target.value)
//     };

//     const addProperty = () => {
//         if (property && value) {
//             // setPizzapeelData([...pizzapeelData, {   property,value }])
//             setPizzapeelData([...pizzapeelData, { key: property, value: value }]);

//             setProperty("");
//             setValue("");
//         }
//     }


//     return (
//         <>
//             <h3>Pizza Peel Description</h3>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Properties</th>
//                         <th>Values</th>
//                         <th>Deletion</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {pizzapeelData.map((item) => (
//                         <tr key={item.key}>
//                             <td>{item.key}</td>
//                             <td>{item.value}</td>
//                             <td onClick={() => deleteItem(item)}>Delete</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table><br />
//             <input type="text" placeholder='property' value={property} onChange={searchProperty} /><br /><br />
//             <input type="text" placeholder='value' value={value} onChange={searchValue} /><br /><br />
//             <button onClick={addProperty}>adding</button>
//         </>
//     );
// };

// export default PizzaPeel;
