import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Create Account</h2>
                <form onSubmit=''>
                    <input type="email" name="" placeholder='Your Email' id="" /> <br />
                    <input type="password" name="" placeholder='Your Password' id="" />
                    <br />
                    <input type="password" name="" placeholder='Re-Enter Password' id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link> </p>
                <div>-----------or----------</div>
                <button className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;