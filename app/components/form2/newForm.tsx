import { myframework } from '@/helpers/interface';
import React, { useState } from 'react';

import Secondform, { ThirdOne } from '../secondform/secondform';
import './style.css';

const Newform = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState<any[]>([]);

    const submitForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); 

        const newEntry = { email: email, password: password };
        setAllEntry([...allEntry, newEntry]);
        console.log(newEntry);
    };

    const ButtonClick = () => {
        console.log("Button Clicked!");
    };

    return (
        <>
            <h2 className='heading'>Second login form</h2>
            <form onSubmit={submitForm}>
                <div className='form-box'>
                    <br />

                    <label htmlFor="email" className='email'>Email</label> <br /><br />
                    <input
                        type="text"
                        name='email'
                        id='email'
                        autoComplete='off'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    /> <br /><br />

                    <label htmlFor="password" className='password'>Password</label> <br /><br />
                    <input
                        type="password"
                        name='password'
                        id='password'
                        autoComplete='off'
                        value={password} // Use the state variable as the value
                        onChange={(e) => setPassword(e.target.value)}
                    /> <br /> <br />
                    <button type='submit' onClick={() => ButtonClick()}>Login</button>

                </div>
            </form>
        </>
    );
};

export default Newform;
