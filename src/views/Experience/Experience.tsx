import { Separator } from '@/components/ui/separator'
import Experiences from '@/constant/Experience.constant'
import React from 'react'

const ExperienceAndAwards = () => {
  return (
    <div id='About-me'>
        <div className='grid md:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-20'>
            <div className='flex flex-col gap-10'>
                <h2 className='text-4xl font-medium'>Working experience</h2>
                <div className='flex flex-col gap-5'>
                    {Experiences.map((experience) => {
                        return (
                            <div key={experience.experience}>
                                <div className='flex flex-row gap-5 items-center justify-start'>
                                    <div className='p-4 bg-white rounded-lg'>
                                        <experience.icon className='w-8 h-8'/>
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-medium'>{experience.experience}</h2>
                                        <p className='text-accent-foreground'>{experience.date}</p>
                                    </div>
                                </div>
                                <Separator className='my-3'/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col gap-10'>
                <h2 className='text-4xl font-medium'>Awards & Recognition</h2>
                <div className='flex flex-col gap-5'>
                    {Experiences.map((experience) => {
                        return (
                            <div key={experience.experience}>
                                <div className='flex flex-row gap-5 items-center justify-start'>
                                    <div className='p-4 bg-white rounded-lg'>
                                        <experience.icon className='w-8 h-8'/>
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-medium'>{experience.experience}</h2>
                                        <p className='text-accent-foreground'>{experience.date}</p>
                                    </div>
                                </div>
                                <Separator className='my-3'/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExperienceAndAwards