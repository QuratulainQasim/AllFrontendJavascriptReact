"use client"
import { myframework } from '@/helpers/interface';
import './style.css';
import React, { useState } from 'react';
import { parse } from 'path';

export default function framework() {
    let [data, setData] = React.useState<myframework[]>([])
    const [srNumber, setsrNumber] = React.useState<number>();

    const [name, setName] = React.useState(''); // ya react.usestate 2 array items deti hy inital state r setstate hm un ko apny function m kr lety convert
    // ya sub use ho ga kafi
    const [fee, setFee] = useState<number>(); // inital vlaue undefiend the tbi wo or k sath undefined day raha k shaid undeifned ho sakti hy
    // aik mnt
    //initial value deny sy error khtm ab ! ye lgany ki zroort ni
    // hn g isay aksar jaghon p aisay shak ho jata k undefined na to to ya error deta ahttiatan to hm lga sakty ab isay shak ni hy k inital state 
    //set ho ge tbi
    // ab is ka shk door kr dua hai 
    // hng 



    const addNew = () => {
        // ab sub zrori hn deni hn tbi error jay ga
        // question mark ka use r ! is ka use ya choty choty bht kam k hn dono r .... dots spread opertor r data types conversions
        // m pani pee lon ata hn
        //  tm isay daikho zra ok ok 
        // ab erro day raha hy kyn k test ko m ny optional khtam kr dia ab object bnaty wqt dena zrori hy wrnra error
        let ob: myframework = { // ya sub abi zrori hn proeprties deni ab shak daalon ga to ya kahy ga ok hy erro chla jay ga
            srNo: data.length + 1,
            // srNumber:srNumber, // ya wahan ni hy define data type of object jo di myframework ki
            name: name,
            fee: fee! // || or | ya dono mean hta or condtion ya kah raha hy ya number ya undefined data number ko assign ni ho satii hy
            // isay shak hy k shaid undefined na ho ya to eror na ay tbi phr hm fee k sath ! ya lga den gy jb isay shaq ho 
            // hm kahty no objection ya signn hta no probelm tm set kr do na tension lo no objection no problem means phr ya maan jata r set
            // kr det hy
            // mujy smjh aa gai hai** good hy

            // ya ! bht use hta hy jb ya kahy ga ya undefined ho sakta hy to ya lga do to error chla jtata lkin ap ko pta ho k ya 
            // ya define ho ga aksar ya smjhta shaid undefined ho agr hm inital state na den ya wesy kbi ay k ya undfiend ho sta hy to ya lga dia 
            // r object ki property access krty hwy question mark agr ya kahey undefined hy to 
            // ya bad m video daikh lena smjh a jay ge 
        }
        ob.test?.optional  // ya is ny access krty wqt khud question mark lga dia tha kyn k m ny kaha hy ya option hy
        // ya error s smjhny ab a jaen gy jb kam kro ge data types r ya undfiend r optional k bht aty hn

        // ** g easy b hai ho jay ga    smjh aa rai mujy mn dykh ri sath sath sath prhti jari
        // chlo si hy abi ya structur r flow ki understanding hy ya clear to phr code krna easy ho ga

        // ya kah raha hy possibly undefined kyn k question define krty wqt lgaya tha ab yahan bhi lgana pery ga tb si hoga
        // jb hm o[tional waly ko ki agy koi prperty access krny lgen to question mark lgaty hn ta k erro rna ay]
        setData([...data, ob]); // ya array m push ho raha phly pta ni idea thaya ni ab to ho gea na array m push krny ka spread operator sygb
        // ab pta chl giya
        setName("");
        setFee(Number);
    }
    // const firstf = ()
    // lets say m 1 funciton bnata yahan r ya set state ko m us funciton m set krwata kam wohe hoga lkin bs dikah raha aisay kr sakty
    //]
    const setnumbernow = (value: string)=>{
        setsrNumber(Number(value)); // bhi same hy bs hm ny agry function apny ko pass kr di value r us ny agy set state waly ko data day dia
        // ya m bna raha aj kal yahe framework use krty ya bni ya daikho full site bn jati ache si is m
        // wahhh ye is ka name kia tha
        // secuirty lgai hy wo code hta jo no p ata wo dena hta
        // abi designer ny design bnaya to m kr raha is ko sara change is m rate change ho raha pair change ho raha sighnup login kr dia m ny
        // ab jo use rorder ki amout day wo submit rkwani mera kam
        // user k orders show krwany nechy chart ko update krna 
        // user k orger lgany p balance ko udpate krna real time
        // tabs change krny p form ko according ly show krwana mera kam 
        // m ny sara funcitonal krna hta abi kuch chezen static m aj kal is ko sra kr raha si
        //    bht acha bna hwa vip excellent**
    }

    return (
        <>

            <h1> Student data </h1> <br /><br /> <br />
            <h3>srNo</h3>
            <input type="text" id='firstinput' value={srNumber} onChange={event => setnumbernow(event.target.value)} />
            {/* ya errr bta raha hy k ya functin data type number accpet krna chah rha hy r ap string day rhy ho to hm ata type convert kr k send kr kren g
            function ko */}
            <h3>Add name</h3>
            <input type="text" id='secondInput' value={name} onChange={event => setName(event.target.value)} /> <br /><br />
            <h3>Add fee</h3>

            <input type="text" id='thirdInput' value={fee} onChange={event => setFee(Number(event.target.value))} /> <br /><br />
            <button onClick={addNew}>Add button </button> <br /><br />


            <table border={3}>
                <tbody>
                    <tr>
                        <th>sr.No</th>
                        <th>name</th>
                        <th>fee</th>
                    </tr>
                    {data.map(item => (
                        <tr key={item.srNo}>
                            <td>{item.srNo}</td>
                            <td>{item.name}</td>
                            <td>{item.fee}</td>
                        </tr>
                    ))}

                </tbody>
            </table>


        </>
    )

}

