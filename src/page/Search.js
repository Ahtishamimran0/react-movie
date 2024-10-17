import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import Navigate from '../component/Navigate'
import "./Search.scss"
function Search() {
    const { getSearchMovie, SearchMovie } = useGlobalContext()
    const { routerQuery } = useParams()
    useEffect(() => {
        getSearchMovie(`https://api.themoviedb.org/3/search/movie?query=${routerQuery}&api_key=4e44d9029b1270a757cddc766a1bcb63`)
    }, [routerQuery])
    return (
        <>
            <Navigate />
            <div className="searchContainer">
                {SearchMovie.length >= 1 ? <h1 className="Search_name"><i class="fa-solid fa-window-minimize fa-rotate-90"></i>{routerQuery}</h1> : <h1 className="Search_name"><i class="fa-solid fa-window-minimize fa-rotate-90"></i> Movie Not Found !..</h1>}
                <span className="searchTitle">Your search results: {routerQuery}</span>
                <div className='search_flex'>
                    {SearchMovie.length <= 0 ? <h1 className="errorShow"> No results Found ! <i class="fa-solid fa-triangle-exclamation" ></i></h1> : SearchMovie.map((movie) => {
                        return (
                            <Link to={`/movie/${movie.id}`} key={movie.id} style={{ margin: '0 0 1rem 1.2rem' }}>
                                <div className="search_thumbnail">
                                    {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.poster_path ? movie.title : null} loading='lazy' width='248px' height='384px' /> : null}
                                    <p>{movie.poster_path ? movie.title : null}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div >
        </>
    )
}
export default Search