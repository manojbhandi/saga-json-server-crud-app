import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
const initialValues = {
    name: "",
    phone: "",
    email: "",
    address: ""
}

function AddEditUser() {

    const [formData, setFormData] = useState(initialValues)
    let { name, email, phone, address } = formData
    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const navigate = useNavigate()
    return (
        <MDBValidation className='row g-3' style={{
            marginTop: '100px'
        }}
            noValidate
            onSubmit={handleSubmit}
        >
            <p className='fs-2 fw-bold' >Add User Detail</p>
            <div style={{ margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center' }}>
                <MDBInput
                    value={name}
                    name='name'
                    type='text'
                    onChange={handleChange}
                    required
                    label="Name"
                    validation="Name is a mandatory field"
                    invalid
                />
                <br />
                <MDBInput
                    value={email}
                    name='email'
                    type='email'
                    onChange={handleChange}
                    required
                    label="Email"
                    validation="Email is a mandatory field"
                    invalid
                />
                <br />
                <MDBInput
                    value={phone}
                    name='phone'
                    type='number'
                    onChange={handleChange}
                    required
                    label="Phone"
                    validation="Phone is a mandatory field"
                    invalid
                />
                <br />
                <MDBInput
                    value={address}
                    name='address'
                    type='text'
                    onChange={handleChange}
                    required
                    label="Address"
                    validation="Address is a mandatory field"
                    invalid
                />
                <br />
                <div className='col-12'>
                    <MDBBtn style={{ marginRight: '10px' }} type='submit'>
                        Add User
                    </MDBBtn>
                    <MDBBtn onClick={() => navigate('/')} color='danger'>
                        Go Back
                    </MDBBtn>
                </div>
            </div>
        </MDBValidation>
    )
}

export default AddEditUser