import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Login.css'
import { useLocation,useHistory } from 'react-router-dom';
const Login = () => {
    const { signInUsingGoogle, signInUsingFB } = useAuth();
    const location =useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
   
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_url);
        })
    }
    return (
        <div className='login-form'>

            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
            <h2>Please Login</h2>
                <input placeholder='Your Name' {...register("name", { required: true })} />
                {errors.name && <span className='error'>This field is required</span>}
                <input placeholder='Your Email Address' {...register("email", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                <input type="submit" />
                <br />
                <button className='btn btn-warning ms-1' onClick={handleGoogleLogin}>Google sign in</button>
                <button className='btn btn-primary ms-2' onClick={signInUsingFB}>Facebook Sign In</button>
                <br />
                <p>New to MediCare? <Link to="/register">Create Account</Link></p>
            </form>
        </div>





        // <div>
        //     <h2>Please Login</h2>
        //     <button onClick={signInUsingGoogle}>Google sign in</button>
        //     <br />
        //     <Link to="/register">New User?</Link>
        //     <button onClick={signInUsingFB}>Facebook Sign In</button>
        // </div>
    );
};

export default Login;