import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Link, useParams, useLocation } from 'react-router-dom';

const UserDetails = () => {

    const location = useLocation();

    const { id } = useParams();

    const [profile, setProfile] = useState<any>(location.state);
    const [loading, setLoading] = useState(false);


    const getDetails = async () => {
        setLoading(true)
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setLoading(false)
        setProfile(data);
    }


    useEffect(() => {
        if (!profile?.id) {
            if (id) {
                getDetails();
            }

        }
    }, [id, profile])


    return (
        <div>
            <h2>User Details</h2>

            {/* {profile && <pre>{JSON.stringify(profile, null, 2)}</pre>} */}

            {
                loading && !profile === true ? <h3>Loading...</h3> : null
            }

            {
                profile != null ? <ol >
                    <li>{profile.username}</li>
                    <li>{profile.email}</li>
                    <li>{profile.phone}</li>
                    <li>{profile.website}</li>
                </ol> : null
            }

            {/* {
                Number(id) < 10 ? <> <Link to={`/users/${Number(id) + 1}`}>Next profile</Link>
                </> : null

            }

            {
                Number(id) > 1 ? <Link to={`/users/${Number(id) - 1}`}>Previous profile</Link> : null
            } */}
        </div >
    )
}

export default UserDetails