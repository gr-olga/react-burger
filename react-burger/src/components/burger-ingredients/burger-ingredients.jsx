import React,{useEffect, useState, useRef}  from 'react';

import styles from './burger-ingredients.css'
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
        <div style={{ display: 'flex' }} className="text text_type_main-default text_color_inactive">
            <li value="one" active={current === 'one'} onClick={setCurrent}>
                булки
            </li>
            <li value="two" active={current === 'two'} onClick={setCurrent}>
                соусы
            </li>
            <li value="three" active={current === 'three'} onClick={setCurrent}>
                начинка
            </li>
        </div>
        <div className={styles.ingredients}>
            <h2>Булки</h2>
            <div className={styles.container}>
                <Ingredient img={Bun} price={20} name={'Краторная булка N-200i'}/>
                <Ingredient img={Bun1} price={20} name={'Флюоресцентная булка R2-D3'}/>
            </div>
            <h2>Соусы</h2>
            <div className={styles.container}>
                <Ingredient/>
                <Ingredient/>
            </div>
        </div>
    </div>

    )}
export default  BurgerIngredients