import React, { useContext } from "react";
import movieContext from "../context/movieContext";

const ResultCart = ({ movie }) => {
  const { watchlist, watched,addMovieToWatchlist,addMovieToWatched } = useContext(movieContext);

  const storedMovieWatched = watched.find((o) => o.id === movie.id);
  const storedMovie = watchlist.find((o) => o.id === movie.id)
  ? true
  : storedMovieWatched
  ? true
  : false;
  

  return (
    <div className="resuld-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div className="filler-poster_path"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
          <h4 className="release-ımdb">
            IMDB:{" "}
            <b>{movie.vote_average ? movie.vote_average.toFixed(1) : "-"}</b>
          </h4>
        </div>
        <div className="controls">
          <button className="btn" disabled={storedMovie} onClick={() => addMovieToWatchlist(movie)}>
            Add to WatcList
          </button>
          <button className="btn" disabled={storedMovieWatched} onClick={() => addMovieToWatched(movie)}>
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCart;
