import styles from "./ingredient.module.css";
import React from "react";
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'

function Ingredient(props){
return(
    <div className={styles.box}>
        <Counter count={1} size="default" />
        <img className={styles.image} src={props.img}/>
        <h3 className={styles.price}>
            <p className={styles.number}>{props.price}</p>
            <CurrencyIcon type="primary" />
        </h3>
        <h4 className={styles.name}>{props.name}</h4>
    </div>
)
}
export default Ingredient