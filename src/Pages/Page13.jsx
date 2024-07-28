import React from 'react'
import { images } from '../assets'
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";






const Page13 = () => {
  return (
<>
    <div className=' flex flex-col justify-center items-center w-screen h-full '>
            <div className='flex flex-col justify-center items-center bg w-full h-full text-[white]'>
                <div className=' w-[95%] border-[1px] rounded-[5px] backdrop-blur-[6px] bg-[#b5deb532] mb-[30px] md:py-[30px] lg:py-[30px] xl:py-[30px]'>
                        <div className='flex flex-col w-full md:flex-row md:justify-between md:px-[4%] lg:px-[10%] xl:px-[22%]'>

                       
                            <div className='flex flex-col'>
                                <div className='flex justify-center items-center '>
                                    <img className='w-[125px] h-[25px] mt-[35px]' src={images.page2Image1}/>
                                </div>
                                    <div className='flex justify-center items-center w-full mt-[30px] md:mt-[40px]'>
                                        <div className='flex justify-center items-center gap-3 w-full text-[17px] text-center leading-5 '>
                                            <a href="https://web.telegram.org/k/#@lockyfi" className='flex justify-center items-center text-[white] w-[27px] h-[27px] rounded-full bg-[#3e5e77] text-[18px]'><FaTelegramPlane /></a>
                                            <a href="https://discord.com/login?redirect_to=%2Fchannels%2F%40me" className='flex justify-center items-center text-[white] w-[27px] h-[27px] rounded-full bg-[#3e5e77] text-[18px]'><FaDiscord /></a>
                                            <a href="https://x.com/Lockyfii" className='flex justify-center items-center text-[white] w-[27px] h-[27px] rounded-full bg-[#3e5e77] text-[18px]'><IoLogoTwitter /></a>
                                        </div>
                                    </div>      
                            </div>
                                            
                                    <div className='flex flex-col justify-center items-center mt-[30px] md:flex-row md:gap-x-[50px]  md:mt-[10px]  '>
                                        <div className='flex flex-col justify-center items-center'>
                                            <div className=' text-[20px] text-[white] text-center font-bold'>About:</div>
                                                <a href="" className='text-[18px] text-[#acabab]'>Documnetation</a>
                                                <a href="" className='text-[18px] text-[#acabab]'>Terms & Conditions</a>
                                                <a href="" className='text-[18px] text-[#acabab]'>White Paper</a>
                                        </div>

                                        <div className='flex flex-col justify-center items-center mt-[30px]'>
                                            <div className=' text-[20px] text-[white] text-center font-bold'>Create:</div>
                                                <a href="" className='text-[18px] text-[#acabab]'>Locker / Yield</a>
                                                <a href="" className='text-[18px] text-[#acabab]'>ERC20 Token</a>
                                                <a href="" className='text-[18px] text-[#acabab]'>Liquidity Pool</a>
                                                <a href="" className='text-[18px] text-[#acabab]'>Steaking & Vault</a>
                                        </div>

                                        <div className='flex flex-col justify-center items-center mt-[30px] mb-[40px]'>
                                            <div className=' text-[20px] text-[white] text-center font-bold'>Community:</div>
                                                <a href="https://web.telegram.org/k/#@lockyfi" className='text-[18px] text-[#acabab]'>Telegram</a>
                                                <a href="https://x.com/Lockyfii" className='text-[18px] text-[#acabab]'>Twitter</a>
                                                <a href="https://discord.com/login?redirect_to=%2Fchannels%2F%40me" className='text-[18px] text-[#acabab]'>Discord</a>
                                        </div>
                                    </div>
           
                        </div>
                                             <div className='flex justify-center items-center w-full text-[18px] text-[#acabab] mb-[30px] mt-[30px]'>&#169;2024 LockyFi. All rights reserved.</div>
                </div>
            </div>
    </div>
    </>    
    )
}

export default Page13