"use client";
import Link from 'next/link';
import React from 'react';
import Currency from './currency/page';
// React class is importing here
export default function Home() {
  let [data, setData] = React.useState<{ id: number, name: string, Symbol: string }[]>([{ id: 1, name: "Ainee", Symbol: "mole on chin" }])
  const [data1, setData1] = React.useState<any[]>(['ab', 'bc']);    // ok hai smjh a ge ab si data types ki
  // gg aa gai hai
  //  ab baqi kl krty hein
  const [data3, setData3] = React.useState<string>('i m inital data of data 1 variable');
  // agr state change krnca chahen to ya state k functions use hn gy jo k setData r setData1 k anme sy hn
  // agr in ko all ni kro ge data show ni ho ga kbi
  // ya state k function 1 value lty hn hmesha jo set krwani ho
  // setData3 function is blue because we are not using it in our code just we define it
  //after usestate <any> is datatype of this vaiable i set it to any 
  // jesy js m

  // ya data 1 variabel jo html m use ho ga aisay vairable wo hm likhty hn jo html m show krwany hn
  // setData us data variabl m changes krny k lea use hta hy us ko st krwany k lea
  // '' React.usestat4e is lea likha k data k andar start m value kia ho ge
  // is trah hm kai r variable bna sakty hn
  // react jo hy ya oper imprt hwa hy ya 1 class hy framework us k andar usestate 1 function hy
  // r react class ko hm ny import kahan p kia hy sub sy oper jo bhi function ya class import krni hti hy ya use krni hti hy wo hm
  // sub sy oper import krty hn

  // return sy phly functions hm likhty hn jo hm html m use krny hty hn
  const myfn = () => {
    let mydt = [...data];
    mydt.push({ id: mydt.length + 1, name: 'dummy', Symbol: 'any symbol' });
    console.log('myfn called');
    // data = mydt;
    //  ab m is ko js k zarye set krwa k daikhty bina state functions k use kia
    setData(mydt)
    // ab coment krny p kuch ni ho raha tha chagne and m wesy jesy js m set krty thy wesy krwa k daikhta equal sy
    // console.log()
  }
  // ya return ka function sub sy end p hta hy jo k html ko reutnr krta hy
  // ya is m tm apni wohe html sub likh sakti ho easily 
  return (
    <>
      {/* data 1 value shown here in h3 which i set in default value */}
      {/* <Currency/> */}
      <h3>{data1}</h3>
      <button onClick={() => { myfn() }}>add new</button>
      <table border={58}>
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>symbol</th>
          </tr>
          {data.map(dt => {
            return (<tr>
              <td>{dt.id}</td>
              <td>{dt.name}</td>
              <td>{dt.Symbol}</td>
              {/* // i mistakenly type syol splinng wrong then red line */}
            </tr>)
          })}
        </tbody>
      </table>
      <Link href={"/currency"}> go to currency</Link>
      <h2>my first heading of next js this home compoent i just save  </h2>
     

    </>
  )
}
