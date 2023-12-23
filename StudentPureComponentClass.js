import React, { Component, PureComponent } from 'react'

class StudentPureComponentClass extends PureComponent {
    constructor() {
        super();

        this.state = {
            data: 0
        }
    }

    updateFunc() {
        console.log('updateFunc is working..')
        this.setState({ data: 1 })
    }
    render() {
        console.log('render is working..')

        return (
            <div>
                <h2>Student Pure Component</h2>
                <p>Data : {this.state.data}</p>
                <button onClick={() => this.updateFunc()}>Update</button>
            </div>
        )
    }
}

export default StudentPureComponentClass;
