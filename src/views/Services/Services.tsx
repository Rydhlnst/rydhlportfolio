import { Button } from '@/components/ui/button'
import React from 'react'

const Services = () => {
  return (
    <div>
        <div className='flex flex-row justify-between items-center'>
            <h2 className='text-4xl font-medium'>I can help you with</h2>
            <Button variant={'outline'} size={'lg'}>See my work</Button>
        </div>
    </div>
  )
}

export default Services