import React, { useMemo, useState } from 'react'

function StudentUseMemo() {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(0)

    const getFuncData = useMemo(() => {
        console.log('usememo is working..')
        return count;
    }, [item, count])      // check console also
    // if we want the dependency only on either item or count , we can remove them..
    // and then we check , console will only show the result of its dependency.. 

    /*
    function myFunc() {
        console.log('myFunc is working..')
        return count;
    }
    */
    return (
        <div>
            <h2>Student Use Memo</h2>

            <p>myFunc (works only when we increase the count) : {getFuncData}</p>

            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Count</button>

            <p>Items : {item}</p>
            <button onClick={() => setItem(item + 1)}>Increase Items</button>
        </div>
    )
}

export default StudentUseMemo;