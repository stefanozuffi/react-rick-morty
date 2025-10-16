import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { Cardio } from 'ldrs/react'
import 'ldrs/react/Cardio.css'



export default function Character() {
    const {id} = useParams()
    const [character, setCharacter] = useState(null)
    const navigate = useNavigate()

    const endpoint = `https://rickandmortyapi.com/api/character/${id}`

    useEffect(() => {
        setTimeout( ()=> {
            fetchData(endpoint)
        }, 3000)
        
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
        <div className="character-wrapper">
        
       
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
                                <span className="card-text last-seen mt-2 d-block">LAST SEEN: {character.location.name}</span>
                                
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
        </div>
    )
}