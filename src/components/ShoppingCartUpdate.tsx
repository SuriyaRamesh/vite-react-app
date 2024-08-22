import React, { useState } from 'react'

const ShoppingCartUpdate = () => {

  const [cart, setCart] = useState({
    discount: .1,
    items: [
        {id: 1, title: "Product 1", quantity: 1},
        {id: 2, title: "Product 2", quantity: 2}
    ]
  });

  const handleClick = () => {
    setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity+1} : item)})
  }

  return (
    <div>
      <h3>Update quantity to 2 from 1 on click</h3>
      <p>Item 1 quatity: {cart.items[0].quantity}</p>
      <button onClick={handleClick}>Update Quantity</button>
    </div>
  )
}

export default ShoppingCartUpdate
