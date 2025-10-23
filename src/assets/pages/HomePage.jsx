import { useContext } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import CharacterCard from "../components/CharacterCard"
import FavouriteCTX from "../context/FavouritesCTX"


export default function HomePage() {
  const { characters, favourites } = useContext(FavouriteCTX)

  return (
    <>

    

    <main>
      <div className="container jumbotron p-2 pt-5 pb-5 mb-4 rounded-3">
        <div className="container-fluid d-flex flex-column justify-content-between align-items-center g-5">
          <h2 className="display-5 fw-bold"> Rick and Morty Characters' Encyclopedia </h2>
          <p className="col-md-8 fs-4">
            Rick and Morty is a popular animated sci-fi comedy series that follows the adventures of an eccentric scientist, Rick Sanchez, and his good-hearted but easily influenced grandson, Morty Smith. Together, they explore bizarre dimensions, encounter strange creatures, and navigate the complexities of family life.
          </p>
          <div className="jumbo-button-homepage">
                
              <Link className='btn btn-dark' to='/characters'>
                Explore all the Characters!
              </Link>
          </div>
          
        </div>
        
      </div>
      
      <div className="container">
        <div className="row">
          
          
          {   
            characters.filter(char => favourites.includes(char.id)).map(
              char => 
                    <CharacterCard char={char} key={char.id}/>   
            )         
          }
        </div>
      </div>
    </main>
      
      
    </>
  )
}