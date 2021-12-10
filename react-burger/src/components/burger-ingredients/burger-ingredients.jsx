import React, {useEffect, useRef} from 'react';
import styles from "./burger-ingredients.module.css";
import Ingredient from "../ingedient/ingredient";
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types"


function BurgerIngredients(props) {
    const bunSection = useRef(null)
    const sauceSection = useRef(null)
    const mainSection = useRef(null)

    const [current, setCurrent] = React.useState('one')
    const [bunList, setBunList] = React.useState([])
    const [sauceList, setSauceList] = React.useState([])
    const [mainList, setMainList] = React.useState([])


    useEffect(() => {
        setBunList(props.data.filter((item) => item.type === 'bun'))
        setSauceList(props.data.filter((item) => item.type === 'sauce'))
        setMainList(props.data.filter((item) => item.type === 'main'))
    }, [props.data])

    function onItemClick() {
        console.log(bunSection);
    }

    function onScroll(evt) {
        const container = evt.target
        const scrollPosition = container.scrollTop
        const positionSauce = sauceSection.current.offsetTop
        const positionMain = mainSection.current.offsetTop
        if (scrollPosition + 100 <= positionSauce){
            setCurrent('one')
        }else if (scrollPosition +100 <= positionMain){
            setCurrent('two')
        }else {
            setCurrent('three')
        }
    }


    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <h1 className="text text_type_main-large">Соберите бургер</h1>
            </div>
            <div className={styles.nav}>
                <Tab className={styles.btn} value="one" active={current === 'one'} onClick={value=> {
                    setCurrent(value)
                    bunSection.current.scrollIntoView({behavior: "smooth"})
                }}>
                    Булки
                </Tab>
                <Tab className={styles.btn} value="two" active={current === 'two'} onClick={value=>{
                    setCurrent(value)
                    sauceSection.current.scrollIntoView({behavior:"smooth"})
                }}
                    >
                    Соусы
                    </Tab>
                }
                <Tab className={styles.btn} value="three" active={current === 'three'} onClick={value=> {
                    setCurrent(value)
                    mainSection.current.scrollIntoView({behavior: "smooth"})
                }}
                    >
                    Начинка
                </Tab>
            </div>
            <div className={styles.ingredients} onScroll={onScroll}>
                <section
                    ref={bunSection}
                >
                    <h2 className={styles.tag}> Булки </h2>
                    <div className={styles.container}>
                        {bunList.map((item) => {
                            return (<Ingredient
                                key={item._id}
                                img={item.image}
                                price={item.price}
                                name={item.name}
                                onItemClick={onItemClick}
                            />)
                        })}
                    </div>
                </section>
                <section
                    ref={sauceSection}
                >
                    <h2 className={styles.tag}>Соусы</h2>
                    <div className={styles.container}>
                        {mainList.map((item) => {
                            return (<Ingredient
                                key={item._id}
                                img={item.image}
                                price={item.price}
                                name={item.name}
                            />)
                        })}
                    </div>
                </section>
                <section
                    ref={mainSection}
                >
                    <h2 className={styles.tag}>Начинка</h2>
                    <div className={styles.container}>
                        {sauceList.map((item) => {
                            return (<Ingredient
                                key={item._id}
                                img={item.image}
                                price={item.price}
                                name={item.name}
                            />)
                        })}
                    </div>
                </section>
            </div>
        </div>


    )
}

BurgerIngredients.propTypes = {
    name: PropTypes.string,
    _id: PropTypes.number,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
}

export default BurgerIngredients