import React, { useState } from 'react';

function TipsTricks(props) {

    const [payload, setPayload] = useState({
        counter: 0,
        flag: false
    })

    const handleChangeInput = (field, value) => {
        setPayload(state => ({
            ...state,
            [field]: value
        }))
    }

    return (
        <div>
            <button onClick={() => handleChangeInput('flag', !payload.flag)}>Toggle</button>
            <button onClick={() => handleChangeInput('counter', payload.counter + 1)}>Counter</button>

            <p>{payload.flag ? 'true' : 'false'}</p>
            <p>{payload.counter}</p>
        </div>
    );
}

export default TipsTricks;