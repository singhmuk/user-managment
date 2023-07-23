import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';


const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' });
    const { name, email, password, password2 } = formData;

    const onChange = (e) =>{
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({ name, email, password });
        }
    };

    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <Fragment>
            <h1>Sign In<span class="badge bg-secondary"></span></h1>
            <p className='lead'>
                <i className='fa fa-user'></i> Create Your Account
            </p>
            <form className='form' onSubmit={(e) => onSubmit(e)} style={{width:400}}>
                <div className='form-group'>
                    <input type='text' name='name' value={name} placeholder='Name'
                        onChange={(e) => onChange(e)}
                        // required
                    />
                </div>
                <div className='form-group'>
                    <input type='email' name='email' value={email} placeholder='Email Address'
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input type='password' name='password' value={password} placeholder='Password'
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input type='password' name='password2' value={password2} placeholder='Confirm Password'
                        onChange={(e) => onChange(e)}
                        // minLength='6'
                    />
                </div>
                <input type='submit' className='btn btn-primary' value='Register' />
            </form>
            <p className='my-1'>
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </Fragment>
    );
};


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
