import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { UpdateButton, DeleteButton, PrimaryButton } from '../../core/Buttons'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/pages/api/firebase';

const ContactField = (props: any) => {
    const contact = props.contact;
    const [name, setName] = useState(contact.name)
    const [number, setNumber] = useState(contact.number)
    const [isUpdating, setIsUpdating] = useState(false)
    const [newName, setNewName] = useState(name)
    const [newNumber, setNewNumber] = useState(number)
    const updateUser = () => {
        const contactDoc = doc(db, "Contacts", contact.id)
        const newFields = {
            name: newName,
            number: newNumber
        }
        updateDoc(contactDoc, newFields).then(() => {
            setIsUpdating(false)
            props.onChange();
            setNumber(newNumber)
            setName(newName)
        })

    }
    const deleteUser = () => {
        const contactDoc = doc(db, "Contacts", contact.id)
        deleteDoc(contactDoc).then(() => {
            props.onChange();
        })
    }
    return (
        <div className='Contact'>
            <div className='ContactData'>
                <Image src="/icons/contact.svg" width={40} height={40} alt='ContactIcon' />
                <div className="ContactInfos">
                    {isUpdating ? (
                        <input className='ContactName' type='text' value={newName} onChange={(e: any) => setNewName(e.target.value)} />
                    ) : (
                        <p className='ContactName'>{name}</p>
                    )}
                    <div className='NumberContainer'>
                        <Image src="/icons/phone.svg" width={18} height={18} alt='Phone' />
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
            <div className="Actions">

                {
                    isUpdating ? (
                        <>
                            <PrimaryButton text="Save"
                                onClick={updateUser}
                            />
                            <UpdateButton text="Cancel"

                                onClick={() => {
                                    setIsUpdating(false)
                                    setNewNumber(number)
                                    setNewName(name)
                                }
                                }
                            />
                        </>
                    ) : (
                        <>
                            <UpdateButton text="Update"
                                onClick={() => setIsUpdating(true)}
                            />
                            <DeleteButton text="Delete"
                                onClick={deleteUser}
                            />
                        </>

                    )
                }
            </div>
        </div>
    )
}

export default ContactField