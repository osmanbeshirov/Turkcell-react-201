import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {

    const { id } = useParams();

    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const getDetails = async () => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setLoading(false)
        setProfile(data);
    }

    useEffect(() => {
        getDetails();
    }, [id])

    return (
        <div>
            <h2>User Details</h2>

            {
                loading && <h3>Loading...</h3>
            }

            {
                profile != null ? <ol >
                    <li>{profile.username}</li>
                    <li>{profile.email}</li>
                    <li>{profile.phone}</li>
                    <li>{profile.website}</li>
                </ol> : null
            }

            {
                Number(id) < 10 ? <> <Link to={`/users/${Number(id) + 1}`}>Next profile</Link>
                </> : null

            }

            {
                Number(id) > 1 ? <Link to={`/users/${Number(id) - 1}`}>Previous profile</Link> : null
            }






        </div >
    )
}

export default UserDetails