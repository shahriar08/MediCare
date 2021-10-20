import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Login.css'
import { isEmpty } from "lodash";
import { useLocation, useHistory } from 'react-router-dom';
const Login = () => {
    const { signInUsingGoogle, signInUsingFB, signInUsingForm, user, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const {
        register,
    } = useForm();
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    const handleSignInUsingFB = () => {
        signInUsingFB()
            .then(result => {
                history.push(redirect_url);
            })
    }

    useEffect(() => {
        if (!isEmpty(user)) {
            let path = location.state && location.state.from && location.state.from.pathname;
            path = path ?? "/home";
            history.push(path);
        }

    }, [user]);
    return (
        <div className='login-form'>
            <form className='shipping-form' onSubmit={signInUsingForm}>
                <h2 className='mt-5'>Please Login</h2>
                <input placeholder='Your Email Address' {...register("email", { required: true })} />
                <input placeholder='Password' {...register("password", { required: true })} />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <input className='btn btn-danger' type="submit" value="Submit" />
                <br />
                <button type="button" className='btn btn-warning ms-1' onClick={handleGoogleLogin}>Google sign in</button>
                <button type="button" className='btn btn-primary ms-2' onClick={handleSignInUsingFB}>Facebook Sign In</button>
                <br />
                <p className='footer-bottom mt-2'>New to MediCare? <Link to="/register">Create Account</Link></p>
            </form>
        </div>

    );
};

export default Login;