import React from 'react';

// WE'RE CREATING A COMPONENT
const MovieCard = ({ movie }) => {

    return (
        <div className='movie'>

            <div>
                <p>{movie.Year}</p>
            </div>

            {/* THIS IS THE MOVIE IMAGE SECTION */}
            <div>
                <img 
                    // IF THE API THATS NOT PROVIDE US ANY IMAGE,
                    // THEN WE PROVIDE AN ERROR IMAGE TO THE USER 
                    // 'N/A' IS HOW THE API DECLARES MOVIES WITH NO IMAGE
                    src={ movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
                    alt={movie.Title} 
                />
            </div>

            {/* THIS IS THE MOVIE TYPE AND TITLE SECTION */}
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>

        </div>
    )
}

export default MovieCard;