import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = React.useState(0);
    const [input, setInput] = useState(0);
    const handleCount = () => {
        setCount((prev) => prev + 1)
    }
    return (
        <div>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={handleCount}>+</button>
            <input type='number' name='count' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => { setCount(input) }}>setcount</button>
        </div>
    )
}

export default Counter