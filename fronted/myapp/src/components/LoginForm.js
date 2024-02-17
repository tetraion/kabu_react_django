import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loggedInUsername, setLoggedInUsername] = useState(''); // 新しい状態変数を追加

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username,
                password
            });
            console.log(response.data);

            if (response.data.username) {
                setLoggedInUsername(response.data.username); // ログイン成功時にユーザー名を設定
            }
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
        <div>
            {loggedInUsername ? (
                <div>
                    <p>Welcome, {loggedInUsername}!</p> {/* ログインしているユーザー名を表示 */}
                    <button onClick={() => setLoggedInUsername('')}>Logout</button> {/* ログアウトボタン */}
                </div>

                
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {errorMessage && <div>{errorMessage}</div>}
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
};

export default LoginForm;
