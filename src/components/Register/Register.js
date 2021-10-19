import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const { signInUsingGoogle, signInUsingFB,signupUsingForm } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const {
        register,
        // handleSubmit,
        formState: { errors }
    } = useForm();

    // const onSubmit = (data) => {
    //     alert(JSON.stringify(data));
    // };

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div className='login-form'>
            <form className='shipping-form' onSubmit={signupUsingForm}>
                <h2>Please Register</h2>
                <input placeholder='Your Name' {...register("name", { required: true })} />
                {errors.name && <span className='error'>This field is required</span>}
                <input placeholder='Your Phone Number' {...register("phone", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                <input placeholder='Your Email Address' {...register("email", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                <input placeholder='Password' {...register("password", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                <input type="submit" />
                <br />
                <button type="button" className='btn btn-warning ms-1' onClick={handleGoogleLogin}>Google sign in</button>
                <button type="button" className='btn btn-primary ms-2' onClick={signInUsingFB}>Facebook Sign In</button>
                <br />
                <p>New to MediCare?<Link to='/login'>Already Registered?</Link></p>
            </form>
        </div>

    );
};

export default Register;