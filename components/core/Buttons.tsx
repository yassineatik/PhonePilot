import React from 'react'
import useSound from 'use-sound'

export const PrimaryButton = (props: any) => {
    const [play]: any = useSound('/sounds/hoverSound.mp3', { volume: 0.2 });
    const [playClick]: any = useSound('/sounds/clickSound.mp3', { volume: 1 });
    return (
        <button className='Button' onMouseEnter={play}
            onClick={playClick}
            {...props}
        >{props.text}</button>
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
