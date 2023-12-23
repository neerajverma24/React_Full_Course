import React, { forwardRef } from 'react'

function StudentChildForwardRef(getProps, ref) {                // we can pass first parameter Props and Second parameter is Ref
    console.log("getProps : ", getProps)
    console.log("ref", ref)
    return (
        <div>
            <h3>Student Child Forward Ref</h3>
            
        </div>
    )
}

export default forwardRef(StudentChildForwardRef)