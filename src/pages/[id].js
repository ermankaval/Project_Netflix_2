import React, { useState } from 'react'
// import { getSession,useSession } from "next-auth/react"
import MovieDetails2 from '@/components/MovieDetails2'

const MovieDetailPage = ({ movie }) => {

  // const {data:session} = useSession()
  const [showPlayer, setShowPlayer] = useState(false)
  const trailerIndex = movie.videos.results.findIndex(element => element.type === "Trailer")
  const trailerURL = `https://www.youtube.com/watch?v=${movie.videos?.results[trailerIndex]?.key}`;


  return (
    <div>
      <MovieDetails2 
      movie={movie} 
      showPlayer={showPlayer}
      setShowPlayer ={setShowPlayer} 
      trailerURL={trailerURL} />
    </div>
  )
}

export async function getServerSideProps(context) {
  // const session = await getSession(context)
  const { id } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`
  ).then((response) => response.json());

  return {
    props: {
      // session,
      movie: request,
    },
  };
}

export default MovieDetailPage
