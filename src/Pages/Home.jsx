import React from 'react'
import { images } from '../assets'
import Introduction from './Introduction'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'
import Page8 from './Page8'
import Page9 from './Page9'
import Page10 from './Page10'
import Page11 from './Page11'
import Page12 from './Page12'
import Page13 from './Page13'
import { useLocation } from 'react-router'





const Home = () => {

  return (

    <div className='flex flex-col ' 
    // style={{
    //     backgroundImage: `url(${images.mainBG})`,
    //     }}
        >
        <div className='flex flex-col  items-center'>
            <div><Introduction /></div>
            <div className='container'><Page2 /></div>
             <div><Page3 /></div>
                <div><Page4 /></div>
                <div className='container'><Page5 /></div>
                <div><Page9 /></div>
                <div className='container'><Page10 /></div>
                <div><Page8 /></div>
                <div className='container'><Page6 /></div>
                <div><Page7 /></div>
                <div className='container'><Page11 /></div>
                <div><Page12 /></div>
                <div><Page13 /></div>
        </div>


      </div>
  )
}

export default Home