"use client"
import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './home/hero'


export default function Home() {

  return (
   <div className="w-full flex flex-col">
<div className="w-full">

    <Navbar />
</div>
<div className="w-full">

    <Hero />
</div>
    CDIN homepage
    ...in progress
   </div>
  )
}
