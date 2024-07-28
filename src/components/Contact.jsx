import React from 'react'
import { images } from '../assets'

const Contact = () => {

    const cards = document.querySelectorAll('.cards')

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting)
            // if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    },
    {
        threshold: 0.5,
        // rootMargin:'200px',
    }

    )

    cards.forEach(card => {

        observer.observe(card)
    })

  return (
    <div className='flex flex-col justify-start items-center w-full h-full mt-[100px] text-[black]'>
        <div className='fixed top-[100px] flex justify-between items-center w-full h-[50px] bg-[black] z-50 text-[white]'>
            <a href="#Link1">Section1</a>
            <a href="#Link2">Section2</a>
            <a href="#Link3">Section3</a>
            <a href="#Link4">Section4</a>
        </div>

            <div id='Link1' className='cards flex flex-col justify-center items-center bg-[red] mt-[100px] w-full h-screen '>
                <p>section1</p>
                    <img className='w-[50%]' src={images.bot}/>
            </div>

            <div id='Link2' className='cards flex flex-col justify-center items-center bg-[green] mt-[100px] w-full h-screen '>
                <p>section2</p>
                    <img className='w-[50%]' src={images.cubos}/>
            </div>

            <div id='Link3' className='cards flex flex-col justify-center items-center bg-[blue] w-full h-screen '>
                <p>section3</p>
                    <img className='w-[50%]' src={images.IMGpage11}/>
            </div>

            <div id='Link4' className='cards flex flex-col justify-center items-center bg-[yellow] w-full h-screen '>
                <p>section4</p>
                    <img className='w-[50%]' src={images.bot}/>
            </div>

    </div>
  )
}

export default Contact