import { Container } from '@material-ui/core'
import React from 'react'
import NewsCrad from '../newscard/NewsCrad';
import './NewsContent.css';
const NewsContent = ({newsArray, newsResults, loadMore, setLoadMore }) => {
    return (
        <Container maxWidth="md">
            <div className='content'>
                <div className='downloadMessage'>
                    <span className="downloadText">
                        Vnews for the Best News
                    </span> 
                </div>

                {
                    newsArray.map((newsItem) => (
                        <NewsCrad newsItem={newsItem} key={newsItem.title} />
                    ))
                }
                {
                    loadMore <= newsResults && (
                        <>
                        <hr />
                        <button className='loadMore'
                        onClick={() => setLoadMore(loadMore + 20)} >LoadMore   
                        </button>
                        </>
                    )
                }             
            </div>

        </Container>
    )
}

export default NewsContent
