import React from 'react'
import { images } from '../assets'


const Page5 = () => {
  return (
<>
    <div className=' flex flex-col justify-center items-center w-full h-screen '
     style={{
        background: `url(${images.page2Image3})`,
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat'
        }}
    >

        <div className='flex flex-col justify-center items-center w-[90%] h-[90%] bg-[#ffffff80]'>
                <div className='w-full h-[40%] '
                style={{
                    background: `url(${images.page5Image1})`,
                    backgroundSize: 'contain',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition: 'center'
                    }}>
                </div>

                    <div className='w-[90%] h-[70%] mb-[40px]'>
                        <div className='flex justify-center items-center w-full h-[120px]  border-b-[1px] md:text-[45px] md:leading-9'><p> Embrace <span className=' md:text-[45px]  font-semibold text-[#ACD377]'> Decentralization </span> with Lockyfi </p></div>

                        <div className='mt-[50px]  md:text-[20px] lg:text-[20px] lg:leading-7'><span className='text-[14px] md:text-[20px] lg:text-[20px] font-semibold text-[#ACD377]'>LockyFi</span> uses decentralization to keep users crypto assets secure and in their control. Our platform ensures transparency with public blockchain records. Enjoy the freedom and privacy of direct transactions without intermediaries. Experience secure, transparent, and private asset management with <span className='text-[14px] md:text-[20px] lg:text-[20px] font-semibold text-[#ACD377]'>LockyFi</span>.</div>
                    </div>

        </div>
           
    </div>
    </>   
    )
}

export default Page5