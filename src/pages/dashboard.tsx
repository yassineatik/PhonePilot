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
                <svg width="202" height="199" viewBox="0 0 202 199" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd" d="M104.043 3.01123C126.669 -0.636344 152.776 -3.6143 170.671 10.7137C188.451 24.9493 186.967 51.6276 192.401 73.7562C197.358 93.9446 204.77 113.561 200.941 133.994C196.728 156.471 189.395 181.243 169.992 193.325C150.857 205.24 126.576 194.762 104.043 194.327C82.1033 193.903 58.8375 201.939 39.9181 190.813C20.3376 179.298 9.34401 157.143 3.47634 135.187C-2.17823 114.028 -1.10797 91.1774 7.96425 71.2454C16.4483 52.6055 34.6866 41.7991 51.378 29.9451C67.8588 18.2406 84.0914 6.22772 104.043 3.01123Z" fill="url(#paint0_radial_53_243)" fill-opacity="0.8" />
                    <defs>
                        <radialGradient id="paint0_radial_53_243" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.7125 62.1875) rotate(35.3652) scale(165.035 164.238)">
                            <stop stop-color="#F7F762" />
                            <stop offset="0.795745" stop-color="#F7F762" stop-opacity="0.4" />
                            <stop offset="0.898625" stop-color="#E8E856" stop-opacity="0.36" />
                            <stop offset="1" stop-color="#E8E856" stop-opacity="0.37" />
                        </radialGradient>
                    </defs>
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
                <svg width="237" height="217" viewBox="0 0 237 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M127.213 0.00828521C156.95 0.267743 187.644 5.68987 208.82 26.5968C230.116 47.6227 237.947 78.3841 236.91 108.313C235.911 137.167 223.847 164.248 203.348 184.551C182.966 204.737 155.87 216.197 127.213 216.957C97.7374 217.738 69.3715 207.859 46.9375 188.698C22.4224 167.759 0.556644 140.574 0.0112091 108.313C-0.540489 75.6824 19.3433 46.3008 44.1725 25.1602C67.0754 5.65974 97.1514 -0.254012 127.213 0.00828521Z" fill="url(#paint0_radial_110_361)" fill-opacity="0.9" />
                    <defs>
                        <radialGradient id="paint0_radial_110_361" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(54.8063 67.8125) rotate(33.411) scale(189.162 183.325)">
                            <stop stop-color="#B3B3B3" />
                            <stop offset="0.795745" stop-color="#B3B3B3" stop-opacity="0.26" />
                            <stop offset="0.898625" stop-color="#B3B3B3" stop-opacity="0.31" />
                            <stop offset="1" stop-color="#B3B3B3" stop-opacity="0.39" />
                        </radialGradient>
                    </defs>
                </svg>

            </motion.div>

            <Contacts user={authUser} />
        </div >
    )
}

export default Dashboard