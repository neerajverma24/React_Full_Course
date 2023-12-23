import React from "react";
import StudentChildProps from "./StudentChildProps";

function StudentParentProps() {
    
    var a = "javaScript";

    return (
        <>
            <h3>Student Parent Props</h3>
            <StudentChildProps sendProps={a} />
        </>
    )
}

export default StudentParentProps;