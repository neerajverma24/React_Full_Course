import React from 'react'

export default function Grocery() {
    const items = [
        { id: 1, name: "bread" },
        { id: 2, name: "milk" },
        { id: 3, name: "cake" }
    ]
    return (
        <div>
            <h3>Grocery List</h3>
            <ul>
                {items.map((groc) => <li key={groc.id}>{groc.name}</li>)}
            </ul>
        </div>
    )
}
