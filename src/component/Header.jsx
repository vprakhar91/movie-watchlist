import { useContext } from "react";
import { Link, useLocation} from "react-router-dom";
import { MoviesContext } from "../MoviesContext";

function Header() {
    const location = useLocation()
    const {searchedMovie} = useContext(MoviesContext)

    return (
        <header>
            <nav  className="container">
                <Link 
                    to={`/?m=${searchedMovie}`}
                    className={location.pathname === "/watchlist" ? "header--small" : "header--title"}
                >
                    <p>
                        {location.pathname === "/watchlist" ? "Search for movies" : "Find your film"}
                    </p>
                </Link>
                <Link 
                    to="watchlist" 
                    className={location.pathname === "/watchlist" ? "header--title": "header--small"}
                >
                    <p>My Watchlist</p>
                </Link>
            </nav>
        </header>
    )
}

export default Header