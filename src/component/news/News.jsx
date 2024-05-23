import React, { useEffect } from 'react';
import NewsItem from '../newsItem/NewsItem';
import data from '../../data.json';
import './news.css'
import { useDispatch, useSelector } from 'react-redux';
import { newsAction } from '../../store/newsSlice';


const News = () => {
    const news = useSelector(state => state.news.news);
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(newsAction.newsFetch())
    },[category])
    return (
        <div className='news'>
            {news['results'] && news['results'].map(item => {
                return <NewsItem
                    key={item['article_id']}
                    pubDate={item['pubDate']}
                    link={item.link}
                    image={item['image_url']}
                    title={item['title']}
                    srcUrl={item['source_url']}
                    srcIcon={item['source_icon']}
                    srcId={item['source_id']}
                />
            })}
        </div>
    )
}

export default News
