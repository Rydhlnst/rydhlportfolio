import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div className='w-full bg-white px-20 py-20'>
        <div className='flex flex-col w-full justify-center items-center gap-5'>
            <p className='text-lg'>Have a project?</p>
            <h2 className='text-4xl font-medium'>Let{"'"}s talk with me</h2>
            <Button variant={'default'} size={'lg'}>Talk with me</Button>
        </div>
    </div>
  )
}

export default Footer