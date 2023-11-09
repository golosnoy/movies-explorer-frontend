import { useNavigate } from 'react-router-dom';

import './Profile.css';
import { React } from 'react'
import { pattern } from '../../../utils/constants';

function Profile({ serverResWithError, handleNewUserData, onLoggedIn, ...props }) {

    const navigate = useNavigate();

    const outSite = () => {
        localStorage.clear();
        onLoggedIn(false);
        navigate('/');
    }

    return (
        <section className='profile'>

            <div className='profile__container'>

                <form className='profile__form'>
                    <div className='profile__form_container'>
                        <h2 className='profile__greeting'>{`${props.greeting}, user!`}</h2>
                        <div className='profile__form-list-inputs_container'>
                            <span className={`profile__span`}
                            ></span>
                            <div className='profile__form-input_container'>
                                <label className='profile__form-label'>Имя</label>
                                <input className='profile__form-input profile__form_user_name' name='name' id='input-name' type='text' placeholder='Ваше имя' value='' minLength={2} maxLength={30} required />
                            </div>
                            <div className='profile__form-input_container'>
                                <label className='profile__form-label'>E-mail</label>
                                <input className='profile__form-input profile__form_user_email' name='email' id='input-email' type='email' placeholder='Ваша почта' value='' pattern={pattern} required />
                            </div>
                            <span className={`profile__span`}
                            ></span>
                        </div>
                    </div>

                    <span
                        className={
                            `profile__span`
                        }
                    >
                        {/* {serverResWithError.message || waitingResponse.message} */}
                    </span>
                    <div className='profile__form-btn_container'>
                        <button type='submit' className="profile__btn profile__btn-form"
                        >{props.btnEditText}</button>
                        <button onClick={outSite} type='button' className='profile__btn profile__btn-exit'>{props.btnExitText}</button>
                    </div>
                </form>

            </div>

        </section>
    )
}

export default Profile