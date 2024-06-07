"use client"
import { myframework } from '@/helpers/interface';
import React, { useState } from 'react';
import { parse } from 'path';

import BasicForm from '../components/forms/basicForm';
import Newform from '../components/form2/newForm';
// import RegistrationForm from '../components/form3/registrationForm'
import Navebar from '../components/navebar/Navebar';
import Variables from '../Variables/variables';
import CurrencyTable from '../components/currency23/currencyTable';
import Earpods from '../components/airpods/earpods';
import Teachers from '../components/teachers/teacher';
import ToggleComponent from '../components/school/school';
import ProductList from '../components/myProduct/ProductList';
import LastForm from '../components/LprojForm/lastForm';
import Amlearn from '../components/newLearning/amlearn';
import Garage from '../components/coding/code';
import Thiscount from '../components/newCounter/thisList';
import MobileTable from '../components/mobiles/mobileTable';


// import App from '../components/navebar/app';



const Framework: React.FC = () => {
  return (
    <>
      <BasicForm />
      <Newform />
      <Navebar /> <br /><br />
      <Variables />
      <CurrencyTable />
      <Earpods />
      <Teachers />
      <ToggleComponent />
      <ProductList />
      {/* <App/> */}
      <br /><br />
      <LastForm />
      {/* <Amlearn/> */}
      <Garage/>
      <Thiscount/>
      <MobileTable/>
      <br /><br /><br /><br />
      


    </>
  )
}

export default Framework;
