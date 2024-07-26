import { FloatLabel } from 'primereact/floatlabel'
import { InputText } from 'primereact/inputtext'
import { Panel } from 'primereact/panel'
import { Checkbox } from 'primereact/checkbox'

const headerText = "Thank you for inquiring about dog sitting services. Please fill out the form below and I'll contact you as soon as possible!"

export default function Contact() {
    return (
        <form className='mt-3'>
            <Panel header={headerText}>
                <section>
                    <span className='font-bold text-700 text-xl' >Your Contact Information</span>
                    <div className='flex flex-column md:flex-row mt-2'>
                        <FloatLabel className='mr-3 mb-2 md:mb-0' >
                            <InputText id='name' />
                            <label for='name'>Name</label>
                        </FloatLabel>
                        <FloatLabel className='mr-3 mb-2 md:mb-0' >
                            <InputText id='phone' />
                            <label for='phone'>Phone</label>
                        </FloatLabel>
                        <FloatLabel>
                            <InputText id='email' />
                            <label for='email'>Email</label>
                        </FloatLabel>
                    </div>
                </section>
                <section className='mt-5'>
                    <span className='font-bold text-700 text-xl' >Services Requested</span>
                    <div className="flex align-items-center mt-2">
                        <Checkbox inputId="dogSitting" name="dogSitting" value="dogSitting" />
                        <label htmlFor="dogSitting" className="ml-2">Dog Sitting</label>
                    </div>
                    <div className="flex align-items-center mt-2">
                        <Checkbox inputId="dogwalking" name="dogwalking" value="dogwalking" />
                        <label htmlFor="dogwalking" className="ml-2">Dog Walking</label>
                    </div>
                    <div className="flex align-items-center mt-2">
                        <Checkbox inputId="babysitting" name="babysitting" value="babysitting" />
                        <label htmlFor="babysitting" className="ml-2">Baby Sitting</label>
                    </div>
                </section>
            </Panel>
        </form>
    )
}