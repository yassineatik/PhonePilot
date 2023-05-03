import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div >
            <footer className='Footer'>
                <hr></hr>
                <p className='C3'>Website Made With
                    <Image src="/icons/love.svg" width={100} height={40} alt='Love' />
                    By <span className='C2'
                        onClick={() => window.open('https://www.linkedin.com/in/yassineatik/', "_blank")}
                    >Yassine Atik</span>
                </p>
            </footer>
        </div>
    )
}

export default Footer