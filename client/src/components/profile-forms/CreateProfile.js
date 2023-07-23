import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { createProfile } from '../../actions/profile';
import { connect } from 'react-redux';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: '',
    });
    const [displaySocialInputs, toggleSocialInputs] = useState(false);
    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram,
    } = formData;

    const onChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, history);
    };

    return (
        <>
        <h1>Create Your Profile<span class="badge bg-secondary">New</span></h1>
            <p className='lead'>
                <i className='fa fa-user'></i> Let's get some information to </p>
            <small>* = required field</small>

            <form className='form' onSubmit={(e) => onSubmit(e)}>
                <div className='form-group'>
                    <select name='status' value={status} onChange={(e) => onChange(e)} >
                        <option value='0'>* Select Professional Status</option>
                        <option value='Developer'>Developer</option>
                        <option value='Junior Developer'>Junior Developer</option>
                        <option value='Senior Developer'>Senior Developer</option>
                        <option value='Manager'>Manager</option>
                        <option value='Student or Learning'>Student or Learning</option>
                        <option value='Instructor'>Instructor or Teacher</option>
                        <option value='Intern'>Intern</option>
                        <option value='Other'>Other</option>
                    </select>
                    <small className='form-text'>where you are at in your career</small>
                </div>

                <div className='form-group'>
                    <input type='text' name='company' value={company} placeholder='Company'
                        onChange={(e) => onChange(e)}
                    />
                    <small className='form-text'>Work for</small>
                </div>
                <div className='form-group'>
                    <input type='text' name='website' placeholder='Website' value={website}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='form-text'>Could be your own or a company website</small>
                </div>
                <div className='form-group'>
                    <input type='text' name='location' placeholder='Location' value={location}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='form-text'>City & state suggested (eg. Boston, MA)</small>
                </div>
                <div className='form-group'>
                    <input type='text' name='skills' placeholder='* Skills' value={skills}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='form-text'>Please use comma separated values</small>
                </div>

                <div className='form-group'>
                    <input type='text' name='githubusername' placeholder='Github Username' value={githubusername}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='form-text'>If you want your latest repos and a Github link</small>
                </div>

                <div className='form-group'>
                    <textarea name='bio' value={bio} placeholder='A short bio of yourself'
                        onChange={(e) => onChange(e)}
                    />
                    <small className='form-text'>Tell us a little about yourself</small>
                </div>

                <div className='my-2'>
                    <button type='button' className='btn btn-light'
                        onClick={() => toggleSocialInputs(!displaySocialInputs)}
                    >
                        Add Social Network Links
                    </button>
                    <span>Optional</span>
                </div>

                {displaySocialInputs && (
                    <>
                        <div className='form-group social-input'>
                            <i className='fa fa-twitter fa-2x'></i>
                            <input type='text' name='twitter' placeholder='Twitter URL' value={twitter}
                                onChange={(e) => onChange(e)}
                            />
                        </div>

                        <div className='form-group social-input'>
                            <i className='fa fa-facebook fa-2x'></i>
                            <input type='text' name='facebook' placeholder='Facebook URL' value={facebook}
                                onChange={(e) => onChange(e)}
                            />
                        </div>

                        <div className='form-group social-input'>
                            <i className='fa fa-youtube fa-2x'></i>
                            <input type='text' name='youtube' placeholder='YouTube URL' value={youtube}
                                onChange={(e) => onChange(e)}
                            />
                        </div>

                        <div className='form-group social-input'>
                            <i className='fa fa-linkedin fa-2x'></i>
                            <input type='text' name='linkedin' placeholder='Linkedin URL' value={linkedin}
                                onChange={(e) => onChange(e)}
                            />
                        </div>

                        <div className='form-group social-input'>
                            <i className='fa fa-instagram fa-2x'></i>
                            <input type='text' name='instagram' placeholder='Instagram URL' value={instagram}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                    </>
                )}

                <input type='submit' className='btn btn-primary my-1' />
                <Link className='btn btn-light my-1' to='/dashboard'>Go Back</Link>
            </form>
        </>
    );
};


export default connect(null, { createProfile })(withRouter(CreateProfile));
