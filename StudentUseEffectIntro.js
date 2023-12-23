import React, { useEffect } from 'react'

function StudentUseEffectIntro() {
    function getAPI() {
        // API goes here
    }

    useEffect(() => {
        console.log('useEffect is working..')
        getAPI();       // calling API
    }, [])              // ye kab chalta hai after render , render matlab DOM

    return (
        <div>
            <h2>Student Use Effect</h2>
            {console.log('Render is working..')}
        </div>
    )
}


export default StudentUseEffectIntro;

