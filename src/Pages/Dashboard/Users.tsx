import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const Users = () => {

  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

    setLoading(false);

    setUsers(data);
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <h2>User</h2>
      {loading && <h3>Loading...</h3>}
      <ol>
        {
          users.map(user => (
            <li key={user.id}>
              <Link to={`${user.id}`} state={user}>{user.name}</Link>
            </li>
          ))
        }
      </ol>
    </div>
  )
}

export default Users