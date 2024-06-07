"use client"
import { myframework } from '@/helpers/interface';
import React, { useState } from 'react';
import { parse } from 'path';
import StudentList from '../components/students/StudentList';
import MultipleTypes from '../components/props/multipleTypes';
import Inputs from '../components/inputData/inputs';
import Counter from '../components/inputData/counter';







const Framework: React.FC = () => {
    return (
        <>

            <StudentList />
            
            <MultipleTypes/>
            <Inputs/>
            <br /><br />    
            <Counter/>
           {/* phly folder bnana ho ga file sy phly hmmm */}

        </>
    )
}

export default Framework;
