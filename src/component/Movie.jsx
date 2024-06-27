import { useContext, useState } from "react"
import { MoviesContext } from "../MoviesContext"
import noImg from "/no-img.jpg"

function Movie({movie}) {
    const {watchlist, addToWatchlist, removeFromWatchlist} = useContext(MoviesContext)
    const [imgError, setImgError] = useState(false)

    const listElement = watchlist.find(item => item.imdbID === movie.imdbID) ? 
        <div className="movie--watchlist">
            <i className="ri-indeterminate-circle-fill"
                onClick={() => removeFromWatchlist(movie)}>
            </i>
            <p>Remove</p>
        </div> :
        <div className="movie--watchlist">
            <i className="ri-add-circle-fill"
                onClick={() => addToWatchlist(movie)}>
            </i>
            <p>Watchlist</p>
        </div>

    return (
        <div className="movie">
            <img src={imgError ? noImg : movie.Poster} onError={() => setImgError(true)} className="movie--poster"/>
            <div className="movie--data">
                <div>
                    <h3 className="movie--title">{movie.Title}</h3>
                    <i className="ri-star-fill"></i>
                    <p className="movie--rating">{movie.imdbRating}</p>
                </div>
                <div>
                    <p className="movie--runtime">{movie.Runtime}</p>
                    <p className="movie--genre">{movie.Genre}</p>
                    {listElement}
                </div>
                <p className="movie--plot">{movie.Plot}</p>
            </div>
        </div>
    )
}

export default Movie