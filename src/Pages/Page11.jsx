import {React, useEffect} from 'react'
import { images } from '../assets'
import { loadCards } from '../lib'



const Page11 = () => {

        useEffect(() => {
                loadCards()
            }, [])
  return (
    <div className=' flex flex-col justify-center items-center w-full h-full border-x-[1px] '
        style={{background: `url(${images.page11BG})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
              }}
        >
                <div className='flex flex-col justify-start items-center  w-[100%] h-full text-[black] md:pr-[50px]'>
                       <div className='flex w-full p-[30px]'>
                                <p className='poetsen-one-regular w-[70%] text-[40px] md:text-[60px] leading-[55px]'>
                                Uniting <span className=' font-semibold text-[#ACD377]'>BLOCKCHAIN technology</span> with advanced knowledge  
                                </p>
                       </div>
                            <div className='flex flex-col-reverse justify-center items-center md:items-start md:flex-row'>
                                <div className='cards flex justify-center items-center md:items-center  w-[80%] h-full py-[40px] md:w-[50%] md:h-[500px]'><img className='md:w-[100%] lg:w-[80%]' src={images.cubos}/></div>
                                    <div className='flex flex-col justify-center items-center  w-[100%] px-[40px] md:px-0 md:items-start md:w-[70%] text-center md:text-right mt-[50px]'>
    
                                            <p className='poetsen-one-regular text-[30px] md:text-[30px] lg:text-[30px] text-[#615e5e] leading-[40px]'><span className=' font-semibold text-[#ACD377]'>LockyFi</span> utilizes the latest blockchain technology. Our Solidity-based smart contracts are deployed on the Ethereum Layer 2 blockchain called Base.</p>
    
                                            <p className=' mt-[30px] text-[21px]'>Additionally, our application is fully prepared to expand to any other EVM-compatible blockchain, including <strong>Ethereum, Binance Smart Chain, Polygon, Arbitrum, Fantom, Avalanche, Optimism</strong> and more.</p>
    
                                    </div>
                            </div>
                </div>
    
        </div>
    )
}

export default Page11