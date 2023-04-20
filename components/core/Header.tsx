import React from 'react'
import Image from 'next/image'
import { PrimaryButton } from './Buttons'
import Router, { useRouter } from 'next/router'

// import hoverSound from '../../public/sounds/hoverSound.mp3'

const Header = (props: any) => {
    const Router = useRouter();
    return (
        <div className='Header' ref={props.ref}>
            <Image src="/logo.svg" alt="PhonePilot" width={250} height={100} className='Logo'
                onClick={() => Router.push('/')}
            />
            <div className='Actions'>
                <PrimaryButton text="Login" url="/login"
                />
                <PrimaryButton text="SignUp" url="/register" />
            </div>
        </div>
    )
}

export default Header