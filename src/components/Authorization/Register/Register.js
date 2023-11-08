// import { userContex } from "../../../contexts/CurrentUserContext";

import { React } from 'react';
import './Register.css';
import WithForm from '../../WithForm/WithForm';
import { pattern } from '../../../utils/constants';

function Register({ serverResWithError, handleRegister, ...props }) {


    return (
        <section className='register'>
            <div className='register__container'>
                <WithForm
                    className='register'
                    title='Добро пожаловать!'
                    buttonText='Зарегистрироваться'
                    authText='Уже зарегистрированы?'
                    authLinkText='Войти'
                    authLink='/signin'
                >

                    <form
                        className="register__form"
                        action="formEntrance"
                        name="formEntrance"
                    >
                        <div className='register__inputs'>
                            <label className='register__label'>Имя</label>
                            <input className='register__input register__input_user_name' value='' type='text' id='new-user-name' name='name' minLength={2} maxLength={30} required />
                            <span className='register__span'></span>

                            <label className='register__label'>E-mail</label>
                            <input className='register__input register__input_user_email' value='' pattern={pattern} type='email' id='new-user-email' name='email' required />
                            <span className='register__span'></span>

                            <label className='register__label'>Пароль</label>
                            <input className='register__input register__input_user_password' value='' type='password' id='new-user-password' name='password' required />
                            <span className='register__span'></span>
                        </div>

                        <span className='register__span'></span>

                        <button
                            className='register__form-btn-sends-register' type='submit'>
                            Зарегистрироваться
                        </button>
                    </form>
                </WithForm>
            </div>
        </section>
    )
}

export default Register