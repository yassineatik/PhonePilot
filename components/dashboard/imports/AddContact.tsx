import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { UpdateButton, DeleteButton, PrimaryButton } from '../../core/Buttons'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/pages/api/firebase';
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import firebase from "firebase/app";


const AddContact = (props: any) => {
    const { onDelete } = props;
    // const [name, setName] = useState(contact.name)
    const [loading, setLoading] = useState(false);
    // const [number, setNumber] = useState(contact.number)
    const [isUpdating, setIsUpdating] = useState(true)
    // const [isDeleting, setIsDeleting] = useState(false)
    const [newName, setNewName] = useState()
    const [newNumber, setNewNumber] = useState()
    const updateUser = () => {
        const timestamp = Date.now();
        const data = {
            name: newName,
            number: newNumber,
            user_id: props.id,
            created_at: timestamp
        }
        props.Save(data)
    }
    return (
        <div className='Contact'>
            <div className='ContactData'>
                <Image src="/icons/contact.svg" width={40} height={40} alt='ContactIcon' />
                <div className="ContactInfos">
                    <input className='ContactName' placeholder='Contact name' type='text' value={newName} onChange={(e: any) => setNewName(e.target.value)} />

                    <div className='NumberContainer'>
                        <Image src="/icons/phone.svg" width={18} height={18} alt='Phone' />
                        <input className='ContactNumber' placeholder='Contact number' value={newNumber} onChange={(e: any) => setNewNumber(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="Actions">
                <>
                    {loading ? (
                        <PrimaryButton text={<AiOutlineLoading3Quarters className='LoadingIcon' />} />
                    ) : <PrimaryButton text="Save"
                        onClick={updateUser}
                    />
                    }
                    <UpdateButton text="Cancel"

                        onClick={() => {
                            props.Cancel()
                        }
                        }
                    />
                </>





            </div>
        </div>

    )

}

export default AddContact