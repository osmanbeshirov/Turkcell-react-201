import React, { useState } from 'react'
import Header from './Header';
import User, { IUser, UserObj } from './User';

const Counter = () => {

    const [count, setCount] = useState(0);

    console.log('Counter component re-render');

    const userData: UserObj = {
        id: 1,
        name: 'Osman'
    }

    return (
        <div>

            {/* <Header /> */}
            <User data={userData} />
            <hr />

            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}></button>
        </div>
    )
}

export default Counter