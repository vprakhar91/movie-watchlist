import { useContext, useEffect, useState} from "react"
import { MoviesContext } from "../MoviesContext"
import Movie from "../component/Movie"
import Loading from "../component/Loading"
import { useSearchParams } from "react-router-dom"
import startExploring from "/start-exploring.svg"
import error from "/error.svg"

function Movies() {
    const [searchParams , setSearchParams] = useSearchParams({m : ""})
    const [search, setSearch] = useState(searchParams.get("m"))
    const {changeSearchedMovie, moviesList, dataError, isLoading} = useContext(MoviesContext)

    const moviesElements = moviesList.map(movie => <Movie key={movie.imdbID} movie={movie}/>)

    function handleChange(event) {
        const {value} = event.target
        setSearch(value)
    }

    function keyPress(e) {
        if(e.keyCode === 13) {
            changeSearchedMovie(search)
            setSearchParams({m : search})
        }
    }

    function handleClick() {
        changeSearchedMovie(search)
        setSearchParams({m : search})
    }

    useEffect(() => {
        changeSearchedMovie(search)
    },[])

    return (
        <main className="container">
            <div className="search">
                <div className="search--bar">
                    <i className="ri-search-line"></i>
                    <input 
                        placeholder="Search for a movie" 
                        type="text"
                        value={search}
                        onChange={handleChange}
                        onKeyDown={keyPress}
                    />
                </div>
                <button 
                    onClick={handleClick}
                    className="search--button"
                >
                    Search
                </button>
            </div>
                {moviesList.length > 0 ? 
                    moviesElements: 
                        isLoading ? 
                            <Loading /> : 
                                dataError ? 
                                    <div className="movies--no-data">
                                        <img src={error} className="movies--no-data-img"/>
                                        <p>{dataError} Please try another search.</p>
                                    </div> :
                                        <div className="movies--no-data">
                                            <img src={startExploring} className="movies--no-data-img"/>
                                            <p>Start exploring</p>
                                        </div> 
                } 
        </main>
    )
}

export default Movies



