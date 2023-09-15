import { Fragment } from "react"
import ReactDOM from "react-dom"
import classes from './Modal.module.css'
const Backdrop =(props)=>{
   return<div className={classes.backdrop} onClick = {props.onClickBack}>
   </div>
}
const ModalOvalay =(props)=> {
    return<div className={classes.modal} onClick={props.onClickMv}>
           <div className={classes.content}>{props.children}</div>
    </div>
}
const createElement = document.getElementById("overlay")
const Modal = props=> {
    return (
<Fragment>
    {ReactDOM.createPortal(<Backdrop onClickBack = {props.onCloseModal}/>, createElement)}
    {ReactDOM.createPortal(<ModalOvalay onClickMv = {props.onCloseModal}>{props.children}</ModalOvalay>, createElement )}
</Fragment>
    )
}

export default Modal