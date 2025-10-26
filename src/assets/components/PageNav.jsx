import {  useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import FavouriteCTX from "../context/FavouritesCTX"

export default function PageNav({id}) {
    const navigate = useNavigate()
    const { currentPage, setCurrentPage, lastPage, pageBTNs, setPageBTNs } = useContext(FavouriteCTX)

    useEffect(()=> {
        if (currentPage > 2 && currentPage < lastPage-1) {
            setPageBTNs([currentPage-1, currentPage, currentPage+1])
        }
        else {
            setPageBTNs([])
        }
    }, [currentPage])

    function handlePageBtn(page) {
        const diff = Math.abs(currentPage - page)

        if (currentPage < page) {
        navigate(`/characters/${parseInt(id) + 20*diff}`)
        }
        if (currentPage > page) {
        navigate(`/characters/${parseInt(id) - 20*diff}`)
        }
    }

    return(
        <div className="change-page d-flex gap-4 p-5">

                        <div className="btns-start d-flex gap-1">
                            <button className="btn btn-dark" onClick={
                                    () => {
                                        if (currentPage > 1) {
                                            setCurrentPage(currentPage - 1)
                                            navigate(`/characters/${parseInt(id)-20}`)
                                        }} 
                                    }>
                                    <i className="bi bi-caret-left-fill"></i>
                            </button>

                            <button className={`number-btn ${currentPage === 1 ? 'active' : ''}`} onClick={() => handlePageBtn(1)}> 1 </button>
                            {currentPage <= 2 && 
                                    <button className={`number-btn ${currentPage === 2 ? 'active' : ''}`} onClick={() => handlePageBtn(2)}> 2 </button>
                            }
                            
                        </div>

                        <span className="dots" style={{color:'white'}}>...</span>

                                {/* PAGE NUMBERED BUTTONS */} 
                                    <div className="central-page-btns d-flex gap-2"> 
                                        {pageBTNs?.map((page,i) => 
                                            <button className={`${currentPage === page ? 'active' : ''}`} key={i} onClick={() => handlePageBtn(page)}>{page}</button> 
                                        )} 
                                    </div> 

                                {/* END PAGE NUMBERED */}

                        <span className="dots" style={{color:'white'}}>...</span>

                        <div className="btns-end d-flex gap-1">
                            {currentPage >= lastPage-1 && 
                                    <button className={`number-btn ${currentPage === lastPage-1 ? 'active' : ''}`} onClick={() => handlePageBtn(lastPage-1)}> {lastPage-1} </button>
                            }
                            <button className={`number-btn ${currentPage === lastPage ? 'active' : ''}`} onClick={() => handlePageBtn(lastPage)}> {lastPage} </button>
                            <button className="btn btn-dark" onClick={
                                () => {
                                    if ( currentPage < lastPage ) {
                                        setCurrentPage(currentPage + 1)
                                        navigate(`/characters/${parseInt(id)+20}`)
                                    }
                                    
                                }}>
                                    <i className="bi bi-caret-right-fill"></i>
                            </button>
                               
                                
                        </div>
                        
            </div>
    )
}