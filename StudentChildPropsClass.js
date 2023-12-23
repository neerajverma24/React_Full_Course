import React from "react";

class StudentChildPropsClass extends React.Component {
    render() {
        console.log(this.props.sendProps)

        return (

            <>
                <h3>Student Child Props Class</h3>
                <p>{this.props.sendProps}</p>
            </>
        )
    }
}

export default StudentChildPropsClass;