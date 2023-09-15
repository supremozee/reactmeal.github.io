import { useContext } from 'react'
import CartContext from '../../store/Cart-Context.js'
import CartIcon from '../Cart/CartIcon.js'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = props=> {
  const headCartContext = useContext(CartContext)
  const cartNum = headCartContext.items.reduce((accNum, item)=> {
    return accNum + item.amt
  },0)
return <button className={classes.button} onClick={props.onClickHeaderButton}>
<span className={classes.icon}>
  <CartIcon/>
</span>
    <span>Your Cart</span>
    <span className={classes.badge}>{cartNum}</span>
</button>
}
export default HeaderCartButton