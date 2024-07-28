import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
<<<<<<< HEAD
import { ContextProvider } from './Context/Context'
import { Context } from './Context/Context'
import VolumeContest from './VolumeContest'
=======
import NavBar from './components/NavBar'
import { ContextProvider } from './Context/Context'
import { Context } from './Context/Context'
import Menu from './components/Menu'
import Test from './Pages/Test'
import Page11 from './Pages/Page11'
import { useLocation } from 'react-router'
import Team from './components/Team'
import Contact from './components/Contact'
>>>>>>> 86ed5d1faa66f7375286ad42afd128ebfa99fc9e





<<<<<<< HEAD
=======
const  App = () => {
>>>>>>> 86ed5d1faa66f7375286ad42afd128ebfa99fc9e

    const [activeMenu, setActiveMenu] = useState(false)


const  App = () => {

  return (
    <>
            <BrowserRouter>
        <ContextProvider>

<<<<<<< HEAD
                            <div  className={`mt-0  h-full `}>
                                <Routes>
                                    <Route path='/' element={<VolumeContest />} />
                                </Routes>
                                
=======

                    <div className='flex items-center w-full h-[100px] backdrop-blur-[12px] bg-[#06545472] fixed top-0  z-50'>
                        <NavBar setActiveMenu={setActiveMenu}/>
                    </div>

                        <div>
                            <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
                        </div>
                
                            <div className='mt-0 h-full '>
                                <Routes>
                        
                                    <Route path='/' element={<Home />} />
                                    <Route path='/team' element={<Team />} />                                
                                    <Route path='/contact' element={<Contact />} />                                
                                </Routes>
>>>>>>> 86ed5d1faa66f7375286ad42afd128ebfa99fc9e
                            </div>
        
        </ContextProvider>
            </BrowserRouter>
    </>
  )
}


export default App