import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { auth } from "../../src/pages/api/firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../src/pages/api/firebase";
import { DeleteButton, UpdateButton } from '../core/Buttons'
import ContactField from './imports/ContactField'

const Contacts = (props: any) => {
    const Router = useRouter()
    const user = props.user
    const [contacts, setContacts]: any = useState([]);
    const contactsCollection = collection(db, "Contacts");
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {

            const getContacts = async () => {
                const q: any = query(contactsCollection, where("user_id", "==", user?.uid));
                const data: any = await getDocs(q);
                setContacts(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })))
            }
            getContacts()
        })
    }, [user])
    // console.log("User from Contacts", user.uid)
    console.log("contacts", contacts)
    return (
        <div className='Contacts'>
            <div className="Title">
                <h1>Contacts</h1>
                <div className="Actions">

                    <span>+</span>
                    <span>Sort</span>
                </div>
            </div>
            <div className="ContactsList">
                {/* <div className='Contact'>
                    <div className='ContactData'>
                        <Image src="/icons/contact.svg" width={40} height={40} alt='ContactIcon' />
                        <div className="ContactInfos">

                            <p className='ContactName'>Yassine</p>
                            <div className='NumberContainer'>
                                <Image src="/icons/phone.svg" width={18} height={18} alt='Phone' />
                                <p className='ContactNumber'>+212 681125793</p>
                            </div>
                        </div>
                    </div>
                    <div className="Actions">
                        <UpdateButton text="Update" />
                        <DeleteButton text="Delete" />
                    </div>
                </div> */}
                {/* <div className='Contact'>
                    <div className='ContactData'>
                        <Image src="/icons/contact.svg" width={40} height={40} alt='ContactIcon' />
                        <div className="ContactInfos">

                            <p className='ContactName'>Yassine</p>
                            <div className='NumberContainer'>
                                <Image src="/icons/phone.svg" width={18} height={18} alt='Phone' />
                                <p className='ContactNumber'>+212 681125793</p>
                            </div>
                        </div>
                    </div>
                    <div className="Actions">
                        <UpdateButton text="Update" />
                        <DeleteButton text="Delete" />
                    </div>
                </div> */}
                {/* <ContactField />
                <ContactField />
                <ContactField />
                <ContactField />
                <ContactField />
                <ContactField />
                <ContactField />
                <ContactField />
                <ContactField />
                <ContactField />
                <ContactField />
                <ContactField /> */}
                {contacts.map((contact: any, key: Number) => {
                    return (
                        <ContactField contact={contact} key={key} />
                    )
                })}
            </div>
        </div>
    )
}

export default Contacts