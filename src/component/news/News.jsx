import React, { useEffect, useState } from 'react';
import NewsItem from '../newsItem/NewsItem';
import data from '../../data.json';
import './news.css'
import { useDispatch, useSelector } from 'react-redux';
import { newsAction } from '../../store/newsSlice';

const News = () => {
    const news = useSelector(state => state.news.news);
    const loading = useSelector(state => state.news.isLoading)
    const category = useSelector(state => state.category);
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const [zoom, setZoom] = useState('zoom-out');

    useEffect(() => {
        dispatch(newsAction.newsFetch())
    }, [category])


    useEffect(() => {
        const interval = setInterval(() => {
            setZoom((pre) => {
                return pre === 'zoom-in' ? 'zoom-out' : 'zoom-in';
            })
        }, 500);

        return () => {
            clearInterval(interval);
        }
    })

    const newsData = () => {
        if (typeof news === 'string') {
            return <div className='limit'>{news}</div>
        } else {
            return (<div className='news'>
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
            </div>)
        }
    }


    return (
        <>
            {loading ? (
                <div className={`loading ${zoom} ${theme.toLowerCase()}`}>
                    <div>loading...</div>
                </div>
            ) : (
                newsData()
            )}
        </>
    )
}

export default News
