import React, { memo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./PopularMovie.scss"

function Popularmovie({ getMovieApi, getTopMovie, Movie, TopRated }) {
    useEffect(() => {
        getMovieApi()
        getTopMovie()
    }, [])

    // slice Array//
    const newPopularMovie = Movie.slice(0, 16)
    const newRatedMovie = TopRated.slice(0, 20)
    return (
        <>
            <h1 className='Poster_name'><i className="fa-solid fa-window-minimize fa-rotate-90"></i>Movies</h1>
            <p className="popular_p">Watch your Favorites Movies</p>
            <div className="popular">
                <div className='flex'>
                    {newPopularMovie.map((popular) => {
                        const { title, poster_path } = popular
                        return (
                            <Link to={`/movie/${popular.id}`} key={popular.id}
                                style={{ margin: '0 0 1rem 1.2rem' }} >
                                <div className="thumbnail" key={popular.id}>
                                    <img src={`http://image.tmdb.org/t/p/original/${poster_path}`} alt={title} loading='lazy' width='248px' height='384px' />
                                    <p className='title'>{title}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <h1 className='Poster_name1'><i className="fa-solid fa-window-minimize fa-rotate-90"></i>TopRated</h1>
            <p className="rated_p"> Watch rating Movies This Time </p>
            <div className="topRated">
                <div className='flex'>
                    {newRatedMovie.map((rated) => {
                        const { title, poster_path } = rated
                        return (
                            <Link to={`/movie/${rated.id}`} key={rated.id}
                                style={{ margin: '0 0 1rem 1.2rem' }} >
                                <div className="thumbnail">
                                    <img src={`http://image.tmdb.org/t/p/original/${poster_path}`} alt={title} loading='lazy' width='248px' height='384px' />
                                    <p className='title'>{title}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default memo(Popularmovie)