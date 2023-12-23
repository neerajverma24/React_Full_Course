import React, { useEffect, useState } from 'react'

function ReactJSLifeCycleMethod() {
    const [data, setData] = useState('JavaScript')

    /*
         useEffect(() => {
             console.log('useEffect is working..')
            //console.log('componentDidMount is working..')
    
        })
    */
    /*
        useEffect(() => {
             console.log('useEffect is working..')
            // console.log('componentDidMount is working..')
    
         }, [])            // by using [] array here, componentDidMount will run at least once in the console..
    */

    useEffect(() => {
        console.log('useEffect is working..')
        // console.log('componentDidMount is working..')

    }, [data])

    // [data] is the dependecy of useEffect to run the console one more time..
    // we can also take [data, data2, data3] for more dependencies..

    return (
        <div>
            <h2>React JS Life Cycle Method with useEffect</h2>
            {console.log("Render is working..")}
            <p>{data}</p>
            <button onClick={() => setData('React JS')}>Submit</button>
        </div>
    )
}


export default ReactJSLifeCycleMethod;