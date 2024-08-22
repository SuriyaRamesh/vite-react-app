import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useState } from "react";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import UpdateGameState from "./components/UpdateGameState";
import AddTopping from "./components/AddTopping";
import ShoppingCartUpdate from "./components/ShoppingCartUpdate";


const handleSelectItem = (item: string) => console.log(item);

function App() {
  let items = [ "one", "two", "three", "four", "five" ];
  let [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState(['Product1', 'Product2']);

  return (
    <div className="App p-5">
     <ListGroup heading="Numbers List" items={items} onSelectItem={handleSelectItem} />
     {showAlert && <Alert OnClose={() => setShowAlert(false)}><h3>There is an Error!!!</h3></Alert>}
     <Button OnClickHandle={() => setShowAlert(true)} >My Button</Button>
     <Like onClick={() => console.log('Clicked!!')} />
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <UpdateGameState />
      <AddTopping />
      <ShoppingCartUpdate />
    </div>
  )
}

export default App;
