import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import Movie_Card from './MovieCard';


const API_URL = 'http://www.omdbapi.com?apikey=c41da66d';

const App = () => {

    // WE'RE SETTING THE MOVIES STATE HERE
    const [movies, setMovies] = useState([]);

    // WE'RE SETTING THE SEARCH STATE HERE
    const [search_Term, setSearchTerm] = useState('');


    const search_Movies = async (title) => {
        // The Code Below Calls The API
        const response = await fetch(`${API_URL}&s=${title}`);

        // We Get The Data From The Response Here
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        search_Movies('Wednesday');
    }, []);
    


    return (
        <div className='app'>
            <h1>TYT Movie Station</h1>


            {/* THIS IS THE SEARCH SECTION OF THE WEBAPP */}
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={search_Term}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <img
                    src={SearchIcon}
                    // ALTERNATIVE('alt') TAG IS USED FOR SCREEN READERS
                    alt='search'
                    // THIS SAME ICON SERVES AS A BUTTON
                    onClick={ () => {
                            search_Movies(search_Term);
                            alert(`Finding ${search_Term.toUpperCase()} Kindly Wait, Your Response Will Be Ready Soon`);
                        }
                    }
                />
            </div>

            
            {/* 
                THIS IS THE MOVIE CONTAINER
                CHECKING THE THEIR ARE MOVIES OR NOT 
            */} 
            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {/* 
                            WE'RE MAPPING OVER MOVIES IN EACH SECTION OF THE API RESPONSE,
                            AND WE WILL RENDER A MOVIE CARD COMPONENT 
                        */}
                        {movies.map((movie) => (
                            <Movie_Card movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>Sorry, no movie found</h2>
                    </div>
                )
            }


        </div>
    );
}

export default App;
 