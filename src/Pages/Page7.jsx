import React, { useEffect } from 'react'
import { images } from '../assets'
import { loadCards } from '../lib'


const Page7 = () => {
        useEffect(() =>{
            loadCards()
        },[])
  return (
<>

<div className=' flex flex-col w-full h-full md:h-full lg:h-full bg-[#000000e6]' 
                // style={{
                //         background: `url(${images.page7ImageBG})`,
                //         backgroundSize: 'contain'
                // }}
                >
            
                <div className='flex flex-col justify-center items-center  md:flex-row-reverse  w-[100%] h-[100%] md:pl-[40px]  text-[#ffffff]'>

                        <div className='flex flex-col w-[90%] md:w-[80%] md:px-[50px] lg:pl-[40px] xl:w-[90%] xl:px-[50px]'>
                                <div className='flex flex-col  xl:pl-[50px]'>
                                        <div className='w-full'>
                                                <p className='w-[90%] lg:w-[100%] mt-[35px] text-[50px] md:text-[80px] text-right font-bold text-[#ACD377] '>LockyWallet</p>
                                        </div>
                                        <div className='flex justify-start items-center w-full mt-[10px] '>
                                                <div className='poetsen-one-regular w-[90%] text-[25px] text-center md:text-right leading-6 md:w-[100%] md:text-[40px] md:leading-8 lg:w-[100%]'>Designed for Simplicity and Security</div>
                                        </div>
                                </div>
                                        <div className='flex flex-col justify-center  mt-[50px]  md:w-[100%] lg:w-[100%] '>
                                                <div className='leading-7 text-[20px] text-center md:text-right md:text-[21px]'><span className='text-[20px] md:text-[17px] font-semibold text-[#ACD377]'>LockyWallet</span> offers a user-friendly App for managing digital assets smoothly.</div>

                                                <div className='mt-[20px] text-[20px] text-center md:text-right md:text-[21px] leading-7'>With intuitive features and strong security measures, users can confidently handle, monitor, and transfer their cryptocurrencies with ease.</div>
                                        </div>
                                        
                        </div>

                                <div className='cards flex justify-center items-center md:flex md:mb-[5%] md:mt-[70px]'>
                                        <img className='w-[80%] md:w-[100%] lg:w-[80%] xl:w-[100%]' src={images.page6IMG}/>
                                </div>
                </div>
    </div>

    </>    
    )
}

export default Page7