'use client'

import { useState } from 'react'
import { FloatLabel } from 'primereact/floatlabel'
import { InputText } from 'primereact/inputtext'
import { Panel } from 'primereact/panel'
import { Checkbox } from 'primereact/checkbox'

import PetSitting from './petSitting'

const headerText = "Thank you for inquiring about dog sitting services. Please fill out the form below and I'll contact you as soon as possible!"

export default function Contact() {
    const [ petSitting, setPetSitting ] = useState(false)
    const [ dogwalking, setDogWalking ] = useState(false)
    const [ babySitting, setBabySitting ] = useState(false)

    return (
        <form className='mt-3'>
            <Panel header={headerText}>
                <section>
                    <span className='font-bold text-700 text-xl' >Your Contact Information</span>
                    <div className='flex flex-column md:flex-row mt-4'>
                        <div className='p-inputgroup flex-1 mr-3 mb-2 md:mb-0'>
                            <span className='p-inputgroup-addon'>Name</span>
                            <InputText id='name' />
                        </div>
                        <div className='p-inputgroup flex-1 mr-3 mb-2 md:mb-0'>
                            <span className='p-inputgroup-addon'>Phone</span>
                            <InputText id='phone' />
                        </div>
                        <div className='p-inputgroup flex-1 mr-3 mb-2 md:mb-0'>
                            <span className='p-inputgroup-addon'>Email</span>
                            <InputText id='email' />
                        </div>
                    </div>
                </section>
                <section className='mt-5'>
                    <span className='font-bold text-700 text-xl' >Services Requested</span>
                    <div className="flex align-items-center mt-2">
                        <Checkbox inputId="dogSitting" name="dogSitting" checked={petSitting} onChange={e => setPetSitting(e.checked)} />
                        <label htmlFor="dogSitting" className="ml-2">Pet Sitting</label>
                    </div>
                    <div className="flex align-items-center mt-2">
                        <Checkbox inputId="dogwalking" name="dogwalking" checked={dogwalking} onChange={e => setDogWalking(e.checked)} />
                        <label htmlFor="dogwalking" className="ml-2">Dog Walking</label>
                    </div>
                    <div className="flex align-items-center mt-2">
                        <Checkbox inputId="babysitting" name="babysitting" checked={babySitting} onChange={e => setBabySitting(e.checked)} />
                        <label htmlFor="babysitting" className="ml-2">Baby Sitting</label>
                    </div>
                </section>
                { petSitting && <PetSitting /> }
            </Panel>
        </form>
    )
}