import { Routes, Route } from "react-router-dom"
import Header from "./component/Header"
import Movies from "./pages/Movies"
import Watchlist from "./pages/Watchlist"
function App() {
  
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/watchlist" element={<Watchlist />}/>
      </Routes>
    </div>
  )
}

export default App