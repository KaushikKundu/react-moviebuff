import { fetchMovies } from "./services/movieservices";
import "./App.css";
import Movielist from "./components/Movielist";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";

function App() {
  const [movies, setMovies] = useState({
    Title: "Guardians of the Galaxy Vol. 2",
    Year: "2017",
    Rated: "PG-13",
    Released: "05 May 2017",
    Runtime: "136 min",
    Genre: "Action, Adventure, Comedy",
    Director: "James Gunn",
    Writer: "James Gunn, Dan Abnett, Andy Lanning",
    Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
    Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
    Language: "English",
    Country: "United States",
    Awards: "Nominated for 1 Oscar. 15 wins & 60 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",

    imdbRating: "7.6",
    imdbVotes: "725,527",
    imdbID: "tt3896198",
    Type: "movie",
    Response: "True",
  });
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Movie data={movies} />
    </div>
  );
}

export default App;
