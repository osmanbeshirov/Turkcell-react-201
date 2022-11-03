import React, { useState, useMemo } from 'react'
import Header from './Header';
import User, { IUser, UserObj } from './User';

const Counter = () => {

    const [count, setCount] = useState(0);

    // const [name, setName] = useState('Kanan')

    console.log('Counter component re-render');

    const userData: UserObj = useMemo(() => {
        return {
            id: 1,
            name: 'Osman'
        }
    }, [])

    return (
        <div>

            {/* <Header /> */}
            <User data={userData} />
            <hr />

            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}></button>

            <hr />

            {/* <button onClick={() => setName(name === 'Kanan' ? 'Osman' : 'Kanan')}></button> */}
        </div>
    )
}

export default Counter