import React, { useState } from 'react'
import Image from 'next/image'
import { UpdateButton, DeleteButton } from '../../core/Buttons'

const ContactField = (props: any) => {
    const contact = props.contact;
    const [name, setName] = useState(contact.name)
    const [number, setNumber] = useState(contact.number)
    return (
        <div className='Contact'>
            <div className='ContactData'>
                <Image src="/icons/contact.svg" width={40} height={40} alt='ContactIcon' />
                <div className="ContactInfos">

                    <p className='ContactName'>{name}</p>
                    <div className='NumberContainer'>
                        <Image src="/icons/phone.svg" width={18} height={18} alt='Phone' />
                        <p className='ContactNumber'>{number}</p>
                    </div>
                </div>
            </div>
            <div className="Actions">
                <UpdateButton text="Update" />
                <DeleteButton text="Delete" />
            </div>
        </div>
    )
}

export default ContactField