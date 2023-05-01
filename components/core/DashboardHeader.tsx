import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import UserButton from './UserButton';
import { auth } from '../../src/pages/api/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../src/pages/api/firebase';
const DashboardHeader = () => {
    const Router = useRouter();
    const [authUser, setAuthUser]: any = useState()
    const [contacts, setContacts]: any = useState([]);
    const contactsCollection = collection(db, "Contacts");
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {

            const getContacts = async () => {
                const q: any = query(contactsCollection, where("user_id", "==", user?.uid));
                const data: any = await getDocs(q);
                setContacts(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })))
            }
            if (user) {
                setAuthUser(user);
                getContacts()
            }
            else {
                setAuthUser(null);
                Router.push('/login')
            }
        })
    }, [authUser])
    return (
        <div className='DashboardHeader'>
            <Image src="/logo.svg" width={300} height={120} alt='phonepilot' className='Logo Hover' onClick={() => Router.push('/')} />
            <UserButton name={authUser}
                
            />
        </div>
    )
}

export default DashboardHeader