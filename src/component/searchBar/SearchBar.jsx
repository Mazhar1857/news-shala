import React, { useEffect, useRef, useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import './searchBar.css'
import { useSelector } from 'react-redux';

const SearchBar = () => {
    const theme = useSelector(state => state.theme)
    const searchInput = useSelector(state => state.search)
    const [activeSearch, setActiveSearch] = useState('');
    const [input, setInput] = useState('')
    const inputRef = useRef(null);
    const iconRef = useRef(null);

    const handleSearch = () => {

        if (input) console.log(input);

        setActiveSearch((pre) => {
            return pre === 'active' ? '' : 'active'
        })

    }

    const handleInput = (e) => {
        const value = e.target.value;
        setInput(value);
    }

    useEffect(() => {
        activeSearch === 'active' ? inputRef.current.focus() : inputRef.current.blur();
    }, [activeSearch])


    useEffect(() => {
        const closeInput = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target) && !iconRef.current.contains(e.target)) {
                setActiveSearch('');
            }
        }
        document.addEventListener('mousedown', closeInput);

        return () => {
            document.removeEventListener('mousedown', closeInput);
        };

    })



    return (
        <div className='search-bar'>
            <div ref={iconRef} className={`search-icon ${theme.toLowerCase()} ${activeSearch}`} onClick={handleSearch}>
                <IoSearchSharp color={theme === 'Light' ? 'black' : 'white'} />
            </div>
            <div className={`search-input ${theme.toLowerCase()}`} >
                <input type="text" ref={inputRef} value={input} onChange={handleInput} />
            </div>
        </div>
    )
}

export default SearchBar
