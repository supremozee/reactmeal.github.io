import { useReducer } from "react"
import CartContext from "./Cart-Context"
const initialCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, actions)=> {
    if(actions.type === "ADD_ITEM") {
        const updatedItems = state.items.concat(actions.item)
        const updatedTotalAmount = state.totalAmount + actions.item.price * actions.item.amoumt
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
          };
    }
    return initialCartState
}
const CartProvider =(props)=> {
    const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState)
    const addItemToCart = (item)=> {
        dispatchCart({type: "ADD_ITEM", item: item})
    }
    const removeItemFromCart = (id)=> {
        dispatchCart({type: "REMOVE", id: id})
    }
    const concreteCartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItems: addItemToCart,
        removeItems:  removeItemFromCart
    }
    return <CartContext.Provider value={concreteCartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider