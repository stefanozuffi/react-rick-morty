import { NavLink } from "react-router-dom";

export default function AppHeader() {
    return(
        <header className="container d-flex justify-content-around p-5">
                <h5>The Characters of Rick and Morty</h5>
                <nav> 
                    <NavLink className='me-2' to='/'> HomePage </NavLink>
                    <NavLink className='me-2' to='/characters'> Characters </NavLink>
                    <NavLink to='/about'> About </NavLink>

                </nav>
            </header>
    )
    
}