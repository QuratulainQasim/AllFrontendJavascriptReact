
import { useState } from 'react';
import StudentCard from '../studentcard/studentCard';
import './style.css';


const StudentList = () => {
    const [newArr, setnewArr] = useState<any[]>([]);
    const [searchFee, setSearchFee] = useState(Number);
    const students = [
        {
            id: 1,
            name: 'Lina',
            imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.L1EtwZp8HF-try_KsKL9RAHaFj&pid=Api&P=0&h=220',
            fee: 20000,
            grade: '8 ',
        },
        {
            id: 2,
            name: 'Fiada',
            imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.rxz8EssBEU717bAQlYHwdQHaE7&pid=Api&P=0&h=220',
            fee: 30000,
            grade: '9 ',
        },
        {
            id: 3,
            name: 'Pinky',
            imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.-kVpSKs2TWlBBJxQbYppBQHaE8&pid=Api&P=0&h=220',
            fee: 4000,
            grade: '10 ',
        },
        {
            id: 4,
            name: 'Wemberry',
            imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.fjzFjO8BsTIkqFzB2hin6QHaE8&pid=Api&P=0&h=220',
            fee: 5000,
            grade: '10 ',
        },
    ];

    const parentFunction = (std: any) => {

        let copyFirstOLdState = [...newArr];

        copyFirstOLdState.push(std);
        setnewArr(copyFirstOLdState);
        console.log('check the state value now ', newArr); //******console


    }
    const SearchSt = (singleSt: any) => {
        if (searchFee !== null) {
            const filteredStudent = students.filter(student => student.fee === searchFee);
            setnewArr(filteredStudent);
        }
    }


    return (
        <>

            <div className='student-Border'> <h1 className='student-card'> Student Card for High School</h1></div>
            <br /><br />
            <div> <input type="number" placeholder='searchFee' onChange={(e)=>setSearchFee(Number(e.target.value))} /> 
             <button onClick={SearchSt}>SearchStudent </button></div>


            <div className="student-list">
                {students.map(students => (
                    <StudentCard key={students.name}
                        myfunction={parentFunction}
                        seccondprop='lets test props'
                        student={students} />
                ))}
            </div>


            <table className='student-table' >
                <thead>
                    <tr>
                        <th> <b>Name</b>  </th>
                        <th><b>Fee</b>  </th>
                        <th><b>Grade</b>  </th>
                    </tr>
                </thead>
                <tbody>
                    {newArr.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.fee}</td>
                            <td>{item.grade}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </>
    );
};

export default StudentList;
