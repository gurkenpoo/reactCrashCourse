import { useState } from "react";
import { MovieShow } from "./MovieShow";
import { Movie } from "./types/Movies";

interface MoviesProps{
    movies: Movie[];
}

export function Movies({movies}: MoviesProps){
    const [search, setSearch] = useState("");
    if(!movies) return <p>Error no viene movies</p>

    function onChange(a:any) {
        console.log(a)
    }
    return <div>
        <p>Hay, {movies.length} movies</p>
        <input placeholder= "buscar..." onChange={onChange} type="text" />
        <ol>{movies.map(m => <MovieShow key={m.id} movie={m} />)}</ol>
    </div>

}