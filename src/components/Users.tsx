import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .finally(() => setLoading(false))
    }


    useEffect(() => {
        getUsers()

    }, [])

    console.log(users)

    return (
        <>
            <div>Users</div>

            {
                loading && <div>Loading...</div>
            }

            <ol>
                {
                    users.map((adam) => (
                        <li key={adam.id}>{adam.name}</li>
                    ))
                }
            </ol>




        </>


    )
}

export default Users