import { Component, createRef } from "react";

class StudentRefClass extends Component {
    constructor() {
        super();

        this.getInputData = createRef()

    }
    myFunc() {
        // console.log(this.getInputData)
        // console.log(this.getInputData.current.value)
        console.log(this.getInputData.current.style.color = 'blue')
        console.log(this.getInputData.current.style.backgroundColor = 'yellow')
        console.log(this.getInputData.current.focus())
    }

    render() {
        return (
            <>
                <h3> Student Ref Class</h3>
                <input type="text" placeholder="enter data" ref={this.getInputData} />
                <button onClick={() => this.myFunc()}>Submit</button>
            </>
        )
    }
}

export default StudentRefClass;