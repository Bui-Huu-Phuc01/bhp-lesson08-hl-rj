import React, { useState } from 'react'

export default function BhpFormStudent({ onSubmit }) {
    // state
    const [id, setId] = useState(0)
    const [name, setName] = useState('Bùi Hữu Phúc')
    const [age, setAge] = useState(0)
    const [address, setAddress] = useState('')   // quê quán
    const [email, setEmail] = useState('')       // gmail

    // handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        let obj = {
            id: id,
            name: name,
            age: age,
            address: address,
            email: email
        }
        onSubmit(obj);
    }

    return (
        <div>
            <form>
                <h3>Thêm thông tin</h3>
                <p>id:
                    <input name='id' value={id} onChange={(ev) => setId(ev.target.value)} />
                </p>
                <p>name:
                    <input name='name' value={name} onChange={(ev) => setName(ev.target.value)} />
                </p>
                <p>age:
                    <input name='age' value={age} onChange={(ev) => setAge(ev.target.value)} />
                </p>
                <p>address:
                    <input name='address' value={address} onChange={(ev) => setAddress(ev.target.value)} />
                </p>
                <p>email:
                    <input name='email' value={email} onChange={(ev) => setEmail(ev.target.value)} />
                </p>

                <button onClick={handleSubmit}>Ghi lại</button>
            </form>
        </div>
    )
}
