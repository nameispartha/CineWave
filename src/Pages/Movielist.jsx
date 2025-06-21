import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { CreateFavourite } from '../Context/Context';
import '../App.css'

const Movielist = ({search, sort}) => {
    const [movie, setMovie] = useState([]);
    const {AddFav} = useContext(CreateFavourite);

    useEffect(() => {
        const FetchMovieList = async () => {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?s=india&apikey=4e4d9ee9`);
                // setMovie(response.data.Sea)
                console.log(response);
                setMovie(response.data.Search);
            }catch(error){
                console.log("Some Error in the API:", (error));
            }
        }
        FetchMovieList();
    }, []);


    const FilterFlims = movie.filter((start) =>
        start.Title.toLowerCase().includes(search.toLowerCase())
        )
    .sort((a,b) => {
        if (sort ==='ascending') return a.Year - b.Year;
        if (sort ==='descending') return b.Year - a.Year;
        return 0;
    });
  return (
    <div className='movie-page'>
      <h1 className="movie-title">Partha This is The MovieList Displayed from the API</h1>
        <div className="movie-grid">
            {FilterFlims.map((EachMovie) => {
                return (
                  
                    <div key={EachMovie.imdbID}
                      className="movie-card">
                        <img src={EachMovie.Poster} alt={EachMovie.Title}  />
                        <h3>{EachMovie.Title}</h3>
                        <h4>{EachMovie.Year}</h4>
                        <h4>{EachMovie.Type}</h4>
                        <div className='threebtns'>
                        <Link to={`/details/${EachMovie.imdbID}`}><button>View Details</button></Link>
                        <Link to='/fav' ><button>Fav</button></Link>
                        <button onClick={() => AddFav(EachMovie)}>Add To Fav</button>
                        </div>
                    </div>
                  
                )
            }) }
        </div>

      {/* <Link to='/details/:id'>MovieDetails</Link> */}
    </div>
  )
}

export default Movielist
