import {React, useEffect} from 'react'
import { images } from '../assets'
import { loadCards } from '../lib'



const Page10 = () => {
        useEffect(() => {
                loadCards()
            }, [])
        
  return (
<>
    <div className=' flex flex-col justify-center items-center w-full h-full  '
    style={{background: `url(${images.page10BG})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
          }}
    >
            <div className='flex flex-col justify-start items-center  w-[100%] h-full text-[black] md:pr-[50px]'>
                   <div className='flex w-full p-[30px]'><img className='w-[35%]' src={images.lockyToken}/></div>
                        <div className='flex flex-col-reverse justify-center items-center md:items-start md:flex-row'>
                            <div className='cards flex justify-center items-center md:items-end w-[80%] h-full py-[40px] md:w-[50%] md:h-[500px]'><img className='md:w-[100%] lg:w-[80%]' src={images.page10Img}/></div>
                                <div className='flex flex-col justify-center items-center  w-[100%] px-[40px] md:px-0 md:items-start md:w-[70%] text-center md:text-right mt-[50px]'>

                                        <p className='poetsen-one-regular text-[30px] md:text-[30px] lg:text-[50px] text-[#615e5e] leading-[40px]'>Facilitating Users to Develop a New Cryptocurrency </p>

                                        <p className=' mt-[30px] text-[21px]'> This feature empowers anyone to easily create their own token within the LOCKYFI platform. The process is designed to be simple and user-friendly, allowing individuals and organizations to create tokens in a secure and trustworthy way.</p>
                                </div>
                        </div>
            </div>

    </div>
    </>    )
}

export default Page10




