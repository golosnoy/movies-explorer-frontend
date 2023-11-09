import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './PageNotFound.css';

function PageNotFound({ hideHeaderAndFooter }) {

    const history = createBrowserHistory();

    const showHeaderAndFooter = () => {
        history.back();
        return hideHeaderAndFooter(false);
    }

    useEffect(() => {
        hideHeaderAndFooter(true);
    })

    return (
        <>
            <section className='not-found'>
                <div className='not-found__container'>
                    <div className='not-found__title'>
                        <h2 className='not-found__error'>404</h2>
                        <h4 className='not-found__text'>Страница не найдена</h4>
                    </div>
                    <Link onClick={showHeaderAndFooter} className='button button_type_to-main' to={''}>Назад</Link>
                </div>
            </section>
        </>
    )
}

export default PageNotFound