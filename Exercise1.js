import React, { useEffect, useState } from 'react'

function Exercise1() {
    const [add, setAdd] = useState(0)
    const [subtract, setsubtract] = useState(10)

    useEffect(() => {
        console.log('useEffect is working for add...')
    }, [add])

    useEffect(() => {
        console.log('useEffect is working for subtract...')
    }, [subtract])

    return (
        <div>
            <h1>Exercise 1</h1>
            <p>Add : {add}</p>
            <p>Subtract : {subtract}</p>
            <button onClick={() => setAdd(add + 1)}>Add</button>
            <button onClick={() => setsubtract(subtract - 1)}>Subtract</button>
        </div>
    )
}

export default Exercise1;
