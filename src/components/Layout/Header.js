import {Fragment} from 'react'
import classes from './Header.module.css'
import mealImage from '../../assests/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
const Header = props => {
return (
<Fragment>
   <header className={classes.header}>
    <h1>ReactMeals</h1>
    <HeaderCartButton onClickHeaderButton = {props.onShowCartItem}/>
   </header>
   <div className={classes['main-image']}>
    <img src={mealImage} alt='exhibit of header meal'/>
   </div>
</Fragment>
)
}
export default Header