import React from "react";
import StudentChildPropsClass from "./StudentChildPropsClass";

class StudentParentPropsClass extends React.Component {
    render() {
        return (
            <>
                <h3>Student Parent Props Class</h3>
                <StudentChildPropsClass sendProps={"React"} />

            </>
        )
    }
}

export default StudentParentPropsClass;