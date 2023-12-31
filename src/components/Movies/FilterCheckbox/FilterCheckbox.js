import { useState, useEffect } from 'react'

import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox(props) {
    const checkboxStatus = (evt) => {
        return props.checkboxStatus(!evt.target.checked);
    };

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);

    return width > breakpoint? (
        <div className="filtercheckbox">
            <div className="filtercheckbox__container">
                <div className="filtercheckbox__checkbox">
                    <input
                        className="filtercheckbox__invisible-checkbox"
                        type="checkbox"
                        onChange={checkboxStatus}
                        checked={!props.checkBoxStat}
                    />
                    
                    <span className="filtercheckbox__visible-checkbox-custom"></span>
                    <p className="filtercheckbox__title">Короткометражки</p>
                </div>
            </div>
        </div>
    )
    :
    (<div className="filtercheckbox">
            <div className="filtercheckbox__container">
                <div className="filtercheckbox__checkbox">
                <p className="filtercheckbox__title">Короткометражки</p>
                    <input
                        className="filtercheckbox__invisible-checkbox"
                        type="checkbox"
                        onChange={checkboxStatus}
                        checked={!props.checkBoxStat}
                    />
                    
                    <span className="filtercheckbox__visible-checkbox-custom"></span>
                    
                </div>
            </div>
        </div>)
}

export default FilterCheckbox;