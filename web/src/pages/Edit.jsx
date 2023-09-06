/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import TextFIeld from '../components/TextField'
import MyButton from '../components/MyButton'
import {
    useNavigate, useParams
} from "react-router-dom";
import fetchGraphql from '../util/fetchGraphql';

function Create() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    const params = useParams()

    async function editUser() {
        await fetchGraphql(`
            mutation {
                updateUser(
                id: "${params.id}",
                data: {
                    firstName: "${firstName}",
                    lastName:"${lastName}",
                    email:"${email}",
                    active: true
                }) {
                    email, firstName, lastName
                }
            }`
        ).then(() => {
            navigate('/')
        })

    }
    async function getUser() {
        return await fetchGraphql(`
        query {
            user(id: "${params.id}")
            {
              email, firstName, lastName
            }
          }`
        ).then((value) => {
            setEmail(value['data']['user']['email'])
            setFirstName(value['data']['user']['firstName'])
            setLastName(value['data']['user']['lastName'])
        })
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div className="container">
            <div className="box">
                <h2>Register Page</h2>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <TextFIeld title="FirstName" modelSet={setFirstName} model={firstName} />
                    <TextFIeld title="LastName" modelSet={setLastName} model={lastName} />
                </div>
                <TextFIeld title="Email" modelSet={setEmail} model={email} fullWidth={true} />
                <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
                    <MyButton title="back"
                        onClick={() => {
                            navigate('/')
                        }}
                    ></MyButton>
                    <MyButton title="update"
                        disable={firstName.length !== 0 &&
                            lastName.length !== 0 &&
                            email.length !== 0 ? false : true}
                        onClick={editUser}
                    ></MyButton>
                </div>

            </div>
        </div >
    )
}


export default Create