import React, {useState, useEffect} from "react";
import '../App.css'; 
import  { API_URL} from '../Api'
import axios from "axios";

const BookList = () => {

    const [books, setBooks] = useState([])


    useEffect(() =>{
        axios
        .get(API_URL)
        .then( res =>{
            console.log(res.data)
            setBooks (res.data)
        })
        .catch(err=>console.log(err))
    }, [])

    return(
        <div className='book-list'>BookList </div>
    )
}

export default BookList