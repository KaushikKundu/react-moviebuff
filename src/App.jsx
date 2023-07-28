import { fetchMovies } from "./services/movieservices";
import "./App.css";
import Movielist from "./components/Movielist";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";

function App() {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }
  return (
    <div className="App">
      <div className="heading">
        <h1>Movie Facts</h1>
        <p>Discover all facts about your favourite films and series</p>
        <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Ex:Guardians of the Galaxy.."
          onChange={handleSearch}
          />
          <button type="submit">Search</button>
          </form>
      </div>
      <Movie data={movies} />
    </div>
  );
}

export default App;
