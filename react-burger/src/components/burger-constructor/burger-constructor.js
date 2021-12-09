import React from "react";
import styles from './burger-constructor.module.css'
import {ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerConstructor(props) {

    return (
        <div className={styles.box}>
        <div className={styles.container}>
            {props.data.map((item) => {
                return <ConstructorElement
                    key={item._id}
                    type={item.type}
                    isLocked={true}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                />
            })}
        </div>
    <div className={styles.total}>
        <h2 className={styles.sum}>200</h2>
        <CurrencyIcon type="primary"/>
        <button className={styles.btn}>Оформить заказ</button>
    </div>
        </div>
)
}

// BurgerConstructor.propTypes = {
//     name: PropTypes.string,
//     _id: PropTypes.number,
//     type:PropTypes.string,
//     proteins:PropTypes.number,
//     fat:PropTypes.number,
//     carbohydrates:PropTypes.number,
//     calories:PropTypes.number,
//     price:PropTypes.number,
//     image: PropTypes.string,
// }

export default BurgerConstructor