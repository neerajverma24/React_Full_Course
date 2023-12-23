import React from "react"

class ReactJsLifeCycleMethodClass extends React.Component {
    constructor() {
        super();
        // console.log('constructor is working..')

        this.state = {
            data: 0
        }
    }

    /*

    // componentDidMount() {
    //     console.log('componentDidMount is Working..')
    // }

    componentDidUpdate() {
        // console.log("Component Did Update is working..")

        // example with a condition
        if (this.state.data > 5) {
            console.log('Component Did Update is working..')
        } else {
        }
    }

    */

    // Component did Update will have the three conditions also
    // 1. prevProps  2. prevState  3. snapshot


    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log("Previous Props : ", prevProps)          // uncomment this to practice finding previous props

        console.log("Previous State : ", prevState)

        // ================= snapShot which is dependent on getSnapShotBeforeUpdate

        // console.log("Snap Shot : ", snapshot)           // output  : snapShot  undefined

        // getSnapShotBeforeUpdate if we don't define this part , we will get the undefined.. we are getting undefined above because of this reason..

        // so , to get over from this undefined we use getSnapshotBeforeUpdate()

        console.log("Snap Shot : ", snapshot)

    }

    /*
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("prevProps & prevState", prevProps, prevState)
        return prevState
    }
    */

    // shouldComponentUpdate  :    by default it returns false, so we will have to make it true to run something

    // ComponentDidMount tabhi chalega jab ye true hoga...

    shouldComponentUpdate() {
        // return false       // console is empty in the false case.. it will run nothing 

        return true
    }

    updateFunc() {
        this.setState({ data: this.state.data + 1 })
    }
    // first we are using this function to practice Component Did Update
    // Secondly, we are using this to find ' Previous State '


    render() {
        console.log('render is working...')

        //   console.log("get Props : " + this.props.passData)      // this is for Previous Props

        return (
            <>
                <h3>React Js Life Cycle Method Class</h3>

                <p>{this.state.data}</p>
                <button onClick={() => this.updateFunc()}>Update</button>
            </>
        )


    }
}


export default ReactJsLifeCycleMethodClass