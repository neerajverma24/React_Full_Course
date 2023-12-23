import React from "react";

class StudentStateClass extends React.Component {
    constructor() {
        super();
        this.state = { data: "Before Update : JavaScript" }
    }

    // we are not using 'function' keyword before updateFunc because it is a Class Component..
    updateFunc() {
        alert("Update Func is Working..")
        this.setState({ data: "After Update : React JS" })
    }

    render() {
        return (
            <>
                <h3>Student State Class</h3>
                <p>{this.state.data}</p>
                <button onClick={() => this.updateFunc()}>Update</button>
                {/* using this keyword in the button because it is the Class Component */}
            </>
        )
    }
}

export default StudentStateClass;