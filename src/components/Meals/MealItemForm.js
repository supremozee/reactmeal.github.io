import { useRef, useState } from "react"
import { Input } from "../UI/Input"
import classes from './MealItemForm.module.css'
export const MealFormInput = props=>{
    const [isAmountValid, setIsAmountValid] = useState(true)
    const amountInputRef = useRef()
    const handleSubmit = event=> {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value
        // console.log(enteredAmount)
        const enteredAmountNumber = +enteredAmount
        if(enteredAmount.trim().length ===0 || 
        enteredAmountNumber < 1 ||
         enteredAmountNumber > 5) {
            setIsAmountValid(false)
            return;
         }
         props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Input 
                ref= {amountInputRef}
                label= "Amount"
                input={{
                id: "amount",
                type: "number",
                min: "1",
                max: "1",
                step: "1",
                defaultValue: "1"
            }}
            />
            <button>
                + Add
            </button>
            {!isAmountValid && <p>Please Input something from 1-5</p>}
        </form>
    )
}