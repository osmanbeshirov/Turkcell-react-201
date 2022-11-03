import React, { useState, useMemo, useCallback, memo } from 'react'
import Header from './Header';
import User, { IUser, UserObj } from './User';

const Counter = () => {

    const [count, setCount] = useState(0);

    const [name, setName] = useState('Kanan')

    console.log('Counter component re-render');

    // const userData: UserObj = useMemo(() => {
    //     return {
    //         id: 1,
    //         name: name
    //     }
    // }, [name])

    const increment = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])

    return (
        <div>
            <Header increment={increment} />
            {/* <User data={userData} /> */}
            <hr />

            <h2>{count}</h2>
            <button onClick={increment}>Increase counter</button>

            <hr />

            <button onClick={() => setName(name === 'Kanan' ? 'Osman' : 'Kanan')}>Change Name</button>
        </div>
    )
}

export default Counter; 