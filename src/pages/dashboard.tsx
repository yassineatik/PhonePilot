import React, { useEffect, useState } from 'react'
import { auth } from './api/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './api/firebase';



const Dashboard = () => {
    const Router = useRouter()
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

    const addContact = async () => {
        await addDoc(contactsCollection, {
            name: "Imane",
            number: "+212 61818181",
            user_id: authUser.uid
        })
    }
    if (authUser) {
        return (
            <div>
                Hello {authUser.displayName}
                <button

                    onClick={() => {
                        signOut(auth)
                    }}
                >Sign Out</button>

                {contacts.map((contact: any) => {
                    return (<div>
                        {/* id : {contact.id}<br /> */}
                        name : {contact.name}<br />
                        number : {contact.number}<br />
                        {/* user_id : {contact.user_id}<br /><br /> */}
                    </div>)
                })}

                <button
                    onClick={addContact}
                >Add</button>
            </div>
        )
    }
}

export default Dashboard