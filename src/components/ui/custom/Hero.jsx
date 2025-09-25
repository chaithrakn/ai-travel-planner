import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-20'>
        <span className='text-[#f56551]'> Plan Your Perfect Trip with AI </span>
      </h1>
      <p className='text-gray-500 text-xl text-center'>
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>

      <Link to={'/create-trip'}>
        <Button>Get Started!</Button>
      </Link>
      
    </div>
  )
}

export default Hero
