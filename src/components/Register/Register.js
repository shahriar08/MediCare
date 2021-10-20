import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { isEmpty } from "lodash";

const Register = () => {

    const { signInUsingGoogle, signInUsingFB, signupUsingForm,user,error } = useAuth();
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
            <form className='shipping-form' onSubmit={signupUsingForm}>
                <h2>Please Register</h2>
                <input placeholder='Your Name' {...register("name", { required: true })} />
                <input placeholder='Your Phone Number' {...register("phone", { required: true })} />
                <input placeholder='Your Email Address' {...register("email", { required: true })} />
                <input placeholder='Password' {...register("password", { required: true })} />
                {error && <p style={{color: "red"}}>{error}</p>}
                <input className='btn btn-danger' type="submit"value="Submit"/>
                <br />
                <button type="button" className='btn btn-warning ms-1' onClick={handleGoogleLogin}>Google sign in</button>
                <button type="button" className='btn btn-primary ms-2' onClick={handleSignInUsingFB}>Facebook Sign In</button>
                <br />
                <p>New to MediCare?<Link to='/login'>Already Registered?</Link></p>
            </form>
            
        </div>

    );
};

export default Register;