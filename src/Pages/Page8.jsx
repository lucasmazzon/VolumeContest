import {React, useEffect} from 'react'
import { images } from '../assets'
import { loadCards } from '../lib'



const Page8 = () => {

        useEffect(() => {
                loadCards()
            }, [])
  return (
    <>

    <div className=' flex flex-col w-full h-full md:h-full lg:h-screen'>
                
                <div className='flex flex-col md:flex-row justify-center items-center  w-[100%] h-[100%] md:pl-[40px] md:pb-[60px] xl:px-[70px] text-[#ffffff]'
                        style={{
                            background: `url(${images.mainBG})`,
                            backgroundSize: 'cover'
                            }}
                >

                        <div className='flex flex-col w-[90%] md:w-[100%] lg:pl-[40px]'>
                                <div className='flex flex-col w-[100%]  xl:pl-[50px]'>
                                        <div>
                                            <img className='w-[90%] lg:w-[40%] xl:w-[70%] mt-[35px] ' src={images.lockyPayLogo}/>
                                        </div>
                                        <div className='flex justify-start items-center w-full mt-[10px] '>
                                            <div className='poetsen-one-regular w-[100%] text-[25px] text-left leading-5 md:w-[100%] md:text-[40px] md:leading-8 lg:w-[100%] xl:w-[70%]'>Empowering Token Volume Growth  </div>
                                        </div>
                                </div>
                                                <div className='flex flex-col justify-center items-center  mt-[50px]  md:w-[100%] xl:ml-[50px] lg:w-[100%] '>
                                                        <div className='leading-7 text-[20px] text-left md:text-[21px]'>Token creators can effortlessly use <span className='text-[20px] md:text-[17px] font-semibold text-[#ACD377]'>LockyBot</span> to generate volume and movement for their tokens.</div>

                                                        <div className='mt-[20px] text-[20px] text-left md:text-[21px] leading-7'>This versatile and organic tool supports not only tokens created within the <span className='text-[20px] md:text-[17px] font-semibold text-[#ACD377]'>LockyFi</span> platform but also any other tokens. </div>

                                                        <div className='mt-[20px] text-[20px] text-left md:text-[21px] leading-7'>By utilizing <span className='text-[20px] md:text-[17px] font-semibold text-[#ACD377]'>LockyBot</span>, creators can significantly enhance the activity and visibility of their tokens in the market. </div>
                                                </div>
                                        
                        </div>

                                            <div className='cards flex justify-center items-center md:flex md:mb-[5%] md:mt-[70px]'>
                                                        <img className='w-[70%] md:w-[70%] lg:w-[80%] xl:w-[70%]' src={images.bot}/>
                                            </div>
                </div>
        </div>
   
    </>    )
}

export default Page8

