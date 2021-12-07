import React, {useEffect} from 'react';
import styles from "./burger-ingredients.module.css";
import Ingredient from "../ingedient/ingredient";

function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('one')
    const [bunList, setBunList] = React.useState([])
    const [sauceList, setSauceList] = React.useState([])
    const [mainList, setMainList] = React.useState([])

    useEffect(() => {
        setBunList(props.data.filter((item) => item.type === 'bun'))
        setSauceList(props.data.filter((item) => item.type === 'sauce'))
        setMainList(props.data.filter((item) => item.type === 'main'))
    }, [props.data])

    return (
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
                    {bunList.map((item) => {
                        return <Ingredient
                            img={item.image}
                            price={item.price}
                            name={item.name}
                        />
                    })}
                </div>
                <h2 className={styles.tag}>Соусы</h2>
                <div className={styles.container}>
                    {mainList.map((item) => {
                        return <Ingredient
                            img={item.image}
                            price={item.price}
                            name={item.name}
                        />
                    })}
                </div>
                <h2 className={styles.tag}>Начинка</h2>
                <div className={styles.container}>
                    {sauceList.map((item) => {
                        return <Ingredient
                            img={item.image}
                            price={item.price}
                            name={item.name}
                        />
                    })}
                </div>
            </div>
        </div>


    )
}

export default BurgerIngredients