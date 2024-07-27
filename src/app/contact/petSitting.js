import { useState } from 'react'
import { InputNumber } from 'primereact/inputnumber'
import { InputText } from 'primereact/inputtext'
import { FloatLabel } from 'primereact/floatlabel'

export default function PetSitting() {
    const [numPets, setNumPets] = useState()
    const [petList, setPetList] = useState([])

    const controlNumPets = (e) => {
        let count = parseInt(e.value)
        let list = []
        for (let i = 0; i < count; i++) {
            list.push({
                type: null,
                breed: null,
                age: null,
                petName: null
            })
        }
        setPetList(list)
        setNumPets(e.value)
    }

    const handlePetListChange = (index, event) => {
        let data = [...petList]
        data[index][event.name] = event.value
        setPetList(data)
    }

    return (
        <section className='mt-5'>
            <span className='font-bold text-700 text-xl' >Pet Sitting Questionarie</span>
            <FloatLabel className='mt-4'>
                <InputNumber id='numberPets' value={numPets} onChange={controlNumPets} />
                <label for='numberPets'>How many Pets?</label>
            </FloatLabel>
            {
                petList.map((input, index) => {
                    return (
                        <div key={index} className='flex flex-wrap mt-4'>
                            <div className='p-inputgroup flex-2 mr-2'>
                                <span className='p-inputgroup-addon'>Pet Type</span>
                                <InputText name='type' value={input.type} onChange={event => handlePetListChange(index, event)} />
                                {/* <label for='type'>Type of Pet</label> */}
                            </div>
                            <div className='p-inputgroup flex-2 mr-2'>
                                <span className='p-inputgroup-addon'>Pet Breed</span>
                                <InputText name='breed' value={input.breed} onChange={event => handlePetListChange(index, event)} />
                                {/* <label for='breed'>Pet Breed</label> */}
                            </div>
                            <div className='p-inputgroup flex-2 mr-2'>
                                <span className='p-inputgroup-addon'>Pet Age</span>
                                <InputText name='age' value={input.age} onChange={event => handlePetListChange(index, event)} />
                                {/* <label for='age'>Age of Pet</label> */}
                            </div>
                            <div className='p-inputgroup flex-2'>
                                <span className='p-inputgroup-addon'>Pet Name</span>
                                <InputText name='petName' value={input.petName} onChange={event => handlePetListChange(index, event)} />
                                {/* <label for='petName'>Name of Pet</label> */}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}