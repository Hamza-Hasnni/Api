import React , {useState,useEffect}from 'react'
import axios from 'axios';
import User from './User';

const UserList = () => {
    const [users, setUsers] = useState([]);
   useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setUsers (res.data))
    .catch((err)=>console.log(err));  
   }, [])
    
    return (
        <div >
            <h1 style={{color:"white"}}>List Of Users</h1>
            {users.map(user=><User user={user} key={user.id} />)}
        </div>
    )
}

export default UserList
