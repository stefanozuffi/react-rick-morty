import { BrowserRouter, Route, Routes} from "react-router-dom"
import DefaultLayout from "./assets/layout/DefaultLayout"
import HomePage from "./assets/pages/HomePage"
import Characters from "./assets/pages/Characters"
import Character from "./assets/pages/Character"
import About from "./assets/pages/About"


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/characters/:id" element={<Character/>}/>
            <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
      
  </BrowserRouter>
  )
  
}

export default App
