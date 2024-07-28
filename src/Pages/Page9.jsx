import {React, useEffect} from 'react'
import { images } from '../assets'
import { loadCards } from '../lib'


const Page9 = () => {

        useEffect(() => {
                loadCards()
            }, [])
  return (
<>
    <div className=' flex flex-col w-full h-full md:h-full lg:h-screen' 
                style={{
                        background: `url(${images.mainBG})`,
                        backgroundSize: 'cover'
                }}>
            
            <div className='flex flex-col justify-center items-center  md:flex-row  w-[100%] h-[100%] md:pl-[40px] md:pb-[60px] xl:px-[70px] text-[#ffffff]'
                    >

                                <div className='flex flex-col w-[90%] md:w-[100%] lg:pl-[40px]'>
                                        <div className='flex flex-col  xl:pl-[50px]'>
                                                <div>
                                                        <img className='w-[90%] lg:w-[80%] xl:w-[70%] mt-[35px] ' src={images.lockyPayLogo}/>
                                                </div>
                                                <div className='flex justify-start items-center w-full mt-[10px] '>
                                                        <div className='poetsen-one-regular w-[90%] text-[25px] text-left leading-5 md:w-[100%] md:text-[40px] md:leading-8 lg:w-[100%] xl:w-[70%]'>An  innovative mobile application for real world adoption</div>
                                                </div>
                                        </div>
                                                <div className='flex flex-col justify-center items-center  mt-[50px]  md:w-[100%] xl:ml-[50px] lg:w-[100%] '>
                                                        <div className='leading-7 text-[20px] text-left md:text-[21px]'><span className='text-[20px] md:text-[17px] font-semibold text-[#ACD377]'>LockyPay</span> is the first decentralized digital bank mobile application that integrates the blockchain technology and empowers users to custody their own funds.</div>

                                                        <div className='mt-[20px] text-[20px] text-left md:text-[21px] leading-7'>Our upcoming app, <span className='text-[20px] md:text-[17px] font-semibold text-[#ACD377]'>LockyPay</span>, is set to transform payment experiences. Users will soon be able to make seamless payments at any establishment using tokens created within the <span className='text-[20px] md:text-[17px] font-semibold text-[#ACD377]'>LockyFi</span> ecosystem.</div>
                                                </div>
                                                
                                </div>

                                                <div className='cards flex justify-center items-center md:flex md:mb-[5%] md:mt-[70px]'>
                                                        <img className='w-[80%] md:w-[90%] lg:w-[80%] xl:w-[100%]' src={images.page9Image1}/>
                                                </div>
                        </div>
    </div>
    </>   
    )
}

export default Page9