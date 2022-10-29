import axios from 'axios';
import React, { useState, useEffect } from 'react';


const UserDetails: React.FC<any> = ({ selectedId }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        axios(`https://jsonplaceholder.typicode.com/users/${selectedId}`)
            .then(res => setUser(res.data))
            .finally(() => setLoading(false))
    }, [selectedId])

    console.log(selectedId)

    return (
        <div>
            <h2>User Details</h2>

            {loading && <h1>Loading...</h1>}
            <pre>  {!loading && JSON.stringify(user, null, 2)} </pre>

        </div>
    )
}

export default UserDetails