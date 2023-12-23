import React, { useState } from "react";

function StudentForm() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [country, setCountry] = useState();

    function getFuncData1(getEvent) {
        console.log(getEvent.target.value);
        setName(getEvent.target.value)
    }

    function getFuncData2(getEvent) {
        console.log(getEvent.target.value);
        setEmail(getEvent.target.value)
    }

    function getFuncData3(getEvent) {
        console.log(getEvent.target.value);
        setCountry(getEvent.target.value)
    }

    function saveData() {
        console.log(name, email, country)
    }


    return (
        <div>
            <h2> Student Form</h2>
            <label>Name : </label>
            <input type="text" placeholder="Enter Name" onChange={(e) => getFuncData1(e)} /><br />
            <label>Email : </label>
            <input type="text" placeholder="Enter Email" onChange={(e) => getFuncData2(e)} /><br />

            <label>Country : </label>
            <select onChange={(e) => getFuncData3(e)}>
                <option>--Select Country--</option>
                <option>India</option>
                <option>US</option>
                <option>UK</option>
            </select> <br />

            <button onClick={() => saveData()}>Submit</button>

            {/* <table border="1">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{country}</td>
                    </tr>
                </tbody>
            </table> */}

        </div>
    )
}

export default StudentForm;