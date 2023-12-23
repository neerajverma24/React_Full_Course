import React from "react"
import StudentComponentWillUnmountClass from "./StudentComponentWillUnmountClass";

class ReactJsLifeCycleMethodClass extends React.Component {
    constructor() {
        super();

        this.state = {
            show: true
        }

    }

    showHideFunc() {
        console.log('showHideFunc is working')
        this.setState({ show: false })
    }

    render() {
        console.log('render is working...')

        return (
            <>
                <h3>React Js Life Cycle Method Class</h3>

                {
                    this.state.show ? <StudentComponentWillUnmountClass /> : ""
                }

                <button onClick={() => this.showHideFunc()}>Submit</button>
            </>
        )


    }
}


export default ReactJsLifeCycleMethodClass