import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/core/Header'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import ShapeMotion from '../../components/core/ShapeMotion'
import Landing from '../../components/Home/Landing'
import Cards from '../../components/Home/Cards'
import Footer from '../../components/core/Footer'



export default function Home() {
  const parentRef = useRef(null)
  return (
    <>
      <Head>
        <title>PhonePilot - Manage Your Contacts</title>
        <link rel="icon" type="image/x-icon" href="/Favicon.png" />
        <meta name='title' content='The Smart Way to Manage Your Phonebook' />
        <meta name='author' content='Yassine Atik' />
        <meta name="robots" content="index,follow" />
        <meta name='description' content='Phone Pilot is the best way to manage your phone book. With Phone Pilot, you can easily create, uodate, manage, and export your contacts from anywhere. Try Phone Pilot today and see the difference!' />
      </Head>
      <div className='Home Page'>
        <div style={{
          position: 'relative',
        }} ref={parentRef}
          className='HeaderContainer'
        >

          <Header />
          <ShapeMotion img="/shapes/Vector-3.svg" ref={parentRef}
            dragConstraints={{ left: "100%", right: "100%", top: 0, bottom: 10 }} />
        </div>

        {/* <Image src="/shapes/Vector-2.svg" alt="PhonePilot" width={250} height={100} className='Shape Shape2' /> */}
        {/* <Image src="/shapes/Vector-1.svg" alt="PhonePilot" width={250} height={100} className='Shape Shape1' /> */}
        {/* <Image src="/shapes/Vector.svg" alt="PhonePilot" width={250} height={100} className='Shape Shape4' /> */}
        {/* <Image src="/shapes/Ellipse 2.svg" alt="PhonePilot" width={250} height={100} className='Shape Shape5' /> */}
        <div className='Content'>

          <Landing />
          <Cards />
        </div>
        <Footer />
      </div >
    </>
  )
}
