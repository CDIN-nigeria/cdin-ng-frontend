"use client"
import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './home/hero'
import Strategy from './home/strategy'
import Member from './home/member'



export default function Home() {

  return (
   <div className="w-full flex flex-col">
<div className="w-full">

    <Navbar />
</div>
<div className="w-full">

    <Hero />
</div>
<div>
    <Strategy /> 
    </div>
<div>
    <Member/>
</div>
    CDIN homepage
    ...in progress
   </div>
  )
}
