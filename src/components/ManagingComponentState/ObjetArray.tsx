import React, { useState } from 'react'
// adding values to nested array
const ObjetArray = () => {
    const [pizza, setPizza] = useState({
        name: 'Spicy Pepperoni',
        toppings: ['Maskrooom']
    })
    const handleClick = (value: string) => {
        setPizza({ ...pizza, toppings: [...pizza.toppings, value] })
    }
    return (
        <div>
            <h1>{pizza.name}</h1>
            <ul>{pizza.toppings.map(top => <li>{top}</li>)}</ul>
            <button onClick={()=>handleClick("cheese")}>Add cheese</button>
        </div>
    )
}

export default ObjetArray
