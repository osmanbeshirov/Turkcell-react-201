import React, { useEffect, useState } from 'react';

import '../App.css'
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    const getUsers = async () => {
        //     fetch('https://jsonplaceholder.typicode.com/userss')
        //         .then(res => res.json())
        //         .then(data => setUsers(data))
        //         .finally(() => setLoading(false))

        // **********************************
        // axios('https://jsonplaceholder.typicode.com/userss')
        //     .then(res => setUsers(res.data))
        //     .catch(error => console.log(error))
        //     .finally(() => setLoading(false))

        // // ********************************
        try {
            const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users');
            const { data: posts } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);

            setLoading(false);

            setUsers(users);
            setPosts(posts);

            // console.log(posts)
        } catch (error) {
            console.log(error)
        }



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


            <h1>Posts</h1>

            <ol>
                {
                    posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ol>





        </>


    )
}

export default Users