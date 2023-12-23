import React, { useCallback, useState } from 'react'
import StudentUseCallBackComponent from './StudentUseCallBackComponent'

function StudentUseCallBack() {
    const [data, setData] = useState(0)
    const [item, setItem] = useState(["Item 1", "Item 2"])

    function updateFunc() {
        setData(data + 1)
    }

    const addToCart = useCallback(() => {
        setItem([...item, "New Item"])
    }, [item])          // [item] is the dependency of addToCart
    return (
        <div>
            <h3>Student Use Call Back</h3>
            <p>Data : {data}</p>
            <button onClick={() => updateFunc()}>Update</button>
            <StudentUseCallBackComponent addToCart={addToCart} passItem={item} />
        </div>
    )
}

export default StudentUseCallBack;

