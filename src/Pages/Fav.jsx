import React from 'react'
import { useContext } from 'react'
import { CreateFavourite } from '../Context/Context'
import {Link} from 'react-router-dom'

const Fav = () => {
    const {fav} = useContext(CreateFavourite);
  return (
    <div className="fav-container">
        <h2 className="fav-heading"> Partha Thwse are The favourite Products bro added by YOU </h2>

       {fav.length === 0 ?(<p className="fav-message">Bro No Favourite Movies right noe please add</p>):(
        fav.map((favflim) =>(
            <div className="fav-card">
                <img src={favflim.Poster} alt={favflim.Title} />
                <h2>{favflim.Title}</h2>
                <h4>{favflim.Year}</h4>
                <h4>{favflim.Type}</h4>
            </div>
         ))
       )}
       <Link to='/' className="fav-back-link">Back to home</Link>
    </div>
    
    
  )
}

export default Fav
