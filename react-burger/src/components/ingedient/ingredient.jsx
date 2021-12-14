import styles from "./ingredient.module.css";
import React, {useState} from "react";
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";

function Ingredient(props) {

    const [count, setCount] = useState(0);

    function handleCountChange() {
        setCount(count + 1)
    }

    function handleClick() {
        props.onItemClick(props)
    }


    return (
        <section onClick={handleClick}>
            <div className={styles.box}>
                <div className={styles.wrapper}>
                    <img className={styles.image} src={props.img} alt={props.name}/>
                    {count > 0 &&
                    <Counter count={count} size="default" onClick={handleCountChange}/>
                    }
                </div>
                <h3 className={styles.price}>
                    <p className={styles.number}>{props.price}</p>
                    <CurrencyIcon type="primary"/>
                </h3>
                <h4 className={styles.name}>{props.name}</h4>
            </div>
        </section>
    )
}

Ingredient.propTypes = {
    name: PropTypes.string,
    _id: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
}

export default Ingredient