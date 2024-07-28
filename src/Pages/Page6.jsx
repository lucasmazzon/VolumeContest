import {React, useEffect} from 'react'
import { images } from '../assets'
import { loadCards } from '../lib'


const Page6 = () => {

        useEffect(() => {
                loadCards()
            }, [])
  return (
    <div className=' flex flex-col justify-center items-center w-full h-full border-x-[1px] '
//     style={{background: `url(${images.page10BG})`,
//             backgroundPosition: 'center',
//             backgroundSize: 'contain',
//           }}
    >
            <div className='flex flex-col justify-start items-center  w-[100%] h-full text-[black] md:pr-[50px]'>
                   <div className='flex w-full p-[30px]'><img className='w-[35%]' src={images.lockyMarket}/></div>
                        <div className='flex flex-col-reverse justify-center items-center md:items-start md:flex-row'>
                            <div className='cards flex justify-center items-center md:items-end w-[80%] h-full py-[40px] md:w-[50%] md:h-[500px]'><img className='md:w-[100%] lg:w-[80%] xl:w-[60%]' src={images.IMGpage11}/></div>
                                <div className='flex flex-col justify-center items-center  w-[100%] px-[40px] md:px-0 md:items-start md:w-[70%] text-center md:text-right mt-[50px]'>

                                        <p className='poetsen-one-regular text-[30px] md:text-[30px] lg:text-[50px] text-[#615e5e] leading-[40px]'>Simplifying Market Monitoring</p>

                                        <p className=' mt-[30px] text-[21px]'> Within our dynamic platform, <span className='text-[20px] md:text-[17px] font-semibold text-[#ACD377]'>LockyMarket</span> enables users to track market movements and execute trades seamlessly within  <span className='text-[20px] md:text-[17px] font-semibold text-[#ACD377]'>LockyFi</span>. </p>

                                        <p className=' mt-[30px] text-[21px]'>This feature provides a user-friendly interface where individuals can stay informed about market trends and engage in trading activities with ease and confidence. </p>
                                </div>
                        </div>
            </div>

    </div>
  )
}

export default Page6