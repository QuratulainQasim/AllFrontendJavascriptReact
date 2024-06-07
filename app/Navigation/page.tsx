"use client"
import { myframework } from '@/helpers/interface';
import React, { useState } from 'react';
import { parse } from 'path';
import NavigationBar from '../components/inputData/navvv/navigationBar';

import Alldepartments from '../Alldepartments/page';
import MedicalCare from '../MedicalCare/page';
import AmazonBasic from '../homeAndKitchen/page';
import NavMenu from '../navigation2/navMenu';
import Gnavigation from '../gNav/gnavigation';
import NewProject from '../newProject/page';

import GiftIdeas from '../GiftIdeas/page';
import ExclusiveCollections from '../ExclusiveCollections/page';
import Ecomform from '../Ecomform/page';
import Treasures from '../components/eComWeb/treasures';





const Framework = () => {
  return (
    <>
      {/* <NavigationBar /> */}
      {/* <Alldepartments />
      <MedicalCare />
      <AmazonBasic/> */}
     

      {/* <NavMenu /> <br /><br /> */}
      {/* <Gnavigation/> */}
    

      {/* <NewProject />
      {/* <GiftIdeas/> */}
      {/* <ExclusiveCollections/> */}

      <Treasures/>
      {/* <Ecomform/> */}
      
     
    </>
  )
}
export default Framework;