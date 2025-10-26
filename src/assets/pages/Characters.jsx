import { useContext, useEffect, useState } from "react"
import CharacterCard from "../components/CharacterCard"
import axios from "axios"
import FavouriteCTX from "../context/FavouritesCTX"
import PageNavNoId from "../components/PageNavNoID"

export default function Characters() {
  const { characters, handleFetch, currentPage, setCurrentPage, lastPage } = useContext(FavouriteCTX)

  useEffect(()=> {
    handleFetch()
  },[currentPage])

  return (
    <>

    

    <main>
      <div className="container jumbotron p-5 mb-4 rounded-3">
        <div className="container-fluid">
          <h2 className="display-5 fw-bold mb-3">Rick and Morty</h2>
          <p className="col-md-8 fs-4 my-5">
            Rick and Morty is a popular animated sci-fi comedy series that follows the adventures of an eccentric scientist, Rick Sanchez, and his good-hearted but easily influenced grandson, Morty Smith. Together, they explore bizarre dimensions, encounter strange creatures, and navigate the complexities of family life.
          </p>
          <div className="jumbo-buttons d-flex gap-1">
              <PageNavNoId/>
          </div>
          
        </div>
        
      </div>
      
      <div className="container">
        <div className="row">
          
          
          {   
            characters.map(char => 
              <CharacterCard char={char} key={char.id}/>)
              }
        </div>
      </div>
    </main>
      
      
    </>
  )
}