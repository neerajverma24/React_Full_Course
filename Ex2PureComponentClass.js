import { PureComponent } from "react";

class Ex2PureComponentClass extends PureComponent {
    constructor() {
        super();

        this.state = {
            data: 0
        }

    }

    PureButton() {
        console.log('PureButton() is working..')
        this.setState({ data: 1 })
    }
    render() {
        console.log('render is working..')

        return (
            <>
                <h2>Pure Component</h2>
                <p>Data : {this.state.data}</p>
                <button onClick={() => this.PureButton()}>Pure Button</button>
            </>
        )
    }
}

export default Ex2PureComponentClass;