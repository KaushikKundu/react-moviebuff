import React from 'react';
// import movie
const Movielist = ({data}) => {
    console.log(data);
    return ( 
        <div className="movielist">
            {data.map((movie) => ( 
                <Movie key={movie.id} movie={movie}/>
            ))}
        
        </div>
     );
}
 
export default Movielist;