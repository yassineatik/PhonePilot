import React, { useState } from 'react'
import Header from '../../components/core/Header'
import ShapeMotion from '../../components/core/ShapeMotion'
import { PrimaryButton } from '../../components/core/Buttons'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getAuth, updateProfile } from 'firebase/auth';

// import Link from 'react-dom'
import Router, { useRouter } from 'next/router'
import { auth } from './api/firebase';
import { db } from "./api/firebase";
import { collection } from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore";
import { error } from 'console'



const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Router = useRouter();

    const [userInformation, setUserInformation] = useState({});



    // const handleRegister = async () => {
    const handleRegister = async () => {
        const auth: any = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                // setUserInformation({
                //     email: user.email,
                //     displayName: user.displayName,
                //     uid: user.uid,
                //     // accessToken: user.getIdToken,
                // });
                await updateProfile(auth.currentUser, { displayName }).then(result => {
                    console.log(result)
                })
                console.log("user : : : ", user)
            }).catch(err => {
                console.log(err)
            })
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
    )
}

export default Register