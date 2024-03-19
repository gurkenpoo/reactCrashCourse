import { Movie } from "./types/Movies"

type MovieShowProps = {
    movie : Movie
}

export function MovieShow({movie} : MovieShowProps){

    return <li>{movie.title}</li>
}