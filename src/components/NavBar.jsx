import React, { useContext, useEffect, useState } from 'react'
import { images } from '../assets'
import { FaAlignJustify } from "react-icons/fa6";
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context';
import { act } from 'react';
import { k } from 'vite/dist/node/types.d-FdqQ54oU';

const navBarBTN = [
    {name: <Link to={'/'}>Home</Link>, dis: 'translate-y-[20px]'},  
    {name: <Link to={'/team'}>Team</Link>, dis: 'translate-y-[50px]'},  
    {name: <Link to={'/contact'}>Contact</Link>, dis: 'translate-y-[10px]'},  
    
  ]


const NavBar = ({setActiveMenu}) => {
    const [active, setActive] = useState()
    const location = useLocation()
    const {pathname} = location
    console.log(pathname)
    useEffect(() => {
        var paths = [
            {
            type:'/',
            value: 0
        },
        {
            type:'/team',
            value: 1
        },
        {
            type:'/contact',
            value: 2
        }]
        const isThat = paths.find(i => i.type == pathname)
        setActive(isThat.value)

    }, [])
    

 

  return (
    <div className=' flex justify-between items-center h-full mx-[30px]'>
          <div className='flex items-center w-[50%] h-full xl:w-[30%]'>
                        <img className=' h-[90%]' src={images.vetorLocky}/>

                        <img className='w-[40%] ml-[10px]' src={images.logo1}/>
          </div>
                <div className='hidden lato-regular lg:flex justify-end items-end w-full   text-[#83b245] text-[23px] lg:w-[50%] xl:w-[40%] '>
                    {navBarBTN.map((btn, index) => {

                  
                        return <button key={index} onClick={() => {setActive(index)}} className={` w-[110px] h-[35px] md:text-[16px] xl:h-[35px] xl:text-[16px]  ${active === index ? 'btn-top-active translate-y-[5px] transition duration-300 ' : 'btn-top translate-y-[30px] transition duration-300 '} `}>{btn.name}</button>
                    })}
 
                </div>

                <button onClick={() => {setActiveMenu(prev => !prev)}} className={`lg:hidden mr-[-5px] text-[25px] text-[white] `}><FaAlignJustify /></button>
    </div>
  )
}

export default NavBar