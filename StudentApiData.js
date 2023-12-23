// How to get API Data  :-

import React, { useState } from "react";

function StudentApiData() {
    const [Data, setData] = useState()

    async function getAPIFunc() {
        const getApiData = await fetch(`https:jsonplaceholder.typicode.com/users`);

        // console.log(await getApiData.json());  // throws an error...
        const getJsonData = await getApiData.json();
        // console.log(getJsonData);
        setData(getJsonData);
    }
    getAPIFunc();

    return (
        <>
            <h3>Student Api Data</h3>
            {
                Data?.map((getObjData) => {
                    // console.log(getObjData)  // poora ka poora array of object print kar dega 
                    // console.log(getObjData.name + " " + getObjData.email)

                })
            }
        </>
    )


}
export default StudentApiData;