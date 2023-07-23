import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import Moment from 'react-moment';

const Experience = ({ experience, deleteExperience }) => {
    const experiences = experience.map((exp) => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className='hide-sm'>{exp.title}</td>
            <td>
                <Moment format='DD/MM/YYYY'>{exp.from}</Moment> -{' '}
                {exp.to === null ? (
                    'Now'
                ) : (
                    <Moment format='DD/MM/YYYY'>{exp.to}</Moment>
                )}
            </td>
            <td><button onClick={() => deleteExperience(exp._id)} className='btn btn-danger'>X</button></td>
        </tr>
    ));

    return (
        <>
            <h2 className='my-2'>Experience Credentials</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className='hide-sm'>Title</th>
                        <th className='hide-sm'>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </>
    );
};


export default connect(null, { deleteExperience })(Experience);
