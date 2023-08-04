import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { UpdateButton, DeleteButton, PrimaryButton } from '../../core/Buttons'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/pages/api/firebase';
import { LoadingButton } from '@mui/lab';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import useSound from 'use-sound'
import { MdPermContactCalendar } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';


const ContactField = (props: any) => {
    const { contact, id, onDelete } = props;
    const [name, setName] = useState(contact.name)
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(contact.number)
    const [isUpdating, setIsUpdating] = useState(props.isUpdating ? props.isUpdating : false)
    const [isDeleting, setIsDeleting] = useState(false)
    const [newName, setNewName] = useState(name)
    const [newNumber, setNewNumber] = useState(number)

    const updateUser = () => {
        setLoading(true)
        const contactDoc = doc(db, "Contacts", contact.id)
        const newFields = {
            name: newName,
            number: newNumber
        }
        updateDoc(contactDoc, newFields).then(() => {
            setIsUpdating(false)
            // props.onChange();
            setNumber(newNumber)
            setName(newName)
            setLoading(false)
        })

    }
    const deleteUser = () => {
        setLoading(true)
        onDelete(id)
        setLoading(false)
    }
    return (
        <div className='Contact'>
            <div className='ContactData'>
                <Image src="/icons/contact.svg" width={40} height={40} alt='ContactIcon' />
                <div className="ContactInfos">
                    <div style={{ display: "flex", flexDirection: 'row', alignItems: "center", gap: '0.5rem' }}>

                        <MdPermContactCalendar size={22} color='#F6F662' fontSize={20} />

                        {isUpdating ? (
                            <input className='ContactName' type='text' value={newName} onChange={(e: any) => setNewName(e.target.value)} />
                        ) : (
                            <p className='ContactName'>{name}</p>
                        )}
                    </div>
                    <div className='NumberContainer'>
                        <div style={{ display: "flex", flexDirection: 'row', alignItems: "center", gap: '0.5rem' }}>
                            <BsTelephone size={20} color='#F6F662' fontSize={20} />
                            {
                                isUpdating ? (
                                    <>
                                        <input className='ContactNumber' value={newNumber} onChange={(e: any) => setNewNumber(e.target.value)} />
                                    </>
                                ) : (
                                    <>

                                        <p className='ContactNumber'>{number}</p>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="Actions">

                {
                    isUpdating ? (
                        <>
                            {loading ? (
                                <PrimaryButton text={<AiOutlineLoading3Quarters className='LoadingIcon' />} />
                            ) : <PrimaryButton text="Save"
                                onClick={updateUser}
                            />
                            }
                            <UpdateButton text="Cancel"

                                onClick={() => {
                                    setIsUpdating(false)
                                    setNewNumber(number)
                                    setNewName(name)
                                }
                                }
                            />
                        </>
                    ) : isDeleting ? (<>
                        <DeleteButton text="Confirm"
                            onClick={deleteUser}
                        />
                        <UpdateButton text="Cancel"
                            onClick={() => setIsDeleting(false)}
                        /></>) : (
                        <>
                            <UpdateButton text="Update"
                                onClick={() => setIsUpdating(true)}
                            />
                            <DeleteButton text="Delete"
                                onClick={() => setIsDeleting(true)}
                            />
                        </>

                    )
                }
            </div>
        </div>
    )
}

export default ContactField