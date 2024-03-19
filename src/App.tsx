import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "./types/Movies";
import { Movies } from "./Movies";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get<Array<Movie>>("https://jsonplaceholder.typicode.com/posts").then(response => {
      setMovies(response.data);
      setLoading(false);
    }).catch((e) => {
      setError(e.message);
      setLoading(false)
    })
  }, [])
  if (loading) return <p>cargando...</p>;
  if (error) return <p>{error}</p>

  return <Movies movies= {movies!}/>
}

export default App;