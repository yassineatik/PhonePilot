import React, { useState } from 'react'
import Header from '../../components/core/Header'
import ShapeMotion from '../../components/core/ShapeMotion'
import { PrimaryButton } from '../../components/core/Buttons'
// import Link from 'react-dom'
import Router, { useRouter } from 'next/router'
// import { auth } from './api/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'
import { app } from "./api/firebase"
// import { error } from 'console'
import { auth } from "./api/firebase"




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Router = useRouter();
    // const auth = getAuth(app);
    const { user, loading }: any = useAuthState(auth)

    if (loading) {
        return <h1>Loading...</h1>
    }

    // if (!user) {
    //     return <div>Hello </div>
    // }

    const handleLogin = () => {
        // console.log(auth.currentUser);
        // try {
        signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            console.log(userCredentials)
            if (userCredentials) {
                Router.push('/dashboard')
            }
        }).catch((error) => {
            console.log(error);
        })

        // console.log(result.user)
        // Router.push('/dashboard');
        // } catch (error) {
        // console.error(error);
        // }
    };
    return (
        <div className='Login Page'>
            <div className='LoginContent'>
                <Header />
                <ShapeMotion img="/shapes/Vector-3.svg"
                    dragConstraints={{ left: "100%", right: "100%", top: 0, bottom: 10 }} />
                <ShapeMotion img="/shapes/Ellipse 2.svg" className="box2"
                    dragConstraints={{ left: "100%", right: "100%", top: 0, bottom: 10 }} />
                <div className="LoginForm">
                    <h2 className='LoginTitle'>Sign In</h2>
                    <input placeholder='E-mail' type='text'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input placeholder='Password' type='password'
                        onChange={(e) => setPassword(e.target.value)}

                    />
                    <PrimaryButton text="Login"
                        onClick={handleLogin}
                    />
                    <p>Don&apos;t have an account ? <span
                        onClick={() => Router.push('/register')}
                    >Create Account</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login