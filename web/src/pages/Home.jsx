/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "../styles/App.css";
import MyButton from '../components/MyButton'
import {
  useNavigate
} from "react-router-dom";
import fetchGraphql from "../util/fetchGraphql";


function Home() {
  async function getUsers() {
    fetchGraphql(
      `query {
          users{
            _id, fullName, email, active
          }
        }
      `
    ).then((value) => {
      setItems(value['data']['users'].map(user => (
        <tr key={user._id}>
          <td>{user._id}</td>
          <td>{user.fullName}</td>
          <td>{user.email}</td>
          <td>
            <button onClick={() => deleteItem(user._id)}>Delete</button>
            <button onClick={() => navigate(`/edit/${user._id}`)}>Edit</button>
          </td>
        </tr>
      )))
    })

  }

  async function deleteItem(id) {
    await fetchGraphql(` mutation { deleteUser(id: "${id}")}`).then((value) => {
      if (value['data']['deleteUser']) {
        getUsers()
      }
    });
  }


  const [items, setItems] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <div className="container">
        <div className="box">
          <h2>List Page</h2>
          <MyButton title="create new user"
            onClick={() => { navigate('/create') }}
          ></MyButton>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
        </div>
      </div >
    </>
  );
}


export default Home;
