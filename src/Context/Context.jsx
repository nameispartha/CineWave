import { useState } from "react";
// import { childern} from "react";
import { createContext } from "react";


export const CreateFavourite = createContext();

const TwoLogics = ({children}) => {
    const [fav, setFav] = useState([]);

    const AddFav = (Film) => {
        if (!fav.some((store)=> store.imdbID===Film.imdbID)){
            setFav([...fav, Film])
    }else {
  alert("Bro, this movie is already in your favorites! ❤️");
}
};

   return(
    <CreateFavourite.Provider value={{fav, AddFav}}>
    {children}

    </CreateFavourite.Provider>
   )


}


export default TwoLogics;


