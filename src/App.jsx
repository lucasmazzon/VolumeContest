import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { ContextProvider } from './Context/Context'
import { Context } from './Context/Context'
import VolumeContest from './VolumeContest'








const  App = () => {

  return (
    <>
            <BrowserRouter>
        <ContextProvider>


                            <div  className={`mt-0  h-full `}>
                                <Routes>
                                    <Route path='/' element={<VolumeContest />} />
                                </Routes>
                                
                            </div>
        
        </ContextProvider>
            </BrowserRouter>
    </>
  )
}


export default App