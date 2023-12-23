import React, { useRef } from 'react'
import Ex3ForwardChildRef from './Ex3ForwardChildRef'


function Ex3ForwardParentRef() {

    var getUseRef = useRef(12)

    // console.log("getUseRef : ", getUseRef);


    return (
        <div>
            <h2>Student Parent Forward Ref</h2>
            <Ex3ForwardChildRef passProps="Hello Student" ref={getUseRef} />

          
        </div>
    )
}

export default Ex3ForwardParentRef;