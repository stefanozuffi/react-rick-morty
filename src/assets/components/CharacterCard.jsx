import { Link } from "react-router-dom"
import FavouriteCTX from "../context/FavouritesCTX"
import { useContext } from "react"

export default function CharacterCard({char}) {
    const { toggleFav, isFavourite } = useContext(FavouriteCTX)

    return(
        <div className="col col-sm-6 col-md-4 col-lg-3 mb-3" key={char.id}>
      
                <div className="card h-100">
                    <Link to={`/characters/${char.id}`}>
                        <img className="card-image" src={char.image}></img>
                    </Link>
                   
                    <div className="card-body p-4">
                        <h3 className="card-name mb-3">{char.name.toUpperCase()}</h3>
                        <span className={`card-text d-block badge bg-dark`}>{char.species}</span>
                        <div className="bottom-ctn d-flex justify-content-between align-items-center">
                            <span className="card-text origin mt-2 d-block">{char.origin.name}</span>
                            <div className="heart-ctn mt-2" onClick={() => toggleFav(char.id)}>
                                {!isFavourite(char.id) && <span>♡</span>}
                                {isFavourite(char.id) && <span>❤️</span>}
                            </div>
                        </div>
                        
                    </div>
                </div> 
        </div>
    )
}