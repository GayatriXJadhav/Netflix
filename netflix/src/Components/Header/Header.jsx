import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Header = () => {
    console.log(logo);
    return (
        <nav className="header">
            <img src={logo} alt="logo" />
            <div>
                <Link to="/tvshows">Tv shows</Link>
                <Link to="/tvshows">Movies</Link>
                <Link to="/tvshows">Recently Added</Link>
                <Link to="/tvshows">MyList</Link>
            </div>
            <FaSearch />
        </nav>
    );
};

export default Header;
