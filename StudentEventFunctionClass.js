import React from "react";
class StudentEventFunctionClass extends React.Component {

    myFunc() {
        alert("This is myFunc alert")
    }

    render() {
        return (
            <>

                <h3>Student Event Function Class...</h3>
                {/* <button onClick={this.myFunc()}>Alert Button</button> */}
                {/* <button onClick={this.myFunc()}>Alert Button</button> */}
                <button onClick={() => this.myFunc()}>Alert Button</button>
                {/* The difference is that we are using this keyword here, because it is a Class Component... */}
            </>
        )
    }
}

export default StudentEventFunctionClass;