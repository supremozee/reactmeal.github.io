import { MealLists } from "./Mealslist"
import classes from './AvailabeMeals.module.css'
import { MealItem } from "./MealItem"
import { Card } from "../UI/Card"
export const AvailableMeal = ()=> {
    const ListOfmeals = MealLists.map((meals)=> {
        return <MealItem 
        key={meals.id}
        id = {meals.id} 
        name={meals.name}
        description={meals.description}
        price ={meals.price}
        />
    })
return(
<div className={classes.meals}>
   <Card>
   <ul>
    {ListOfmeals}
    </ul> 
   </Card>
</div>
)
}