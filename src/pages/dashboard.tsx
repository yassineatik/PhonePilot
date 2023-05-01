import React, { useEffect, useState } from 'react'
import { auth } from './api/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './api/firebase';
import DashboardHeader from '../../components/core/DashboardHeader'
import Contacts from '../../components/dashboard/Contacts'

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
            <Contacts user={authUser} />
        </div>
    )
}

export default Dashboard