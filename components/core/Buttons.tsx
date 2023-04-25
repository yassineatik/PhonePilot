import React from 'react'
import useSound from 'use-sound'
import Tilt from 'react-parallax-tilt'
import Router from 'next/router'

export const PrimaryButton = (props: any) => {
    const [play]: any = useSound('/sounds/hoverSound.mp3', { volume: 0.1 });
    const [playClick]: any = useSound('/sounds/clickSound.mp3', { volume: 0.4 });
    const handleClick = () => {
        playClick();
        if (props.url) {
            Router.push(props.url)
        }
    }
    return (
        <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={30}
        >
            <button className='Button' onMouseEnter={play}
                onClick={handleClick}
                {...props}

            >{props.text}
            </button>
        </Tilt>
    )
}

export const OutlineButton = (props: any) => {
    const [play]: any = useSound('/sounds/hoverSound.mp3', { volume: 0.2 });
    const [playClick]: any = useSound('/sounds/clickSound.mp3', { volume: 1 });
    return (
        <button
            className='Button Outline'
            {...props}
            onMouseEnter={play}
            onClick={playClick}
        >{props.text}</button>
    )
}
