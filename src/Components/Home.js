import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
const movieText = 'harry'
const Home = () => {

  const [MovieData, setMovieData] = useState([])

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apiKey=69b4cbe5&s=${movieText}&type=movie`)
      .then((res) => {
        console.log(res.data)
        setMovieData(res.data.Search)
      })

      .catch((er) => {
        console.log(er)
      })
  }, [])
  return (
    <div>
      <MovieCard moviedata={MovieData} />
    </div>
  )
}

export default Home