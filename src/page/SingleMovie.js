import React from 'react'
import { useGlobalContext } from '../context/context'
import { useParams } from 'react-router-dom'
import Navigate from '../component/Navigate'
import { useEffect } from 'react'
import './SingleMovie.scss'

function SingleMovie() {
  const { id } = useParams()
  const { SingleMovie, getSingleMovie } = useGlobalContext()
  useEffect(() => {
    getSingleMovie(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63`)
  }, [id])

  const {
    title,
    poster_path,
    backdrop_path,
    overview,
    status,
    vote_average,
    genres,
  } = SingleMovie

  return (
    <>
      <Navigate />
      <div className="BOX">
        <img className='Backdrop' src={`http://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" />
        <div className="FLEX">
          <img src={`http://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
          <div className="detail">
            <p className='singletitle'>{title}</p>
            <p className='over'>{overview}</p>
            <p>{status}</p>
            <p>{vote_average}<span><i className="fas fa-star" /></span></p>

            {genres?.map((genre) => {
              return (
                <>
                  <span id='genre'> {genre.name},</span>
                </>
              )
            })}
          </div>
        </div>
      </div >

    </>
  )
}

export default SingleMovie