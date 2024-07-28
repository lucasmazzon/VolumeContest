import React from 'react'
import { images } from '../assets'


const Test = () => {
  return (
    <>
    <div className=' flex flex-col justify-center items-center w-full h-screen '>
        <div className='flex justify-center items-center w-[100%] h-[100%] backdrop-blur-[12px] bg-gradient-to-b from-[#00f9f1] via-[#e9f500] to-[#ff00e6] '>
            <div className='flex flex-col bg w-[99.8%] h-[99.8%] text-[white]'>
                    <div>
                        <img className='w-[125px] h-[25px] mt-[35px] ml-[35px]' src={images.page2Image1}/>
                    </div>
                        <div className='flex justify-center items-center w-full mt-[30px] md:mt-[70px]'>
                            <div className='jaro w-[90%] text-[17px] text-center leading-5 md:w-[60%] md:text-[27px] md:leading-8 lg:w-[40%]'>A <span className='text-[14px] md:text-[27px] text-[#ACD377]'>Trusted</span> Platform for securing Crypto Assets</div>
                        </div>
                                <div className='flex flex-col md:mt-[15px] '>

                                    <div className='md:flex justify-center items-center  md:mb-[5%] '>
                                          
                                        
                                        <div className='flex flex-col justify-center items-center mx-[15px] mt-[50px] md:w-[60%] md:mr-[50px]'>
                                                <div className='leading-5 text-[14px] text-center md:text-[17px] md:text-right'>In today's digital age, safeguarding financial assets has never been more critical. Enter <span className='text-[14px] md:text-[17px] font-semibold text-[#ACD377]'>LockyFi</span>, a trusted platform designed to provide unparalleled security and peace of mind for financial transactions and asset management</div>

                                                <div className='mt-[20px] text-[14px] text-center md:text-[17px] md:text-right leading-5'>With a growing community of satisfied users, <span className='text-[14px] md:text-[17px] font-semibold text-[#ACD377]'>LockyFi</span> has established itself as a reliable partner in financial security. Our commitment to excellence and user satisfaction sets us apart from the competition.</div>
                                        </div>

                
                                    </div>
                                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Test