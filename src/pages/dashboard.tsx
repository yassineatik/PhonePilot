import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './api/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';


const dashboard = () => {
    const Router = useRouter()
    const [authUser, setAuthUser]: any = useState()
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                console.log(user);
            }
            else {
                setAuthUser(null);
                Router.push('/login')
            }
        })
    }, [authUser])
    if (authUser) {
        return (
            <div>
                Hello {authUser.displayName}
                <button

                    onClick={() => {
                        signOut(auth)
                    }}
                >Sign Out</button>
            </div>
        )
    }
}

export default dashboard