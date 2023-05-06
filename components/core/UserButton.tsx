import React, { useState } from 'react'
import Image from 'next/image'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { HiDocumentDownload } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { auth } from '@/pages/api/firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from "../../src/pages/api/firebase";

import { toast } from "react-toastify"

import useSound from 'use-sound'
import { read, utils, writeFile } from 'xlsx';


const UserButton = (props: any) => {
    const [contacts, setContacts]: any = useState([]);
    const contactsCollection = collection(db, "Contacts");

    const exportContacts = () => {

        const listen = onAuthStateChanged(auth, (user) => {
            const getContacts = async () => {
                const q: any = query(contactsCollection, where("user_id", "==", user ? user.uid : ''), orderBy("created_at", "desc"));
                const data: any = await getDocs(q).then((data) => {
                    setContacts(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })))
                }).catch((err) => {
                    toast.error(err)
                    // console.log(err)
                });
            }

            getContacts()
            const filteredData: any = contacts.map(({ id, user_id, created_at, ...rest }: { id: string, user_id: string, created_at: string, [key: string]: any }) => rest);
            // console.log(filteredData)
            const worksheet = utils.json_to_sheet(filteredData);
            const workbook = utils.book_new();
            utils.book_append_sheet(workbook, worksheet, "Dates");
            writeFile(workbook, "Contacts.xlsx", { compression: true });
        })
    }
    // const name = props.name
    const name = props.name?.displayName
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`UserDiv Hover ${isOpen ? 'Open' : null}`}
            onClick={() => { setIsOpen(!isOpen) }}
            {...props}
        >
            <p>
                Hi {name} 👋
                <Image src="/icons/dropDown.svg" width={46} height={46} alt='Drop' />
            </p>
            {isOpen ? (

                <ul className='Menu'>
                    <li
                        onClick={exportContacts}
                    >Export Contacts <HiDocumentDownload /> </li>
                    <li
                        onClick={() => { signOut(auth) }}
                    >Log Out <BiLogOut /></li>
                </ul>
            ) : null}

        </div>
        // </div>
    )
}

export default UserButton