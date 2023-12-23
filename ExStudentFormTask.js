import { useState } from "react";
// This form will submited in Console...
function ExStudentFormTask() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name : ", name);
        console.log("Email :", email);
    }

    return (
        <>
            <h2>Student Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Name :
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" /></label>
                <br />

                <label>Email :
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" /></label>
                <br />
                <button type="submit">Submit</button>

            </form>
        </>
    )
}

export default ExStudentFormTask;