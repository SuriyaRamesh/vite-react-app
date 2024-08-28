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
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";


const handleSelectItem = (item: string) => console.log(item);

function App() {
  let items = [ "one", "two", "three", "four", "five" ];
  let [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState(['Product1', 'Product2']);

  return (
    <div className="App">
     <ListGroup heading="Numbers List" items={items} onSelectItem={handleSelectItem} />
     {showAlert && <Alert OnClose={() => setShowAlert(false)}><h3>There is an Error!!!</h3></Alert>}
     <Button OnClickHandle={() => setShowAlert(true)} >My Button</Button>
     <Like onClick={() => console.log('Clicked!!')} />
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <UpdateGameState />
      <AddTopping />
      <ShoppingCartUpdate />
      <ExpandableText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio adipisci, reprehenderit minus dolorem iusto rem ratione quam ex unde! Quas dolor maxime magnam dolorem est obcaecati! Deserunt eveniet et temporibus veniam laboriosam harum enim ex. Sint ipsa quibusdam quia autem. Facilis suscipit nisi perferendis. Ipsa rerum aperiam laborum excepturi recusandae ullam dicta dolorem quibusdam, modi, commodi, nesciunt similique. Dolores nesciunt optio totam at eveniet odio deleniti atque aliquid! At cupiditate consequuntur sint distinctio sequi iste voluptas! Eveniet blanditiis ad maiores magnam ratione, ullam placeat eos sequi, iste vel quaerat consequatur sapiente earum? Quia unde ullam accusamus expedita. Molestias, iure quos.
      </ExpandableText>
      <Form />
    </div>
  )
}

export default App;
