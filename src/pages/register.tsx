import React, { useState } from 'react'
import Header from '../../components/core/Header'
import ShapeMotion from '../../components/core/ShapeMotion'
import { PrimaryButton } from '../../components/core/Buttons'
import { createUserWithEmailAndPassword } from 'firebase/auth'
// import Link from 'react-dom'
import Router, { useRouter } from 'next/router'
import { auth } from './lib/firebase';
import { db } from "./lib/firebase";
import { collection } from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore";



const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const registerWithEmailAndPassword = async (
    //     fullName: string,
    //     email: string,
    //     password: string,
    //     // id: string
    // ) => {
    //     try {
    //         const { user } = await createUserWithEmailAndPassword(
    //             auth,
    //             email,
    //             password
    //         );
    //         await saveUser(fullName, email, user.uid);
    //         return user;
    //     } catch (error) {
    //         console.log("Error registering user:", error);
    //         throw error;
    //     }
    // };
    // const handleRegister = async () => {
    //     try {
    //         await registerWithEmailAndPassword(fullName, email, password);
    //         // Registration successful, do something here (e.g. redirect to dashboard)
    //         console.log('resgistered')
    //     } catch (error) {
    //         console.log("Error registering user:", error);
    //     }
    // };

    // const saveUser = async (
    //     fullName: string,
    //     email: string,
    //     // id: string,
    //     uid: string
    // ) => {
    //     const usersCollectionRef = collection(db, "users");
    //     const userDocRef = doc(usersCollectionRef, uid);
    //     try {
    //         await setDoc(userDocRef, {
    //             fullName,
    //             email,
    //             // id,
    //         });
    //     } catch (error) {
    //         console.log("Error saving user:", error);
    //         throw error;
    //     }
    // };

    const Router = useRouter();
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
                        onChange={(e) => { setFullName(e.target.value) }}
                    />
                    <input placeholder='E-mail' type='text'

                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <input placeholder='Password' type='password'
                        onChange={(e) => { setPassword(e.target.value) }}

                    />
                    <PrimaryButton text="Login" />
                    <p>Already have an account ? <span
                        onClick={() => Router.push('/login')}
                    >Login Now</span></p>
                </div>
            </div>
        </div>
    )
}

export default Register