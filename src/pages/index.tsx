import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/core/Header'
import { motion } from 'framer-motion'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='Home Page'>
      <Header />
      <motion.div className='box1' drag
        dragConstraints={{ left: 0, right: 100, top: 0, bottom: 0 }}
      >

        <Image src="/shapes/Vector-3.svg" alt="PhonePilot" width={250} height={100} className='Shape Shape3'
          onDragStart={(e) => e.preventDefault()}
        />
      </motion.div>
      {/* <Image src="/shapes/Vector-2.svg" alt="PhonePilot" width={250} height={100} className='Shape Shape2' /> */}
      {/* <Image src="/shapes/Vector-1.svg" alt="PhonePilot" width={250} height={100} className='Shape Shape1' /> */}
      {/* <Image src="/shapes/Vector.svg" alt="PhonePilot" width={250} height={100} className='Shape Shape4' /> */}
      {/* <Image src="/shapes/Ellipse 2.svg" alt="PhonePilot" width={250} height={100} className='Shape Shape5' /> */}
    </div >
  )
}
