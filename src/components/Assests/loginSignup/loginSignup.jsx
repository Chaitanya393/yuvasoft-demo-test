import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './loginSignup.css'

const LoginSignup = () => {
    const navigate = useNavigate();
    
    
    useEffect(() => {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleLoginChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
        setError('');
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();

       
        if (loginData.email === 'user@example.com' && loginData.password === '1234') {
            const user = {
                name: 'User',
                email: loginData.email
            };
            localStorage.setItem('currentUser', JSON.stringify(user));
            navigate('/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Login</h2>

                {error && <div className="error">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginSignup