import React  from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Special from './pages/Special'




function App() {
  return (
          <div>
            <BrowserRouter>
              <Routes>
                <Route path ='/Login' element= {<Login/>}/>
                <Route path ='/Register' element= {<Register/>}/>
                <Route path ='/*' element= {<Special/>}/>
                </Routes>
            </BrowserRouter>
        </div>
  )
}

export default App
