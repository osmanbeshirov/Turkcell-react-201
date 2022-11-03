import React, { memo } from 'react'

interface IHeadaerProps {
    count?: number;
    increment: () => void;
}

const Header: React.FC<IHeadaerProps> = ({ count, increment }) => {

    console.log('Header component re-render');
    return (
        <div>
            <h2>Header</h2>

            {/* Count: {count} */}

            <button onClick={increment}>Incerase number (Header)</button>
        </div>
    )
}

export default memo(Header); 