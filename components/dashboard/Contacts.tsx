import Image from 'next/image'
import React, { useEffect, useReducer, useState, useMemo } from 'react'
import { auth } from "../../src/pages/api/firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../src/pages/api/firebase";
import { DeleteButton, UpdateButton } from '../core/Buttons'
import ContactField from './imports/ContactField'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';


const Contacts = (props: any) => {
    const [contacts, setContacts]: any = useState([]);
    const contactsCollection = collection(db, "Contacts");
    const [isReloading, setIsReloading]: any = useState(true);
    const id: any = props.user?.uid
    useEffect(() => {

        const listen = onAuthStateChanged(auth, (user) => {
            const getContacts = async () => {
                const q: any = query(contactsCollection, where("user_id", "==", user?.uid));
                const data: any = await getDocs(q).then((data) => {
                    setContacts(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })))
                });
                console.log("yasine")
            }

            getContacts()
        })
    }, [isReloading])
    const addContact = () => {
        addDoc(contactsCollection, {
            name: "test",
            number: "06xxxxxxx",
            user_id: id
        }).then(() => {
            setIsReloading(!isReloading)
        })
    }

    const deleteUser = (id: string) => {
        const contactDoc = doc(db, "Contacts", id)
        deleteDoc(contactDoc).then(() => {
            setIsReloading(!isReloading)
        })
    }
    return (
        <div className='Contacts'>
            <div className="Title">
                <h1>Contacts</h1>
                <div className="Actions"
                    onClick={addContact}
                >

                    <span>+</span>
                    <span>Sort</span>
                </div>
            </div>
            <div className="ContactsList">
                {contacts.map((contact: any, key: Number) => {
                    return (
                        <ContactField contact={contact} key={contact.id} id={contact.id}
                            // onChange={handleReload}
                            onDelete={(id: string) => deleteUser(id)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Contacts