import React, { useState } from 'react'
import { images } from '../assets'
import { FiRefreshCcw } from "react-icons/fi";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";




const ROI = [
    {
        id: 0,
        name:
    <div className='flex-col  '>
        <p><span className='flex justify-center text-[40px] lg:text-[60px] xl:text-[80px] text-[#ACD377]'>1.5%</span></p>
        <p className='text-[18px] lg:text-[26px] text-center leading-5 lg:leading-8'>ROI for a 1- month staking period</p>
        <p className='poetsen-one-regular flex justify-center items-center text-[30px]  lg:text-[70px] text-[#8fea10]'>FLEX</p>

    </div>,
        pnl:'1.5%',
        dis: 'transition duration-300 translate-x-[450px]',
    },
    {
        id: 1,
        name:
    <div className='flex-col '>
        <p><span className='flex justify-center text-[40px] lg:text-[60px] xl:text-[80px] text-[#ACD377]'>3%</span></p>
        <p className='text-[18px] lg:text-[26px] text-center leading-5 lg:leading-8'>ROI for a 1- month staking period</p>
    </div>,
        pnl:'3%',
        dis: 'transition duration-300 translate-x-[159px]',
    },
    {
        id: 2,
        name:
    <div className='flex-col '>
        <p><span className='flex justify-center text-[40px] lg:text-[60px] xl:text-[80px] text-[#ACD377]'>6%</span></p>
        <p className='text-[18px] lg:text-[26px] text-center leading-5 lg:leading-8'>ROI for a 2- month staking period</p>
    </div>,
        pnl:'6%',
        dis: 'transition duration-300 translate-x-[-161px]',        
    },
    {
        id: 3,
        name:
    <div className='flex-col '>
        <p><span className='flex justify-center text-[40px] lg:text-[60px] xl:text-[80px] text-[#ACD377]'>9%</span></p>
        <p className='text-[18px] lg:text-[26px] text-center leading-5 lg:leading-8'>ROI for a 3- month staking period</p>
    </div>,
        pnl:'9%',
        dis: 'transition duration-300 translate-x-[-481px]',
    },
]

const Page4 = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const previous = () => {
        if(currentIndex > 0) {

            setCurrentIndex((currentIndex) => (currentIndex - 1))
        }
    }

    const next = () => {
        if(currentIndex < ROI.length -1) {

            setCurrentIndex((currentIndex) => (currentIndex + 1))
        }
    } 
  return (
<>
    <div className=' flex flex-col justify-center items-center w-full h-full  '>
            <div className='flex flex-col bg-[white] w-[100%] h-full '>
                 
                        <div className='flex justify-center items-center w-screen h-[140px] md:h-[30%] lg:h-[230px] bg-[black] rounded-br-[50%] rounded-bl-[50%]'>
                            <div className='poetsen-one-regular w-[90%] text-[24px] text-[white] text-center leading-6 md:w-[80%] md:text-[30px] md:leading-[42px] lg:text-[45px] lg:mt-[30px] lg:w-[80%]'>Exploring <span className='text-[25px] md:text-[30px] lg:text-[45px] font-semibold text-[#ACD377]'>Staking Options</span>: A Comprehensive Guide for Crypto Investors</div>
                        </div>
                                <div className='flex flex-col justify-center items-center  '>

                                    <div className='lg:flex justify-center items-center mt-[40px] md:mb-[5%] '>
                                          
                                        
                                        <div className='flex flex-col justify-center items-center mx-[15px] md:w-full '>
                                                <div className='leading-5 w-[90%] text-[20px] text-center  '><span className='text-[20px] font-semibold text-[#ACD377]'>LockyFi</span> offers users a range of staking options, allowing them to choose their preferred duration and corresponding ROI:</div>
                                        </div>
                
                                    </div>


                                    <div className={`lg:hidden flex justify-center items-center w-[330px] gap-[100px] mt-[40px] mb-[40px] overflow-hidden  relative`}>
                                        {ROI.map((r, index) => {
                                            
                                                return(
                                                    
                                                        <div key={index} className={`card flex justify-center items-center p-[10px] my-[30px] ${ROI[currentIndex].dis}`}>
                                                    <div className='card-inner flex justify-center items-center w-[180px] h-[250px]'>
                                                        <div className='flex flex-col card-front w-full h-full font-bold  '>
                                                            <img className='h-[150px] ' src={images.lockyImg}/>
                                                            <div className='flex justify-center items-center w-full h-[20%] mt-[-10px] bg-gradient-to-r from-transparent via-[#77bc1d9c] to-transparent text-[50px] text-[#ACD377] '>{r.pnl}</div>
                                                            <div className='flex justify-center items-center text-[25px] mt-[20px] text-[#fbf9f977]'><FiRefreshCcw /></div>
                                                        </div>

                                                        <div className='card-back flex justify-center items-center font-bold '>
                                                            <h1>{r.name}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                                    
                                                )
                                            })}
                                        <div className='flex absolute top-[170px] justify-between items-center w-[87%]  '>
                                            <button onClick={previous} className={`flex justify-center items-center  text-[black] w-[40px] h-[40px] rounded-full border-[1px] bg-[#77bc1d95] hover:bg-[#9ee73fa1] ${currentIndex === 3 && 'bg-[#91ff00f8] border-[black]'}`}><GrPrevious /></button>
                                            <button onClick={next} className={`flex justify-center items-center text-[black] w-[40px] h-[40px] rounded-full border-[1px] bg-[#77bc1d9c] hover:bg-[#acff409c] ${currentIndex === 0 && 'bg-[#91ff00c1] border-[black]'}`}><GrNext /></button>
                                        </div>
                                    </div>

                                    <div className={`hidden lg:flex justify-center items-center w-[450px] gap-9 mt-[-60px] mb-[60px]`}>
                                        {ROI.map((r, index) => {
                                                return(
                                                    
                                                        <div key={index} className={`card flex justify-center items-center p-[10px] my-[30px]`}>
                                                    <div className='card-inner flex justify-center items-center md:w-[130px] md:h-[180px] lg:w-[190px] lg:h-[280px] xl:w-[250px] xl:h-[320px]'>
                                                        <div className='flex flex-col card-front w-full h-full font-bold  '>
                                                            <img className='h-[200px] ' src={images.lockyImg}/>
                                                            <div className='flex justify-center items-center w-full h-[20%] mt-[20px] bg-gradient-to-r from-transparent via-[#77bc1d9c] to-transparent text-[50px] text-[#ACD377] md:mt-[5px]  md:text-[30px] md:mb-[5px]'>{r.pnl}</div>
                                                            <div className='flex justify-center items-center text-[25px] md:text-[20px] md:mb-[20px] mt-[10px] text-[#fbf9f977]'><FiRefreshCcw /></div>
                                                        </div>

                                                        <div className='card-back flex justify-center items-center font-bold '>
                                                            <h1>{r.name}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                                    
                                                )
                                            })}
                                      
                                    </div>
                                   

                                </div>
            </div>
    </div>
    </>    
    )
}

export default Page4