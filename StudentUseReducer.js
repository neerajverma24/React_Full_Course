import React, { useReducer } from "react";
const initailState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'add':
            return state + 1;
        case 'subtract':
            return state - 1;
        case 'Multily':
            return state * 2;
        case 'Division':
            return state / 2;
        default:
            throw new Error("Please take a action")

    }
}

function StudentUseReducer() {

    const [state, dispatch] = useReducer(reducer, initailState)
    return (
        <>
            <h3>Student Use Reducer</h3>
            <p>{state}</p>
            <button onClick={() => dispatch('add')} >+</button>
            <button onClick={() => dispatch('subtract')}>-</button>
            <button onClick={() => dispatch('Multily')}>*</button>
            <button onClick={() => dispatch('Division')}>/</button><br /> <br />

        </>
    )
}

export default StudentUseReducer;