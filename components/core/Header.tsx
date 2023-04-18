import React from 'react'
import Image from 'next/image'
import { PrimaryButton } from './Buttons'

// import hoverSound from '../../public/sounds/hoverSound.mp3'

const Header = (props: any) => {
    return (
        <div className='Header' ref={props.ref}>
            <Image src="/logo.svg" alt="PhonePilot" width={250} height={100} className='Logo' />
            <div className='Actions'>
                <PrimaryButton text="Login" />
                <PrimaryButton text="SignUp" />
            </div>
        </div>
    )
}

export default Header