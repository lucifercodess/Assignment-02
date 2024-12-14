import Portfolio from '@/components/Portfolio'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex'>
      <div className='w-[20%]'>
        <Sidebar/>
      </div>
      <div className='w-[80%]'>
        <Portfolio/>
      </div>
    </div>
  )
}

export default HomePage