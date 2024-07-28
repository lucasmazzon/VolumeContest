import React, { useEffect } from 'react'
import { images } from '../assets'
import { loadCards } from '../lib'

const Page2 = () => {

    useEffect(() => {
        loadCards()
    }, [])

  return (
    <>
    <div className=' flex flex-col justify-center items-center w-full h-full  bg-[#eff5dbd8]'>
            
            <div className='flex flex-col  w-[90%] h-[90%] bg-[#ffffffad] text-[black] pt-[50px]'>
                       
                            <div className='flex justify-center items-center w-full rounded-br-full rounded-bl-full '>
                                <p className='poetsen-one-regular w-[90%] text-[45px] text-center leading-9 md:text-[70px] md:leading-[55px] lg:text-[90px] lg:leading-[70px]  '>Introducing <span className='text-[45px] md:text-[70px] lg:text-[90px] text-[#ACD377] '>LOCKYFI:</span></p>
                            </div>

                                    <div className='flex flex-col  mt-[20px] lg:mt-[100px] '>

                                        <div className='md:flex w-full my-[40px]'>
                                            
                                            <div className='flex flex-col justify-center items-center mx-[15px] md:mx-[50px] md:flex-row md:items-start md:w-full   '>
                                                    <div className='leading-5 text-[18px] text-center md:text-[20px] md:text-start  md:w-[70%] md:leading-7 lg:text-[20px] lg:leading-7'>Revolutionizing <span className='text-[18px] md:text-[20px] lg:text-[20px] font-semibold text-[#ACD377]'>Web3</span> Technologies <span className='text-[18px] md:text-[20px] lg:text-[20px] font-semibold text-[#ACD377]'>LockyFI</span> is focused on developing and managing cryptocurrencies and <span className='text-[18px] md:text-[20px] lg:text-[20px] font-semibold text-[#ACD377]'>Web3</span> technologies. Committed to offering innovative and reliable solutions in the dynamic cryptocurrency market.</div>

                                                <div className='md:flex-col w-full'>
                                                    <div className='md:flex'>
                                                         <div className='leading-5 mt-[20px] text-[18px] text-center md:w-full md:mt-0 md:text-end md:text-[20px] md:leading-7 md:pl-[15px] lg:pl-[50px] lg:text-[20px] lg:leading-7'>Our mission is to transform the way cryptocurrencies are created and managed, providing a robust and accessible platform that combines utility and security.</div>
                                                    </div>

                                                    <div className='hidden cards mt-[20px] md:flex justify-end xl:my-[50px]'>
                                                        <img className=' md:w-[90%] lg:w-[50%]' src={images.page2Image2}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='cards flex justify-center items-center  my-[20px] md:hidden '>
                                                <img className=' w-[80%] mt-[30px]' src={images.page2Image2}/>
                                            </div>
                                                
                                        </div>
                                    </div>
                    
                                    
            </div>
    </div>
    </>
  )
}

export default Page2