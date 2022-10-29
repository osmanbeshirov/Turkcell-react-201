import axios from 'axios';
import React, { useState, useEffect } from 'react'

const UserList = () => {
    const [users, setUsers] = useState<any[]>([]);

    const [loading, setLoading] = useState<boolean>(true)

    const getUsers = async () => {

        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            setLoading(false);

            setUsers(data);

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <h2>User List</h2>

            <h1>{loading && "Loading..."}</h1>

            <ol className='user-list'>
                {
                    users.map(user => (
                        <li  key={user.id}>{user.name}</li>
                    ))
                }
            </ol>
        </div>
    )
}

export default UserList