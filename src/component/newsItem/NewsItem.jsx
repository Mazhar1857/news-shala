import React from 'react';
import data from '../../data.json';
import './newsItem.css';
import { useSelector } from 'react-redux';

const NewsItem = ({ pubDate, link, image, title, srcUrl, srcId, srcIcon }) => {

    const theme = useSelector(state => state.theme);
    const date = new Date(pubDate);
    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };

    return (
        <>
            <div className={`news-item ${theme.toLowerCase()}`}>
                <a href={link} target='_blank'>
                    <img className='thumbnail' src={image} alt="" />
                    <div className='title'>{title.slice(0, 72)}...</div>
                </a>
                <div className={`pub-date ${theme.toLowerCase()}`}>
                    <div>{date.toLocaleDateString('en-IN', options)}</div>
                    <div><a href={srcUrl} target='_blank' ><img src={srcIcon} /><span>{srcId}</span> </a></div>
                </div>
            </div >
        </>
    )
}

export default NewsItem
