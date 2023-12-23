import React, { useState } from "react";

function StudentGetInputData() {
    const [inputData, setInputData] = useState();

    function getFuncData(getEvent) {
        console.log("getFunc Data is working..");
        console.log(getEvent.target.value);
        setInputData(getEvent.target.value);
    }

    return (
        <div>
            <h2> Student Get Input Data</h2>
            <p>{inputData}</p>
            <input type="text" placeholder="Enter Data" onChange={(e) => getFuncData(e)} /><br></br>

        </div>
    )
}

export default StudentGetInputData;