import styles from "./ingredient.css";
import React from "react";
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

function Ingredient(props){
return(
    <div>
        <img src={props.img}/>
        <h3 className={styles.price}>
            <p>{props.price}</p>
            <CurrencyIcon type="primary" />
        </h3>
        <h4 className={styles.name}>{props.name}</h4>
    </div>
)
}
export default Ingredient