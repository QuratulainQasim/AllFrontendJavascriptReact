import React, { useState } from "react";


const SchoolClasses = () => {
    const [schoolData, setSchoolData] = useState([
        { Grade: "One", classIncharge: "Ms. Smith", roomNumber: "101" },
        { Grade: "Two", classIncharge: "Mr. Johnson", roomNumber: "102" },
        { Grade: "Three", classIncharge: "Mrs. Brown", roomNumber: "103" },
        { Grade: "Four", classIncharge: "Mr. Davis", roomNumber: "104" },
        { Grade: "Five", classIncharge: "Ms. Garcia", roomNumber: "105" }
    ]);
    const [Grade, setGrade] = useState("");
    const [classIncharge, setClassIncharege] = useState("");
    const [roomNumber, setRoomNumber] = useState("");

    return (
        <>
            <h2>School classes</h2>

        </>
    )
}
export default SchoolClasses;