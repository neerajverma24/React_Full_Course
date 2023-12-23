import React from 'react'
class StudentComponentWillUnmountClass extends React.Component {

    componentWillUnmount() {
        console.log('componentWillUnmount is working..')
    }

    render() {
        return <h2>Student Component Will Unmount Class</h2>
    }

}
export default StudentComponentWillUnmountClass