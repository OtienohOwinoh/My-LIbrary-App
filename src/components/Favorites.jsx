import React from "react";
import '../App.css';
import { useAppContext } from "./context/appContext";

const Favorites = () => {

    const { favorites, addToFavorites, removeFromFavorites} = useAppContext();
    console.log ("favorites are", favorites)
    const favoritesChecker =(id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    }

    return(
        <div className="favorites">
            { favorites.length > 0 ? favorites.map ((book)=> (
    <div key={book.id} className="book">
        <div><h4 className="book-title">{book.title}</h4></div>
        <div><img src={book.image_url} alt="#" /></div>
        <div>
            { favoritesChecker(book.id) ? (
             <button 
             onClick={() => removeFromFavorites(book.id)}>Remove from Favorites
             </button> 
  )  : (
             <button 
             onClick={() => addToFavorites(book)}>Add to Favorites
             </button>
            
       ) }
            
        </div>
     </div>
)) : (
    <h1 className="fav-text">Please Select Your Favorite Book from the Homepage!</h1>
    
    
)}
        </div>
    );
}; 

export default Favorites