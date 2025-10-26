import {  useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import FavouriteCTX from "../context/FavouritesCTX"

export default function PageNavNoId() {
    const navigate = useNavigate()
    const { currentPage, setCurrentPage, lastPage, pageBTNs, setPageBTNs } = useContext(FavouriteCTX)

    function handlePageBtn(page) {
        setCurrentPage(page)
    }
 
    const pageRange = Array.from({ length: lastPage }, (_, i) => i+1)

    return(
        <div className="change-page d-flex gap-4 p-2">

                        <div className="caret-left d-flex gap-1">
                            <button className="btn btn-dark" onClick={
                                    () => {
                                        if (currentPage > 1) {
                                            setCurrentPage(currentPage - 1)
                                        }} 
                                    }>
                                    <i className="bi bi-caret-left-fill"></i>
                            </button>
                            
                        </div>


                                {/* PAGE NUMBERED BUTTONS */} 
                                    <div className="central-page-btns d-flex gap-2"> 
                                        {pageRange?.map((page,i) => 
                                            <button key={i} onClick={() => handlePageBtn(page)}>{page}</button> 
                                        )} 
                                    </div> 

                                {/* END PAGE NUMBERED */}

                        

                        <div className="caret-right d-flex gap-1">
                                    
                            <button className="btn btn-dark" onClick={
                                () => {
                                    if ( currentPage < lastPage ) {
                                        setCurrentPage(currentPage + 1)
                                    }
                                    
                                }}>
                                    <i className="bi bi-caret-right-fill"></i>
                            </button>
                               
                                
                        </div>
                        
            </div>
    )
}