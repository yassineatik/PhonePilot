import React, { useEffect, useState } from 'react'
import Header from '../../components/core/Header'
import ShapeMotion from '../../components/core/ShapeMotion'
import { PrimaryButton } from '../../components/core/Buttons'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getAuth, updateProfile } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './api/firebase'
// import Link from 'react-dom'
import Router, { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { stringify } from 'querystring'
import Head from 'next/head'



const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Router = useRouter();
    const { user, loading }: any = useAuthState(auth)

    const [userInformation, setUserInformation] = useState({});

    if (user) {
        return <div>Hello {user.displayName}</div>
    }


    // const handleRegister = async () => {
    const handleRegister = async () => {
        const auth: any = getAuth()
        if (!email || !password || !displayName) {
            toast.error("All fields are required", {
                position: toast.POSITION.TOP_LEFT

            })
        } else {
            if (!email.includes("@")) {
                toast.error("Enter a valid email address", {
                    position: toast.POSITION.TOP_LEFT
                })
                return;
            }
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    await updateProfile(auth.currentUser, { displayName }).then(result => {
                        console.log(result)
                    })
                    console.log("user : : : ", user)
                    toast.success("Registered Successfully", {
                        position: toast.POSITION.TOP_LEFT
                    });
                }).catch(err => {

                    // toast.error("err", {
                    //     position: toast.POSITION.TOP_LEFT
                    // });
                    const error = stringify(err);
                    if (error.includes("email-already-in-use")) {
                        toast.error("email aready in use", {
                            position: toast.POSITION.TOP_LEFT

                        })
                    }
                })
        }
    };




    return (
        <>
            <Head>
                <title>PhonePilot - Register</title>
            </Head>
            <div className='Login Page'>
                <div className='LoginContent'>
                    <Header />
                    <ShapeMotion img="/shapes/Vector-3.svg"
                        dragConstraints={{ left: "100%", right: "100%", top: 0, bottom: 10 }} />
                    <ShapeMotion img="/shapes/Ellipse 2.svg" className="box2"
                        dragConstraints={{ left: "100%", right: "100%", top: 0, bottom: 10 }} />
                    <div className="LoginForm">
                        <h2 className='LoginTitle'>Sign Up</h2>
                        <input placeholder='Full Name' type='text'
                            onChange={(e) => { setDisplayName(e.target.value) }}
                        />
                        <input placeholder='E-mail' type='text'

                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <input placeholder='Password' type='password'
                            onChange={(e) => { setPassword(e.target.value) }}

                        />
                        <PrimaryButton text="Register"
                            onClick={handleRegister}
                        />
                        <p>Already have an account ? <span
                            onClick={() => Router.push('/login')}
                        >Login Now</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register