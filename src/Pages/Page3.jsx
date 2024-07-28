import { useEffect } from 'react'
import React from 'react'
import { images } from '../assets'
import { loadCards } from '../lib'


const Page3 = () => {

    useEffect(() => {
        loadCards()
    }, [])
  return (
    <>
    <div className=' flex flex-col justify-center items-center w-full h-full '>
                 
                        <div className='flex justify-center items-center w-full h-[30%] mt-[30px] md:mt-[40px] lg:mt-[20%] xl:mt-[5%]'>
                            <div className='poetsen-one-regular w-[90%] text-[40px] text-center leading-9 md:w-[60%] md:text-[45px] md:leading-8 lg:text-[50px] lg:leading-[40px]'>A Trusted Platform for Engaging with <span className='text-[40px] md:text-[45px] lg:text-[50px] font-semibold text-[#ACD377]'>Web3</span></div>
                        </div>
                                <div className='flex flex-col h-full mt-[-40px] md:mt-[15px] '>

                                    <div className='lg:flex items-start h-[100%] mt-[13%] md:mt-[3%] mx-[25px]'>
                                            <div className='cards flex justify-center w-full lg:w-[80%]'>
                                                <img className='w-[94%] h-[90%] md:w-[90%] md:h-[70%] rounded-[10px]   ' src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg"/>
                                            </div>
                                        
                                        <div className='flex flex-col justify-center items-center  mt-[20px] md:flex-row md:items-start md:w-[100%] md:px-[40px] md:h-[10%] md:mt-[50px] lg:flex-col lg:justify-start lg:items-center lg:mt-0 lg:w-[60%] lg:h-full lg:px-0 '>
                                                <div className='leading-5 text-[18px] text-center md:text-[18px] md:w-[50%] md:pr-[10px] md:text-left lg:w-[90%] lg:text-[20px] lg:leading-7'>We leverage cutting-edge Blockchain and Smart Contract technology to assist individuals and organizations in creating and launching their own cryptocurrencies. </div>

                                                <div className='mt-[40px] text-[18px] text-center md:text-[18px] md:w-[50%] md:pl-[10px] md:mt-0 md:text-right leading-5 lg:w-[90%] lg:text-left lg:mt-[40px] lg:text-[20px] lg:leading-7'>Additionally, we offer asset staking and a range of other features designed for cryptocurrencies and <span className='text-[18px] md:text-[17px] font-semibold text-[#ACD377]'>Web3</span> applications.</div>
                                               
                                                <div className='hidden  lg:flex justify-center items-center w-[80%] md:h-[40%] mt-[20px] '>
                                                    <img className='lg:w-[60%] xl:w-[60%]' src={images.page3arrow}/>
                                               </div>

                                        </div>

                                                <div className='lg:hidden cards  flex justify-center items-center w-[100%] mt-[20px] md:mt-[100px] md:w-[100%] '>
                                                    <img className='w-[60%]  md:w-[40%] ' src={images.page3arrow}/>
                                               </div>
                
                                    </div>
                                </div>
        </div>
    </>  
    )
}

export default Page3