import { useState} from "react";
import Header from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import { Cartitem } from "./components/Cart/CartItem";
import CartProvider from "./store/Cart-Provider";
function App() {
  const [showCart, setShowCart] = useState(false)
  const headerCartButtonEffect = ()=> {
    setShowCart(true)
  }
  const deleteCartItem = ()=> {
    setShowCart(false)
  }
  return (
    <div>
      <CartProvider>
      { showCart && <Cartitem onCloseCartItem = {deleteCartItem}/>}
        <Header onShowCartItem = {headerCartButtonEffect}/>
        <main>
          <Meals />
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
