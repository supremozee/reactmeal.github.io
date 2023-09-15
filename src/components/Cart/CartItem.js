import Modal from '../UI/Modal'
import classes from './CartItem.module.css'
export const Cartitem = props => {
    const cartItem =
        [{id: "", amount: "2", name: "sushi", }].map((item)=> {
        return item.name
       })
    return(
        <Modal onCloseModal = {props.onCloseCartItem}>
         {cartItem}
         <div className={classes.summary}>
            <h1>Total Amount</h1>
            <span className={classes.price}>12.66</span>
         </div>
         <div className={classes.buttonCont}>
            <button style={{color: "#ffffff", background: "#8a2b06;"}} onClick={props.onCloseCartItem}>Close</button>
            <button style={{color: 'white'}}>Order</button>
         </div>
        </Modal>
    )
}