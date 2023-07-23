import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: '',
    });

    const {
        school,
        degree,
        fieldofstudy,
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
        <>
            <h1 className='large text-primary'>Add Your Education</h1>
            <p className='lead'><i className='fas fa-code-branch' /> Add any school</p>
            <small>* = required field</small>
            <form
                className='form'
                onSubmit={(e) => {
                    e.preventDefault();
                    addEducation(formData, history);
                }}
            >
                <div className='form-group'>
                    <input type='text' name='school' placeholder='* School or Bootcamp' 
                    value={school} onChange={onChange} required
                    />
                </div>
                <div className='form-group'>
                    <input type='text' name='degree' value={degree} placeholder='* Degree or Certificate'
                        onChange={onChange} required
                    />
                </div>
                <div className='form-group'>
                    <input type='text' name='fieldofstudy' value={fieldofstudy}
                        placeholder='Field of Study' onChange={onChange}
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
                        Current School/Bootcamp
                    </p>
                </div>
                <div className='form-group'>
                    <h4>To Date</h4>
                    <input type='date' name='to' value={to}
                        onChange={onChange} disabled={current}
                    />
                </div>
                <div className='form-group'>
                    <textarea name='description' cols='30' rows='5' placeholder='Program Description'
                        value={description} onChange={onChange}
                    />
                </div>
                <input type='submit' className='btn btn-primary my-1' />
                <Link className='btn btn-light my-1' to='/dashboard'>
                    Go Back
                </Link>
            </form>
        </>
    );
};


export default connect(null, { addEducation })(AddEducation);
