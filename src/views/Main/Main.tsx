import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <div className={`w-full flex flex-col space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 justify-center items-center h-screen px-20 py-20`} >
        <div className="w-full flex items-center justify-center pt-20 lg:pt-0">
            <h1 className="text-4xl lg:text-6xl font-medium"><span className="font-semibold">Hello! </span>I{"'"}m Muhammad Riyadhul Jinan Nasution</h1>
        </div>
        <div className="w-full flex flex-col items-start justify-center space-y-5">
            <h2 className="text-3xl lg:text-4xl">A Website Developer based in <br className="hidden md:block"/>Bandung, Indonesia.</h2>
            <p className="text-gray-400 font-light">Passionate creating great experiences</p>
            <div className="flex flex-row space-x-5 pb-30 lg:pb-0">
              <Link href={""}>
                <Button variant={"default"} size={"lg"}>Talk with me</Button>
              </Link>
              <Link href={"#"}>
                <Button variant={"outline"} size={"lg"}>See my work</Button>
              </Link>
            </div>
        </div>
      </div>
  )
}

export default Main