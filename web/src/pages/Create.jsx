
import { useState } from 'react'
import TextFIeld from '../components/TextField'
import MyButton from '../components/MyButton'
import {
    useNavigate
} from "react-router-dom";
import fetchGraphql from '../util/fetchGraphql';

function Create() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    async function createUser() {
        fetchGraphql(`
            mutation CreateUser {
                createUser(data: {
                firstName: "${firstName}",
                lastName:"${lastName}",
                email:"${email}",
                active: true
                }) {
                email
                }
            }`
        ).then(() => { navigate('/') })
    }


    return (
        <div className="container">
            <div className="box">
                <h2>Register Page</h2>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <TextFIeld title="FirstName" modelSet={setFirstName} />
                    <TextFIeld title="LastName" modelSet={setLastName} />
                </div>
                <TextFIeld title="Email" modelSet={setEmail} fullWidth={true} />
                <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
                    <MyButton title="back"
                        onClick={() => {
                            navigate('/')
                        }}
                    ></MyButton>
                    <MyButton title="create"
                        disable={firstName.length !== 0 &&
                            lastName.length !== 0 &&
                            email.length !== 0 ? false : true}
                        onClick={createUser}
                    ></MyButton>
                </div>

            </div>
        </div >
    )
}


export default Create