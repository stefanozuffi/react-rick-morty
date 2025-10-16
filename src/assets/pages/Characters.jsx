import { useEffect, useState } from "react"
import axios from "axios"

export default function Characters() {
    const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  function handleFetch(){
    axios.get(`https://rickandmortyapi.com/api/character?page=${parseInt(currentPage)}`)
    .then((res) => {

      setCharacters(res.data.results)
      
    })
 }

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
              <div className="col col-sm-6 col-md-4 col-lg-3 mb-3" key={char.id}>
      
                <div className="card h-100">
                    <img className="card-image" src={char.image}></img>
                    <div className="card-body p-4">
                        <h3 className="card-name mb-3">{char.name.toUpperCase()}</h3>
                        <span className={`card-text d-block badge bg-dark`}>{char.species}</span>
                        <span className="card-text origin mt-2 d-block">{char.origin.name}</span>
                    </div>
                </div> 
              </div>
          )}
        </div>
      </div>
    </main>
      
      
    </>
  )
}