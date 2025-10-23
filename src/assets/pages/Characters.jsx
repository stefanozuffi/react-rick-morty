import { useContext, useEffect, useState } from "react"
import CharacterCard from "../components/CharacterCard"
import axios from "axios"
import FavouriteCTX from "../context/FavouritesCTX"

export default function Characters() {
  const { characters, handleFetch, currentPage } = useContext(FavouriteCTX)

  useEffect(()=> {
    handleFetch()
  },[currentPage])

  return (
    <>

    

    <main>
      <div className="container jumbotron p-5 mb-4 rounded-3">
        <div className="container-fluid py-5">
          <h2 className="display-5 fw-bold">Rick and Morty</h2>
          <p className="col-md-8 fs-4">
            Rick and Morty is a popular animated sci-fi comedy series that follows the adventures of an eccentric scientist, Rick Sanchez, and his good-hearted but easily influenced grandson, Morty Smith. Together, they explore bizarre dimensions, encounter strange creatures, and navigate the complexities of family life.
          </p>
          <div className="jumbo-buttons d-flex gap-3">
                
              <button className="btn btn-dark" onClick={
                  () => {
                    if (currentPage > 1 ) {
                      setCurrentPage(currentPage - 1)
                      
                    }} 
                  }>
                {'< Previous Page'}
              </button>
              <button className="btn btn-dark" onClick={
                  () => {
                    setCurrentPage(currentPage + 1)
                    
              }}>
                {'Next Page >'}
              </button>
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