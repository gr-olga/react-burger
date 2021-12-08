import styles from "./ingredient.module.css";
import React, {useEffect, useState} from "react";
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

function Ingredient(props) {

  const  [count, setCount] = useState(0);

  function handleCountChange(){
      setCount(count + 1)
      // props.onItemClick(props)
    }

// useEffect(()=>{
//
// },)

    return (
        <div className={styles.box} onClick={ handleCountChange}>
            <div className={styles.wrapper}  >
                <img className={styles.image} src={props.img}/>
                { count > 0 &&
                    <Counter count={count} size="default"/>
                }
            </div>
            <h3 className={styles.price}>
                <p className={styles.number}>{props.price}</p>
                <CurrencyIcon type="primary"/>
            </h3>
            <h4 className={styles.name}>{props.name}</h4>
        </div>
    )
}

export default Ingredient