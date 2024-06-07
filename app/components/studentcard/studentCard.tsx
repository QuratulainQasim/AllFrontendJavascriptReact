import React from 'react';
import "./style.css"
interface Props {
    student: { id: number, name: string, imageUrl: string, fee: number, grade: number },
    seccondprop: string;
    myfunction: (student: any) => void

}
const StudentCard = (props: Props) => {


    const { id, name, imageUrl, fee, grade } = props.student;
    return (
        <>
            <div className="product-card" onClick={() => props.myfunction(props.student)}>
                <img src={props.student.imageUrl} alt={name} className="product-image" />

                <div className="product-details"
                    onClick={() => props.myfunction(props.student)}
                >

                    <h3>name:{name} </h3>
                    <p className={props.student.fee < 30000 ? "st-fee" : "st2-fee"}> fee: {fee} </p>


                    <p className={props.student.grade > 5 ? "st-grade" : "st-grade"}> grade{grade}</p>
                    <p className={props.student.grade < 5 ? "st2-grade" : "st2-grade"}> grade:{grade}  </p>
                </div>
            </div>
        </>

    );
}

export default StudentCard;






