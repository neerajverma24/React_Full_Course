import React from "react";
function myFunc() {
    alert("This is an alert")
}

function StudentEventFunction() {
    return (
        <>
            <h3>Student Event Function..</h3>
            {/* <button onClick={myFunc}>Alert Button</button> */}
            {/* <button onClick={myFunc()}>Alert Button</button> */}
            <button onClick={() => myFunc()}>Alert Button</button>

        </>
    )
}

export default StudentEventFunction;