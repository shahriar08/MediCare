import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle,signInUsingFB} = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>Google sign in</button>
            <br />
            <Link to="/register">New User?</Link>
            <button onClick={signInUsingFB}>Facebook Sign In</button>
        </div>
    );
};

export default Login;