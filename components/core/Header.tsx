import React from 'react'
import Image from 'next/image'
import useSound from 'use-sound'
// import hoverSound from '../../public/sounds/hoverSound.mp3'

const Header = () => {
    const [play]: any = useSound('/sounds/hoverSound.mp3', { volume: 0.2 });
    const [playClick]: any = useSound('/sounds/clickSound.mp3', { volume: 1 });
    return (
        <div className='Header'>
            <Image src="/logo.svg" alt="PhonePilot" width={250} height={100} className='Logo' />
            <div className='Actions'>
                <button className='Button' onMouseEnter={play}
                    onClick={playClick}

                >Login</button>
                <button className='Button' onMouseEnter={play}
                    onClick={playClick}
                >Sign Up</button>
            </div>
        </div>
    )
}

export default Header