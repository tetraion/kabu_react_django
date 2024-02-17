import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username,
                password
            });
            console.log(response.data);
            // Redirect or do something on successful registration
            // For example, redirect to the login page or home page
            // history.push('/login');
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                setErrorMessage('Invalid username or password');
            } else {
                console.log('Error', error.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
