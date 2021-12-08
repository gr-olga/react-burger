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

    function onItemClick(){
        console.log("hhhh");
    }

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <h1 className="text text_type_main-large">Соберите бургер</h1>
            </div>
            <div className={styles.nav}>
                <button className={styles.btn} value="one" active={current === 'one'} onClick={setCurrent}>
                    <a className={styles.link} href="html#adress1">
                    Булки
                    </a>
                </button>
                <button className={styles.btn} value="two" active={current === 'two'} onClick={setCurrent}>
                    <a className={styles.link} href="html#adress2">
                    Соусы
                    </a>
                </button>
                <button className={styles.btn} value="three" active={current === 'three'} onClick={setCurrent}>
                    <a className={styles.link} href="html#adress3">
                    Начинка
                    </a>
                </button>
            </div>
            <div className={styles.ingredients}>
                <h2 className={styles.tag} id={'adress1'}> Булки </h2>
                <div className={styles.container}>
                    {bunList.map((item) => {
                        return <Ingredient
                            key={item._id}
                            img={item.image}
                            price={item.price}
                            name={item.name}
                            onItemClick={onItemClick}
                        />
                    })}
                </div>
                <h2 className={styles.tag} id={'adress2'}>Соусы</h2>
                <div className={styles.container}>
                    {mainList.map((item) => {
                        return <Ingredient
                            img={item.image}
                            price={item.price}
                            name={item.name}
                        />
                    })}
                </div>
                <h2 className={styles.tag} id={'adress3'}>Начинка</h2>
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

// BurgerIngredients.propTypes = {
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

export default BurgerIngredients