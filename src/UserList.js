import { useEffect, useState} from 'react';
import axios from 'axios';
import './UserList.css';
const UserList=()=>{
    const [listOfUser, setListOfUser]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setListOfUser(response.data))
            .catch(error=>console.error('API Error:', error));
    }, []);
    return (
        <div className="user-container">
            <h1>User List</h1>
            <ul>
                {listOfUser.map(user=> (
                    <li key={user.id}>
                        <strong>{user.name}</strong> <br />
                        <span>{user.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default UserList;