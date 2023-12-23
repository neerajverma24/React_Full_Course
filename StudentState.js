import { useState } from "react";
function StudentState() {
    // Hooks : only works in the functional components.. not in the class components..
    const [data, setData] = useState("Hello JavaScript");

    console.log(data); // output : Hello JavaScript, but after clicking on the button value changes to setData and output will be Hello React JS...

    // setData here is used to edit the data , we can change the value assigned to the "data"

    // here, updateFunc button is used with the setData inside the function to update the value of data i.e ("Hello JavaScript")  to the value of setData i.e ("Hello React JS")

    function updateFunc() {
        setData("Hello React JS")
    }

    return (
        <div>
            <h3>Student State...</h3>
            <p>{data}</p>
            <button onClick={() => updateFunc()}>Update</button>
        </div>
    )
}

export default StudentState;