"use client"
import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './home/hero'
import Index from './home/customer'
import Strategy from './home/strategy'
import Member from './home/member'
import Whatwedo from './home/whatwedo'


import Footercomp from './components/footer'



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
<div className='mt-8 mb-8'>
    <Member/>
</div>
<Whatwedo/>
{/* <Index/> */}
    <Footercomp />

   </div>
  )
}
