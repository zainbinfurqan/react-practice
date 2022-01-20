import React, { useState, useEffect } from "react";

function BatchUpdate() {
    const [color, setColor] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    function handleClick() {
        setColor((color) => !color);
        setClickCount((click) => click + 1);
        setTimeout(() => {
            setColor((color) => !color);
            setClickCount((click) => click + 1);
        }, 1000);
    }
    return (
        <div>
            {console.log('0')}
            <button onClick={handleClick}>Change color</button>
            <h1 style={{ color: color ? "red" : "black" }}>
                Hello, your click count is {clickCount}
            </h1>
        </div>
    );
}

export default BatchUpdate