import Header from '../../components/core/Header'
import ShapeMotion from '../../components/core/ShapeMotion'
import { PrimaryButton } from '../../components/core/Buttons'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react'
import { auth } from './api/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { AiOutlineLoading3Quarters } from "react-icons/ai"





const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const Router = useRouter()
    const [authUser, setAuthUser]: any = useState()
    useEffect(() => {
        Router.prefetch('/dashboard')
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                Router.push('/dashboard')
            }
            else {
                setAuthUser(null);
                // Router.push('/login')
            }
        })
    }, [authUser])
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            console.log(userCredentials)
            if (userCredentials) {
                setIsLoading(false);
                // toast("Wow so easy !")
                toast.success("Logged In Successfully", {
                    position: toast.POSITION.TOP_LEFT
                });
                Router.push('/dashboard')
            }
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
            toast.error("Email or password is incorrect", {
                position: toast.POSITION.TOP_LEFT
            })
            setPassword('');
        })

        // console.log(result.user)
        // Router.push('/dashboard');
        // } catch (error) {
        // console.error(error);
        // }
    };
    return (
        <>
            <Head>
                <title>PhonePilot - Login</title>
                <link rel="icon" type="image/x-icon" href="/Favicon.png" />

            </Head>
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
                            value={password}

                        />
                        {isLoading ? (
                            <PrimaryButton text={<AiOutlineLoading3Quarters className='LoadingIcon' />} />
                        ) : <PrimaryButton text="Login"
                            onClick={handleLogin}
                        />
                        }
                        <p>Don&apos;t have an account ? <span
                            onClick={() => Router.push('/register')}
                        >Create Account</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login