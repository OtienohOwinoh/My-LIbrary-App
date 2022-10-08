import React, {useState, useEffect} from "react";
import '../App.css'; 
import  { API_URL} from '../Api'
import axios from "axios";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";

const BookList = () => {

    const [books, setBooks] = useState([])

    const { favorites, addToFavorites, removeFromFavorites} = useAppContext();

    const navigate = useNavigate();

    console.log ("favorites are", favorites)

    const favoritesChecker =(id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;

    }


    useEffect(() =>{
        axios
        .get(API_URL)
        .then( res =>{
            console.log(res.data)
            setBooks (res.data)
        })
        .catch(err=>console.log(err))
    }, [])

    return <div className='book-list'>
            {books.map ((book)=> (
                <div key={book.id} className="book">
                    <div><h3 className="book-title">{book.title}</h3></div>
                    <div className="desc-image"><img src={book.image_url} alt="#" onClick={() => navigate (`/books/${book.id}`)}/></div>
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
            ))}
        </div>
}

export default BookList