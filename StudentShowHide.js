import React, { useState } from 'react'

export default function StudentShowHide() {
    const [state, setState] = useState(true)

    function showHideFunc() {
        // console.log("Paragraph is show-hide... ")
        setState(!state);
    }
    return (
        <div>
            <h3>Student Show-Hide</h3>
            {state ? <p>Hello ! This is a Paragraph..</p> : " Hidden! Click to Show "}

            {/* way 1  : Direct */}
            {/* <button onClick={() => setState(!state)}>Show-Hide</button>  */}

            {/* way 2 :  with function*/}
            &nbsp; &nbsp; 
            <button onClick={() => showHideFunc()}>Show-Hide</button>
        </div>
    )
}
