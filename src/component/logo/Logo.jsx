import React from 'react'
import './logo.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Logo = () => {
    const theme = useSelector(state => state.theme)
    return (
        <div className={`logo ${theme.toLowerCase()}`}>
            <Link to='/business'>
                <h1><div>News</div><div>Shala</div></h1>
            </Link>
        </div>
    )
}

export default Logo
