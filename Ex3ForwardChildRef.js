import React, { forwardRef } from 'react'

function Ex3ForwardChildRef(getProps, ref) {                // we can pass first parameter Props and Second parameter is Ref


    function getRefFunc() {
        console.log("getProps : ", getProps)
        console.log("ref", ref)
    }



    return (
        <div>
            <h3>Student Child Forward Ref</h3>
            <button onClick={() => getRefFunc()}>Get Ref</button>
        </div>
    )
}

export default forwardRef(Ex3ForwardChildRef)