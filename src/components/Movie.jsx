import React from 'react';

export default function Movie({data}){
    console.log(data);

    if(!data){
        return <div>Loading..</div>
    }

    return(
        <div className="movie">
            <img src={data.Poster} alt="movie-poster" />
            <h2>{data.Title}</h2>
            <p>Plot: {data.Plot} </p>
            <h4>Director: {data.Director}</h4>
            <h4>Rating: {data.imdbRating}</h4>
            <h4>Genre: {data.Genre}</h4>
            <h4>Awards: {data.Awards}</h4>
        </div>
    )
}