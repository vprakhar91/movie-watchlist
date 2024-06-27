import { useContext} from "react"
import { Link } from "react-router-dom"
import Movie from "../component/Movie"
import { MoviesContext } from "../MoviesContext"

function Watchlist() {
    const {watchlist,searchedMovie} = useContext(MoviesContext)
    const watchlistElements = watchlist.map(movie => <Movie key={movie.imdbID} movie={movie}/>)

    return (
        <main className="container">
            {
                watchlist.length > 0 ? 
                watchlistElements : 
                <div className="movies--no-data">
                    <p>Your watchlist is looking a little empty...</p>
                    <div className="watchlist--add-movies">
                        <Link to={`../?m=${searchedMovie}`}>
                            <i className="ri-add-circle-fill" />
                        </Link>
                        <p>Lets add some movies!</p>
                    </div>
                </div>
            }
        </main>
    )
}
export default Watchlist