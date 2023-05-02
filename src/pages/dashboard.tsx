import React, { useEffect, useState } from 'react'
import { auth } from './api/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './api/firebase';
import DashboardHeader from '../../components/core/DashboardHeader'
import Contacts from '../../components/dashboard/Contacts'
import { motion } from 'framer-motion'

const Dashboard = () => {
    const Router = useRouter()
    const [authUser, setAuthUser]: any = useState()
    const [contacts, setContacts]: any = useState([]);
    const contactsCollection = collection(db, "Contacts");


    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {

            if (user) {
                setAuthUser(user);
                console.log("From Dashtest", authUser)
            }
            else {
                setAuthUser(null);
                Router.push('/login')
            }
        })
        console.log(authUser?.uid)
        listen();
    }, [authUser])

    return (
        <div className='Dashboard Page'>
            <DashboardHeader />
            <motion.div className='box12' drag
                dragSnapToOrigin={true}
                dragElastic={0.2}
                whileTap={{ scale: 1.2, opacity: 1, cursor: "url('/Grabbing.svg'),auto" }}
                whileHover={{
                    cursor: "url('/Grab.svg'),auto",
                    scale: 1.2,
                    opacity: 1
                }}
                whileDrag={{
                    cursor: "url('/Grabbing.svg'),auto",
                }}
                // onDragEnd={(e) => { }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="rgba(247, 247, 98, 0.59)" d="M58.3,-19.6C67.5,9.2,61.1,42.3,42.3,55.3C23.4,68.4,-8,61.3,-27,45.5C-46,29.8,-52.6,5.3,-46,-20C-39.4,-45.2,-19.7,-71.2,2.4,-72C24.6,-72.8,49.2,-48.4,58.3,-19.6Z" transform="translate(100 100)" />
                </svg>
            </motion.div>
            <motion.div className='box12 box2' drag
                dragSnapToOrigin={true}
                dragElastic={0.2}
                whileTap={{ scale: 1.2, opacity: 1, cursor: "url('/Grabbing.svg'),auto" }}
                whileHover={{
                    cursor: "url('/Grab.svg'),auto",
                    scale: 1.2,
                    opacity: 1
                }}
                whileDrag={{
                    cursor: "url('/Grabbing.svg'),auto",
                }}
                // onDragEnd={(e) => { }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF0066" d="M36.7,-42.4C48.4,-34,59.3,-23.2,64.6,-9.1C69.8,5.1,69.5,22.5,62.4,37.2C55.3,52,41.5,64.1,25.6,69.5C9.7,74.9,-8.3,73.6,-22.7,66.5C-37.1,59.5,-47.9,46.7,-56.7,32.3C-65.5,17.9,-72.3,2,-73.2,-16.4C-74.1,-34.7,-69,-55.4,-55.8,-63.7C-42.6,-71.9,-21.3,-67.5,-4.4,-62.3C12.5,-57.1,25,-50.9,36.7,-42.4Z" transform="translate(100 100)" />
                </svg>
            </motion.div>

            <Contacts user={authUser} />
        </div >
    )
}

export default Dashboard