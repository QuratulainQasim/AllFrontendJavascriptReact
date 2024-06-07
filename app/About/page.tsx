"use client" 
import { myframework } from '@/helpers/interface';
import React, { useState } from 'react';
import { parse } from 'path';

import BasicForm from '../components/forms/basicForm';
import Newform from '../components/form2/newForm';
import RegistrationForm from '../components/form3/registrationForm'
import Navebar from '../components/navebar/Navebar';

const Framework: React.FC = () => {
    return (
      <>
       
        <Navebar />
        <h1>visit our site </h1> 
      </>
    )
}

export default Framework;
