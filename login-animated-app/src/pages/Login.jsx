import React from 'react';
import AnimatedLoginForm from '../components/AnimatedLoginForm';
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <h1>Welcome Back!</h1>
            <AnimatedLoginForm />
        </div>
    );
};

export default Login;