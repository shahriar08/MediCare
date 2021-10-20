import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Login.css'
import { isEmpty } from "lodash";
import { useLocation, useHistory } from 'react-router-dom';
const Login = () => {
    const { signInUsingGoogle, signInUsingFB, signInUsingForm, user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const {
        register,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    const handleGoogleLogin = () => {
        signInUsingGoogle()
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
            {/* <form onSubmit={signInUsingForm}>
                <input type="email" name="email" id="" placeholder="Your Email" /> <br />
                <input type="password" name="password" className="my-2" id="" placeholder="Your Password" /> <br />
                <button className="btn-danger my-2" type="submit">Submit</button> <br />
                <button onClick={signInUsingGoogle} className="btn-primary my-2" type="button">
                    {" "}
                    Google SignIn{" "}
                </button>{" "}
                <button type="button" className='btn btn-warning ms-1' onClick={handleGoogleLogin}>Google sign in</button>
                <button type="button" className='btn btn-primary ms-2' onClick={signInUsingFB}>Facebook Sign In</button>
                <br />
                <Link to="/register">New User ?</Link> <br /> <br />
            </form> */}
            <form className='shipping-form' onSubmit={signInUsingForm}>
                <h2 className='mt-5'>Please Login</h2>
                <input placeholder='Your Email Address' {...register("email", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                <input placeholder='Password' {...register("password", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                <input type="submit" />
                <br />
                <button type="button" className='btn btn-warning ms-1' onClick={handleGoogleLogin}>Google sign in</button>
                <button type="button" className='btn btn-primary ms-2' onClick={signInUsingFB}>Facebook Sign In</button>
                <br />
                <p className='footer-bottom mt-2'>New to MediCare? <Link to="/register">Create Account</Link></p>
            </form>
        </div>

    );
};

export default Login;