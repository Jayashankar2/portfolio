import React from 'react'
import Main from './Portfolio/Main';
import Project from './Portfolio/Project';
import About from './Portfolio/About';
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom'


function App(){
  return(
    <>  
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;