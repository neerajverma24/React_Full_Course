import React, { useRef } from 'react'
import StudentChildForwardRef from './StudentChildForwardRef'


function StudentParentForwardRef() {

    var getUseRef = useRef("Any Value")

    console.log("getUseRef : ", getUseRef);

    return (
        <div>
            <h2>Student Parent Forward Ref</h2>
            <StudentChildForwardRef passProps="Hello Student" ref={getUseRef} />
        </div>
    )
}

export default StudentParentForwardRef;