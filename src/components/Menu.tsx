import React from 'react'

import { Link, useNavigate } from 'react-router-dom'



const Menu = () => {
    const navigate = useNavigate()

    return (
        <div>
            <ul className='menu'>
                <li >
                    <a onClick={() => navigate(-1)} href='#/'>Back</a>
                </li>
                <li>
                    <Link to={'/'}>Home page</Link >
                </li>

                <li>
                    <Link to={'users'}>Users</Link>
                </li>
                <li>
                    <Link to={'contact'}>Contact</Link>
                </li>
                <li onClick={() => navigate('contact')}>
                    Contact(navigate)
                </li>
            </ul>
        </div>
    )
}

export default Menu