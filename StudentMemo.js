import React, { useState } from 'react'
import StudentMemoComponent from './StudentMemoComponent'

function StudentMemo() {
    const [data, setData] = useState(0)
    const [item, setItem] = useState(["Item 1", "Item 2", "Item 3", "Item 4"])

    function updateFunc() {
        setData(data + 1)
    }

    return (
        <div>
            <h3>Student Memo</h3>
            <p>Data : {data}</p>
            <StudentMemoComponent  passItem={item}/>
            <button onClick={() => updateFunc()}>Update</button>
        </div>
    )
}

export default StudentMemo;

