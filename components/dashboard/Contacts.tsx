import Image from 'next/image'
import React, { useEffect, useReducer, useState, useMemo } from 'react'
import { auth } from "../../src/pages/api/firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { addDoc, collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from "../../src/pages/api/firebase";
import { DeleteButton, UpdateButton } from '../core/Buttons'
import ContactField from './imports/ContactField'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { toast } from "react-toastify"
import AddContact from './imports/AddContact';
import useSound from 'use-sound'




const Contacts = (props: any) => {
    const [play]: any = useSound('/sounds/addContact.mp3', { volume: 0.4 });
    const [contacts, setContacts]: any = useState([]);
    const contactsCollection = collection(db, "Contacts");
    const [isReloading, setIsReloading]: any = useState(true);
    const [isAdding, setIsAdding]: any = useState(false);
    const [playDelete]: any = useSound('/sounds/delete.mp3', { volume: 0.4 });
    const [playContactAdded]: any = useSound('/sounds/contactAdded.mp3', { volume: 0.2 });



    const id: any = props.user?.uid
    useEffect(() => {

        const listen = onAuthStateChanged(auth, (user) => {
            const getContacts = async () => {
                const q: any = query(contactsCollection, where("user_id", "==", user ? user.uid : ''), orderBy("created_at", "desc"));
                const data: any = await getDocs(q).then((data) => {
                    setContacts(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })))
                }).catch((err) => {
                    toast.error(err)
                    console.log(err)
                });
                console.log("yasine")
            }

            getContacts()
        })
    }, [isReloading])
    const deleteUser = (id: string) => {
        const contactDoc = doc(db, "Contacts", id)
        deleteDoc(contactDoc).then(() => {
            setIsReloading(!isReloading)
            playDelete();
        })
    }
    const saveNewContact = (data: any) => {
        addDoc(contactsCollection, data).then(() => {
            setIsReloading(!isReloading)
            setIsAdding(false)
            playContactAdded();
        })
    }
    return (
        <div className='Contacts'>
            <div className="Title">
                <h1>Contacts</h1>
                <div className="Actions"
                >

                    <span className='AddContact Hover'
                        onClick={() => {
                            play()
                            setIsAdding(true)
                        }}
                    >+</span>
                </div>
            </div>
            <div className="ContactsList">
                {isAdding ? (<>
                    <AddContact
                        Save={(data: any) => saveNewContact(data)}
                        id={props.user?.uid}
                        Cancel={
                            () => setIsAdding(false)
                        }
                    />
                </>
                ) : (null)}
                {contacts.map((contact: any, key: Number) => {
                    return (
                        <ContactField contact={contact} key={contact.id} id={contact.id}
                            onDelete={(id: string) => deleteUser(id)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Contacts