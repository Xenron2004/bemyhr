import React from 'react'
import Merge from './components/Merge'
import AboutSection from './components/About'

const Homepage = () => {
  return (
    <div className='flex flex-col items-center w-full justify-center gap-[60px] md:gap-[100px]'>
      <Merge/>
      <AboutSection/>
    </div>
  )
}

export default Homepage


