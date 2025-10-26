import { BrowserRouter, Route, Routes} from "react-router-dom"
import DefaultLayout from "./assets/layout/DefaultLayout"
import HomePage from "./assets/pages/HomePage"
import Characters from "./assets/pages/Characters"
import Character from "./assets/pages/Character"
import About from "./assets/pages/About"
import FavouriteCTX from "./assets/context/FavouritesCTX"
import { use, useState } from "react"
import axios from "axios"


function App() {
  const [characters, setCharacters] = useState([]) //Objects list
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const [favourites, setFavourites] = useState([]) //IDs list
  const [pageBTNs, setPageBTNs] = useState([]) //Page Btns Carousel

  function handleFetch(){
    axios.get(`https://rickandmortyapi.com/api/character?page=${parseInt(currentPage)}`)
    .then((res) => {

      setCharacters(res.data.results)
      setLastPage(res.data.info.pages)
      
    })
 }


  function isFavourite(id) {
    return favourites.includes(id)
  }
 
  function addFav(id) {
    setFavourites([...favourites, id])
  }

  function remFav(id) {
    setFavourites(favourites.filter(x_id => x_id !== id))
  }

  function toggleFav(id) {
    if (isFavourite(id)) {
      remFav(id)
    } else {
      addFav(id)
    }
  }


  return(
    <FavouriteCTX.Provider value={{characters, currentPage, setCurrentPage, lastPage, setLastPage, pageBTNs, setPageBTNs, favourites, setFavourites, isFavourite, toggleFav, handleFetch}}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout/>}>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path="/characters" element={<Characters/>}/>
                <Route path="/characters/:id" element={<Character/>}/>
                <Route path="/about" element={<About/>}/>
            </Route>
          </Routes>
          
        </BrowserRouter>
    </FavouriteCTX.Provider>
  )
  
}

export default App
