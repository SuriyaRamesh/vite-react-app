import React, { useState } from 'react'

const AddTopping = () => {
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  })

  const handleClick = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']})
  }

  return (
    <div>
      <h3>Add Pizza Toppings: </h3>
      <ul>
        {pizza.toppings.map(topping => <li key={topping}>{topping}</li>)}
      </ul>
      <button onClick={handleClick}>Add Topping</button>
    </div>
  )
}

export default AddTopping;
