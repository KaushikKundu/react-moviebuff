import React from 'react';

export default function Movie({data}){
    console.log(data.Title);

    if(!data){
        return <div>Loading..</div>
    }

    return(
        <div className="movie">
            <h2>{data.Title}</h2>
            
        </div>
    )
}