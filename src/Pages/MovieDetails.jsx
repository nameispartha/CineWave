import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import{ useParams}from 'react-router-dom';
import {Link} from 'react-router-dom'
import '../App.css'

const MovieDetails = () => {
    const [movies, setMovies] = useState('');

    const {id} = useParams();

    useEffect(() =>{
        const MovieDetails = async () => {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=4e4d9ee9`)
                setMovies (response.data);
            }catch(error){
                console.log("Error is showing in the API:"(error));
            }
        }

        MovieDetails();
    }, [id])
  return (
    <div className="details-container">
      <h1>Bro this is the MOvie Deatils Page Bro </h1>

        <div className="details-box">
         
         <img src={movies.Poster} alt={movies.Title} style={{width:'400px', height:'400px'}} />
         <h2>{movies.Title} </h2>
         <h2>{movies.Year}</h2>
         <h4>{movies.Type}</h4>
         <Link to='/'>back to home</Link>
        </div>

        
    </div>
  )
}

export default MovieDetails
