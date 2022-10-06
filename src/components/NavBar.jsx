import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <div className="navbar">
            <div>
                <Link to="/">

                <h1>Maktaba Library App</h1> 

                </Link>
            </div>
            <div>
                <Link to="/favorites">
                    <h3>Your Favorites</h3>
                </Link>
            </div>

            <div>
                 <Link to="/blog">
                 <h3>Blogs</h3>
                </Link>
                </div>

            <div>
                <Link to="/contactus">
                 <h3>About Us</h3>
                </Link>
            </div>
        </div>
    );
}; 

export default NavBar