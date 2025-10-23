import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { Cardio } from 'ldrs/react'
import 'ldrs/react/Cardio.css'
import FavouriteCTX from "../context/FavouritesCTX"


export default function Character() {
    const {id} = useParams()
    const [character, setCharacter] = useState(null)
    const navigate = useNavigate()
    const { isFavourite, toggleFav } = useContext(FavouriteCTX)

    const endpoint = `https://rickandmortyapi.com/api/character/${id}`

    useEffect(() => {
        setTimeout( ()=> {
            fetchData(endpoint)
        }, 500)
        
    },[id])

    function fetchData(endpoint) {
        axios.get(endpoint)
        .then(res => {
            console.log(res.data)
            setCharacter(res.data)
            }
        ).catch(err => {
            console.log(err)
            navigate(-1)
        }
            )
    }

    return(
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
        <div className="character-wrapper d-flex flex-column align-items-center gap-4 mb-5">
        
       
                {character && 
            <div className="container character">
                <div className="row">
                    <div className="col mb-3" key={character.id}>
                        
                        <div className="card h-100">
                            <img className="card-image" src={character.image}></img>
                            <div className="card-body p-4">
                                <h3 className="card-name mb-3">{character.name.toUpperCase()}</h3>
                                <span className={`card-text d-block badge bg-dark`}>{character.species}</span>
                                <span className="card-text origin mt-2 d-block">{character.origin.name}</span>
                                <div className="bottom-ctn d-flex justify-content-between align-items-center">
                                    <span className="card-text last-seen mt-2 d-block">LAST SEEN: {character.location.name}</span>
                                    <div className="mt-2" onClick={() => toggleFav(character.id)}>
                                            {!isFavourite(character.id) && <span>♡</span>}
                                            {isFavourite(character.id) && <span>❤️</span>}
                                    </div>
                        </div>
                            
                                
                            </div>
                        </div> 
                    </div>
                    </div>
            
        
                </div>
                }
                {
                    !character && // Default values shown
                <div className="loading">
                    <Cardio
                      size="100"
                      stroke="4"
                      speed="2"
                      color="white" 
                    />
                    <h5>...Loading</h5>
                </div>
                    
                }

            <div className="d-flex gap-3">
                
                <Link className="btn btn-primary" to={`/characters/${parseInt(id)-1}`}>
                    {'<'}
                </Link>
                <Link className="btn btn-primary" to={`/characters/${parseInt(id)+1}`}>
                    {'>'}
                </Link>
            </div>
        </div>
        </main>
    )
}