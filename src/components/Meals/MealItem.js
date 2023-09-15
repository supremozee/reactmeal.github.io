import { useContext } from 'react'
import CartContext from '../../store/Cart-Context'
import { MealFormInput } from './MealItemForm'
import classes from './MealItem.module.css'
export const MealItem = props=> {
  const cartctx =useContext(CartContext)
    const price = `$${props.price.toFixed('2')}`
    const handleCartUpddate =(amt) => {
      cartctx.addItems({
        id: props.id,
        name: props.name,
        price: props.price,
        amt: amt
      })
    }
    return (
        <li className={classes.meal}>
      <div>
      <h3>{props.name}</h3>
           <p className={classes.description}>{props.description}</p>
           <h3 className={classes.price}>
            {price}
        </h3>
      </div>    
      <div>
      <MealFormInput onAddToCart = {handleCartUpddate} />
      </div>
        </li>
       
    )
}