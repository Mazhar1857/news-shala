import React, { useEffect, useState } from 'react'
import './mobileNav.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MobileNav = () => {
    const theme = useSelector(state => state.theme)
    const [nav, setNav] = useState('close')
    const [active, setActive] = useState('business');
    const toggleNavBtn = () => {
        setNav((pre) => {
            return pre === 'open' ? 'close' : 'open';
        })
    }
    const handleActiveCategory = (category) => {
        setActive(category)
    }

    useEffect(() => {
        if (nav === 'open') {
            document.documentElement.classList.add('model-open')
            return () => {
                document.documentElement.classList.remove('model-open')
            }
        }
    })

    return (
        <>
            <div className='mobile-nav'>
                <div className={`nav ${nav} ${theme.toLowerCase()}`} onClick={toggleNavBtn}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav className={`mobile-nav-list ${nav} ${theme.toLowerCase()}`}>
                    <ul role='list' className={`${theme.toLowerCase()}`}>
                        <Link onClick={() => handleActiveCategory('general')} to='/general'><li className={active === 'general' ? 'active' : ''}>General</li></Link>
                        <Link onClick={() => handleActiveCategory('business')} to='/business'><li className={active === 'business' ? 'active' : ''}>Business</li></Link>
                        <Link onClick={() => handleActiveCategory('crime')} to='/crime'><li className={active === 'crime' ? 'active' : ''}>Crime</li></Link>
                        <Link onClick={() => handleActiveCategory('domestic')} to='/domestic'><li className={active === 'domestic' ? 'active' : ''}>Domestic</li></Link>
                        <Link onClick={() => handleActiveCategory('education')} to='/education'><li className={active === 'education' ? 'active' : ''}>Education</li></Link>
                        <Link onClick={() => handleActiveCategory('entertainment')} to='/entertainment'><li className={active === 'entertainment' ? 'active' : ''}>Entertainment</li></Link>
                        <Link onClick={() => handleActiveCategory('environment')} to='/environment'><li className={active === 'environment' ? 'active' : ''}>Environment</li></Link>
                        <Link onClick={() => handleActiveCategory('food')} to='/food'><li className={active === 'food' ? 'active' : ''}>Food</li></Link>
                        <Link onClick={() => handleActiveCategory('health')} to='/health'><li className={active === 'health' ? 'active' : ''}>Health</li></Link>
                        <Link onClick={() => handleActiveCategory('lifestyle')} to='/lifestyle'><li className={active === 'lifestyle' ? 'active' : ''}>Lifestyle</li></Link>
                        <Link onClick={() => handleActiveCategory('other')} to='/other'><li className={active === 'other' ? 'active' : ''}>Other</li></Link>
                        <Link onClick={() => handleActiveCategory('politics')} to='/politics'><li className={active === 'politics' ? 'active' : ''}>Politics</li></Link>
                        <Link onClick={() => handleActiveCategory('science')} to='/science'><li className={active === 'science' ? 'active' : ''}>Science</li></Link>
                        <Link onClick={() => handleActiveCategory('sport')} to='/sport'><li className={active === 'sport' ? 'active' : ''}>Sport</li></Link>
                        <Link onClick={() => handleActiveCategory('technology')} to='/technology'><li className={active === 'technology' ? 'active' : ''}>Technology</li></Link>
                        <Link onClick={() => handleActiveCategory('top')} to='/top'><li className={active === 'top' ? 'active' : ''}>Top</li></Link>
                        <Link onClick={() => handleActiveCategory('tourism')} to='/tourism'><li className={active === 'tourism' ? 'active' : ''}>Tourism</li></Link>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default MobileNav
