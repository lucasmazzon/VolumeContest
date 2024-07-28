import React from 'react'
import { images } from '../assets'


const Introduction = () => {
  return (
    <>
    <div className='flex flex-col  items-center h-screen pb-[90px] leading-[40px] md:leading-[60px]'
               style={{
                background: `url(${images.mainBG})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat'
                }}
    >
               

                         <div className='flex justify-center items-center mt-[130px] bg-gradient-to-r from-transparent via-[#77bc1d9c] to-transparent h-[120px] md:h-[170px] lg:h-[170px] xl:mt-[120px] xl:h-[180px]'>
                            <img className='w-[90%] md:w-[80%] lg:w-[50%]' src={images.logo2}/>
                        </div>
                 
                <div className='flex flex-col justify-center items-center mt-[-20px] md:flex-row md:justify-between md:mx-[50px] lg:mt-[-40px] lg:mx-[50px] xl:mt-[-5px]'>
                    <div className='flex justify-center items-center  w-[230px] h-[230px] mt-[60px] md:mt-[80px] md:w-[350px] md:h-[350px] lg:w-[360px] lg:h-[360px] xl:w-[380px] xl:h-[380px]  border-[1px] rounded-full bg-gradient-to-r from-[white] via-[#4f850989] to-[#95fd0e89]  relative'>
                        <div className='flex justify-center items-center w-[180px] h-[180px] md:w-[300px]  md:h-[300px] lg:w-[290px] lg:h-[290px] xl:w-[290px] xl:h-[290px] bg-[#000000cd] rounded-full'>
                            <img className='h-[80%]' src={images.vetorLocky}/>
                                    <div className='flex justify-center items-center absolute w-[80px] h-[80px] bottom-[-21px] md:bottom-[12px] left-[150px] md:left-[220px] lg:left-[260px] xl:left-[260px] lg:bottom-[5px] lg:w-[150px] lg:h-[150px] border-[1px] rounded-full bg-[#83b24589] animate-ping'></div>
                                <div className='flex justify-center items-center absolute bottom-[-30px] md:bottom-[5px] left-[140px] md:left-[210px] lg:left-[260px] xl:left-[260px] w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] border-[1px] rounded-full bg-[#83b24589] '>
                                    <img className='h-[90%]' src={images.locky}/>
                                </div>
                        </div>
                    </div>


                        <div className='flex flex-col justify-center items-center w-full mt-[10%] md:w-[50%] lg:mt-[2%] lg:w-[60%] xl:w-[60%]'>
                            <p className='poetsen-one-regular text-center text-[35px] md:text-center md:text-[70px] lg:text-[80px] xl:text-[90px] text-[white] xl:leading-[80px]'>Empowering the future with <span className='text-[#8eeb0c]'>web3</span> technology</p>
                        </div>
                </div>

    </div>
    </>
  )
}

export default Introduction