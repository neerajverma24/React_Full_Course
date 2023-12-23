import React, { createRef, useRef } from 'react'

function StudentUseRef() {
    // var getInputData = createRef()

    var getInputData = useRef();            // useRef is a hook and cannot be use in Class component..

    function myFunc() {
        // console.log(getInputData)
        console.log(getInputData.current.value)
        console.log(getInputData.current.style.color = 'blue')
        console.log(getInputData.current.style.backgroundColor = 'yellow')
        console.log(getInputData.current.focus())
    }

    return (
        <>
            <h3> Student Ref Class</h3>
            <input type="text" placeholder="enter data" ref={getInputData} />
            <button onClick={() => myFunc()}>Submit</button>
        </>
    )
}

export default StudentUseRef;