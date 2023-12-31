import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience, history }) => {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: '',
    });

    const {
        company,
        title,
        location,
        from,
        to,
        current,
        description,
    } = formData;

    const onChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    }
        

    return (
        <Fragment>
            <h1 className='large text-primary'>Add An Experience</h1>
            <p className='lead'>
                <i className='fas fa-code-branch' /> Add any developer/programming</p>
            <small>* = required field</small>
            <form
                className='form'
                onSubmit={(e) => {
                    e.preventDefault();
                    addExperience(formData, history);
                }}
            >
                <div className='form-group'>
                    <input type='text' name='title' value={title} placeholder='* Job Title'
                        onChange={onChange} required
                    />
                </div>
                <div className='form-group'>
                    <input type='text' name='company' value={company} placeholder='* Company'
                        onChange={onChange} required
                    />
                </div>
                <div className='form-group'>
                    <input type='text' name='location' value={location} placeholder='Location'
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <h4>From Date</h4>
                    <input type='date' name='from' value={from} onChange={onChange} />
                </div>
                <div className='form-group'>
                    <p>
                        <input type='checkbox' name='current' checked={current} value={current}
                            onChange={() => {
                                setFormData({ ...formData, current: !current });
                            }}
                        />{' '}
                        Current Job
                    </p>
                </div>
                <div className='form-group'>
                    <h4>To Date</h4>
                    <input type='date' name='to' value={to} onChange={onChange} disabled={current} />
                </div>
                <div className='form-group'>
                    <textarea name='description' cols='30' rows='5' placeholder='Job Description'
                        value={description} onChange={onChange}
                    />
                </div>
                <input type='submit' className='btn btn-primary my-1' />
                <Link className='btn btn-light my-1' to='/dashboard'>
                    Go Back
                </Link>
            </form>
        </Fragment>
    );
};


export default connect(null, { addExperience })(AddExperience);
