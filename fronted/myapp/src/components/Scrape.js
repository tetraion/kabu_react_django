import React, { useState } from 'react';
import axios from 'axios';

const Scrape = async (event) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loggedInUsername, setLoggedInUsername] = useState('');
    try{
        const response = await axios.post('http://localhost:8000/api/register/', {
            username,
            password
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            setErrorMessage('Invalid username or password');
        } else {
            console.log('Error', error.message);
        }
    };
    
    

    return (
        <div>
            <p>test</p>
            <p>Welcome, {loggedInUsername}!</p>
        </div>
        
    );
};

export default Scrape;