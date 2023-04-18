import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/core/Header'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import ShapeMotion from '../../components/core/ShapeMotion'
import Landing from '../../components/Home/Landing'



export default function Home() {
  const parentRef = useRef(null)
  return (
    <div className='Home Page'>
      <div style={{
        position: 'relative',
      }} ref={parentRef}>

        <Header />
        <ShapeMotion img="/shapes/Vector-3.svg" ref={parentRef}
          dragConstraints={parentRef} />
      </div>

      {/* <Image src="/shapes/Vector-2.svg" alt="PhonePilot" width={250} height={100} className='Shape Shape2' /> */}
      {/* <Image src="/shapes/Vector-1.svg" alt="PhonePilot" width={250} height={100} className='Shape Shape1' /> */}
      {/* <Image src="/shapes/Vector.svg" alt="PhonePilot" width={250} height={100} className='Shape Shape4' /> */}
      {/* <Image src="/shapes/Ellipse 2.svg" alt="PhonePilot" width={250} height={100} className='Shape Shape5' /> */}
      <Landing />
    </div >
  )
}