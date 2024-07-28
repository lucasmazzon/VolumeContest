import React from 'react'
import { images } from '../assets';
import { Link } from 'react-router-dom';

const menuNavBar = [
  {name:<Link to={'/'}>Home</Link>},
  {name:<Link to={'/team'}>Team</Link>},
  {name:<Link to={'/contact'}>Contact</Link>},
]


const Menu = ({activeMenu}) => {
  
  return (
    <div>

        <div className={`w-full  fixed top-[90px] backdrop-blur-[5px] bg-[#17eaf1a0] z-40 transition duration-500 lg:hidden ${activeMenu ? 'translate-y-[1px] opacity-1' : 'translate-y-[-20px] opacity-0'}`} 
                        // style={{
                        //     background: `url(${images.page7ImageBG})`,
                        //     backgroundSize: 'cover'
                        // }}
                        >
            <div className='flex flex-col py-[10px]'>
                    {menuNavBar.map((btn, index) => {
                        return(
                            <button key={index} className='menuDropDown h-[45px]'>{btn.name}</button>
                        )
                    })}
            </div>
        </div>
        
    </div>
  )
}

export default Menu