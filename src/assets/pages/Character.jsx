import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { Cardio } from 'ldrs/react'
import 'ldrs/react/Cardio.css'
import FavouriteCTX from "../context/FavouritesCTX"


export default function Character() {
    const {id} = useParams()
    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(null)
    const [err, setErr] = useState(null)
    const navigate = useNavigate()

    const [pageBTNs, setPageBTNs] = useState([])
    //const navigate = useNavigate()
    const { isFavourite, toggleFav, currentPage, setCurrentPage, lastPage } = useContext(FavouriteCTX)


    useEffect(() => {
        setLoading(true)
        setErr(false)
        setTimeout( ()=> {
            fetchData(`https://rickandmortyapi.com/api/character/${id}`)
        }, 500)
        
    },[id])

    function fetchData(endpoint) {
        axios.get(endpoint)
        .then(res => {
            if (res.data.id) {
                
                setCharacter(res.data)
                setLoading(false)

            } else {
                setErr(true)
                setLoading(false)
            }
            
        }
        ).catch(err => {
            console.log(err)
            setErr(true)
            //navigate(-1)
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
        <div className ="character-wrapper d-flex flex-column align-items-center gap-4 mb-5">
        
       
            {character && !err && !loading && 
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
                                    <div className="heart-ctn mt-2" onClick={() => toggleFav(character.id)}>
                                            {!isFavourite(character.id) && <span>♡</span>}
                                            {isFavourite(character.id) && <span>❤️</span>}
                                    </div>
                        </div>
                            
                                
                            </div>
                        </div> 
                    </div>
                    </div>
            
        
                </div>}

                {
                    loading && 
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
                {
                    err && 
                <div className="error-page">
                    <h2 style={{color: 'white'}}>404: Character not Found!</h2>
                    <p style={{color: 'red'}}>The character id that was used is not existent in our database</p>
                </div>
                    
                }

            
            
        </div>
{/* Component for change of character and page*/}
            <div className="btns-ctn d-flex flex-column align-items-center justify-content-center gap-3">
                    <div className="change-char">
                            <div className="d-flex justify-content-center gap-3">
                                
                                <Link className="btn btn-primary" to={`/characters/${parseInt(id)-1}`}>
                                    {'<'}
                                </Link>
                                <Link className="btn btn-primary" to={`/characters/${parseInt(id)+1}`}>
                                    {'>'}
                                </Link>
                            </div>
                            <div className="mt-3 fst-italic">
                                <Link>
                                    {`page ${currentPage}, character n-${id}`}
                                </Link>
                            </div>
                    </div>
                    <div className="change-page d-flex gap-4 p-5">

                        <button className="btn btn-dark" onClick={
                            () => {
                                if (currentPage > 1 ) {
                                setCurrentPage(currentPage - 1)
                                
                                }} 
                            }>
                            <i className="bi bi-caret-left-fill"></i>
                        </button>

                                {/* PAGE NUMBERED BUTTONS */}


                                {/* END PAGE NUMBERED */}
                        <button className="btn btn-dark" onClick={
                            () => {
                                if ( currentPage >= lastPage ) {
                                setCurrentPage(currentPage + 1)
                                }
                                
                        }}>
                            <i className="bi bi-caret-right-fill"></i>
                        </button>
                    </div>
                    
            </div>
        </main>
    )
}