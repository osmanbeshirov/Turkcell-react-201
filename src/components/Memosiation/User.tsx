import React from 'react'

export type UserObj = {
    id: number;
    name: string;
}

export interface IUser {
    data: UserObj
}

const User: React.FC<IUser> = (data) => {
    console.log('User component re-render')
    return (
        <div>
            <h2>User</h2>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default User