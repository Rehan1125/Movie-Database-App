import { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://dummyapi.online/api/movies");

      setMovies(await response.json());
      console.log(setMovies);
    } catch (error) {
      console.log("my error is " + error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  // useEffect(() => {
  //   axios.get("https://dummyapi.online/api/movies")
  //     .then((response) => setMovies(response.data));
  //   console.log(response);

  // }, [])

  return (
    <>
    <h1 style={{textAlign: "center"}}>Movie List</h1>
    
      <div className="MovieList">
        {movies.map((data) => {
          const { id, movie, rating, image, imdb_url } = data;
          return (
            <div className="Card" key={id}>
              <h2>{movie}</h2>
              <img src={image} alt={movie} />
              <p>Rating: {rating}</p>
              <a href={imdb_url} target="_blank" rel="noopener noreferrer">View on IMDb</a>
            </div>
          );
        })}
      </div>
      </>
    );

  
}

export default App;

