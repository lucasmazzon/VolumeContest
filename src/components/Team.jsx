import React from 'react'
import { images } from '../assets'

const team = [
    {name: 'Tiago', img: `${images.tiago}`, task: 'Founder / Developer', title: 'CEO' },
    {name: 'Diego', img: `${images.diego}`, task: 'Co-Founder', title: 'CFO' },
    {name: 'Stephanie', img: `${images.Stephanie}`, task: 'Administrative Management', title: 'CAO' },
    {name: 'Fabio', img: `${images.lenny}`, task: 'Marketing /  Business Strategies', title: 'CSO' },
    {name: 'Hammad', img: `${images.hammad}`, task: 'Co-founder / Full-stack developer', title: 'CTO' },
    {name: 'Lucas', img: `${images.lukas}`, task: 'Frontend Developer', title: 'DEV' },
    {name: 'Glaucia', img: `${images.glau}`, task: 'Marketing / Designer' , title: 'CMO'},
    {name: 'Stefane', img: `${images.cleo}`, task: 'Graphic Designer', title: 'CDO' },
    {name: 'Gustavo', img: `${images.mey}`, task: 'Video Creator Animation' },
    {name: 'Jessica', img: `${images.jessica}`, task: 'Designer /Digital Marketing' },
]

const Team = () => {
  return (
    <>
    <div className=' flex flex-col justify-center items-center w-full h-full ' >
            <div className='flex flex-col justify-center items-center bg1 w-full h-full text-[white] '>
                    <div className='flex flex-col justify-center items-center mt-[90px] '>
                        <img className='w-[100px] md:w-[300px]  mt-[35px] ' src={images.logo1}/>
                        <img className='w-[100px] md:w-[130px]  mt-[35px] ml-[15px]' src={images.teamLocky}/>
                    </div>
                    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-[95%] mt-[30px] gap-[25px] mb-[50px]'>
                            {team.map((team, index) => {
                                return(
                                    <div key={index} className='flex flex-col justify-center items-center w-full h-[380px]'>
                                        <div key={index} className='flex flex-col justify-center items-center w-[95%] h-[100%] rounded-[10px] overflow-hidden border-[0.5px] border-[#d1d0d0] '>
                                                <div className=' w-[100%] ' 
                                                    style={{
                                                        background: `url(${team.img})`,
                                                        backgroundSize: 'cover', 
                                                        height: '100%',                                                        
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center'
                                                        }}
                                                >
                                                    <div className='teamPhoto teamPhoto1 flex flex-col justify-center items-center w-full h-full hover:bg-[#06545472] hover:text-[white] text-transparent'>
                                                        <div>{team.task}</div>
                                                        <div className='font-bold text-[30px]'>{team.title}</div>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col justify-center items-center w-full h-[70px] backdrop-blur-[9px] py-[40px] bg-[#f9f7fa29]'>
                                                    <strong>{team.name}</strong>
                                                    <p className='text-center'>{team.task}</p>
                                                </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                       
            </div>
    </div>
    </>  
  )
}

export default Team