import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import { PropTypes } from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    document.title = `${capitalizeFirstLetter(props.category)}-NewsMania`;

    const updateNews = async () => {
        props.setProg(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apk}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProg(30);
        let parsedData = await data.json();
        props.setProg(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProg(100);
    }
   

    useEffect(() => {
        updateNews();
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apk}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
        setTotalResults(parsedData.totalResults);
    };
    

    let mode = props.mode;
    return (
        <>
            <h1 className="text-center" style={{ color: mode === 'light' ? 'black' : 'white', margin: "35px" , marginTop: "90px"}}> NewsMania - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner mode={mode} />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner mode={mode} />}
                style={{ overflow: 'unset' }}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem mode={mode} source={element.source.name} title={element.title ? element.title : ""} author={element.author} date={element.publishedAt} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://cdn.mos.cms.futurecdn.net/NeW7yGLqNLaYFmz8oh4bci-1200-80.jpg"} readmore={element.url} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'sports'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News