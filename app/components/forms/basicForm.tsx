// BasicForm.tsx
import React, { useState } from 'react';
import { myframework } from '@/helpers/interface';

interface Props { }

const BasicForm: React.FC<Props> = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Perform login logic here using the entered username and password
        console.log('Logging in with:', { username, password });
    };

    return (
        <form onSubmit={handleLogin}>
           <h2>login form</h2>

            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />


            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit">Login</button>
        </form>
    );
};

export default BasicForm;
