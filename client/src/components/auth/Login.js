import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';


const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { email, password } = formData;

    const onChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <>
            <h1>Sign In<span class="badge bg-secondary"></span></h1>
            <p className='lead'>
                <i className='fa fa-user'></i> 
                Sign Into Your Account<span class="badge bg-secondary"></span>
            </p>
            <form className='card' onSubmit={(e) => onSubmit(e)} style={{width:400}}>
                <div className='card-body'>
                    <input type='email' name='email' value={email} placeholder='Email Address'
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <div className='card-body'>
                    <input type='password' name='password' value={password} placeholder='Password'
                        onChange={(e) => onChange(e)} minLength='6'
                    />
                </div>
                <input type='submit' value='Login' style={{width:200}}/>
            </form>
            <p className='my-1'>
                Don't have an account? <Link to='/register'>Sign Up</Link>
            </p>
        </>
    );
};


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
