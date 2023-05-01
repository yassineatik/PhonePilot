import React from 'react'
import Image from 'next/image'
import { auth } from '@/pages/api/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';

const UserButton = (props: any) => {
    // const name = props.name
    const name = props.name?.displayName
    return (
        // <div className='UserButton'>
        <button className='UserButton Hover'
            onClick={() => { signOut(auth) }}
            {...props}
        >Hi {name} 👋
            <Image src="/icons/dropDown.svg" width={46} height={46} alt='Drop' />
        </button>
        // </div>
    )
}

export default UserButton