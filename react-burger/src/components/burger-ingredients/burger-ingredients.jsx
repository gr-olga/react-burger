import React,{useEffect, useState, useRef}  from 'react';

import styles from './burger-ingredients.module.css'
import Bun from'../../images/bun02.png'
import Bun1 from'../../images/bun01.png'
import Ingredient from "../ingedient/ingredient";

function BurgerIngredients(props){
    const [current, setCurrent] = React.useState('one')

    return(

    <div className={styles.body}>
        <div className={styles.header}>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
        </div>
        <div className={styles.nav}>
            <button className={styles.btn} value="one" active={current === 'one'} onClick={setCurrent}>
                Булки
            </button>
            <button className={styles.btn} value="two" active={current === 'two'} onClick={setCurrent}>
                Соусы
            </button>
            <button className={styles.btn} value="three" active={current === 'three'} onClick={setCurrent}>
                Начинка
            </button>
        </div>
        <div className={styles.ingredients}>
            <h2 className={styles.tag}>Булки</h2>
            <div className={styles.container}>
                <Ingredient img={Bun} price={20} name={'Краторная булка N-200i'}/>
                <Ingredient img={Bun1} price={20} name={'Флюоресцентная булка R2-D3'}/>
            </div>
            <h2 className={styles.tag}>Соусы</h2>
            <div className={styles.container}>
                <Ingredient/>
                <Ingredient/>
            </div>
            <h2 className={styles.tag}>Соусы</h2>
            <div className={styles.container}>
                <Ingredient/>
                <Ingredient/>
            </div>
        </div>
    </div>

    )}
export default  BurgerIngredients