import React, { useState } from 'react'
import './theme.css'
import { useDispatch, useSelector } from 'react-redux';
import { themeActions } from '../../store/themeSlice';

const Theme = () => {

    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme)

    const handleTheme = (e) => {
        dispatch(themeActions.toggleTheme())
    }


    return (
        <div className={`theme ${theme.toLowerCase()}`}>
            <span>{theme}</span>
            <div onClick={handleTheme}>
                <div className='slider'></div>
            </div>
        </div>
    )
}

export default Theme
