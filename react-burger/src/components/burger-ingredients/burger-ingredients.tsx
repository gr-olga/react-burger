import React, {useEffect, useRef} from 'react';
import styles from "./burger-ingredients.module.css";
import Ingredient from "../ingedient/ingredient";
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import {BurgerIngredientsTypes, TClearIngredient, TIngredient, useSelector} from "../../utils/types";


function BurgerIngredients(props: BurgerIngredientsTypes) {
    const {ingredients} = useSelector(({ingredientsReducer}) => ingredientsReducer)
    const bunSection = useRef<HTMLHeadingElement>(null)
    const sauceSection = useRef<HTMLHeadingElement>(null)
    const mainSection = useRef<HTMLHeadingElement>(null)

    const [current, setCurrent] = React.useState<string>('one')
    const [bunList, setBunList] = React.useState<Array<TClearIngredient>>([])
    const [sauceList, setSauceList] = React.useState<Array<TClearIngredient>>([])
    const [mainList, setMainList] = React.useState<Array<TClearIngredient>>([])

    useEffect(() => {
        setBunList(ingredients.filter((item) => item.type === 'bun'))
        setSauceList(ingredients.filter((item) => item.type === 'sauce'))
        setMainList(ingredients.filter((item) => item.type === 'main'))
    }, [ingredients])

    function onScroll(event: React.SyntheticEvent) {
        const container: any = event.target;
        const scrollPosition = container.scrollTop

        if (!sauceSection || !sauceSection.current) return;
        if (!mainSection || !mainSection.current) return;

        const positionSauce = sauceSection.current.offsetTop
        const positionMain = mainSection.current.offsetTop
        if (scrollPosition + 100 <= positionSauce) {
            setCurrent('one')
        } else if (scrollPosition + 100 <= positionMain) {
            setCurrent('two')
        } else {
            setCurrent('three')
        }
    }

    function onItemClick(item: TIngredient): void {
        props.onIngredientClick(item)
    }


    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <h1 className="text text_type_main-large">Соберите бургер</h1>
            </div>
            <div className={styles.nav}>
                <Tab value="one" active={current === 'one'} onClick={value => {
                    setCurrent(value)
                    if (!bunSection || !bunSection.current) return;
                    bunSection.current.scrollIntoView({behavior: "smooth"})
                }}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={value => {
                    setCurrent(value)
                    if (!sauceSection || !sauceSection.current) return;
                    sauceSection.current.scrollIntoView({behavior: "smooth"})
                }}
                >
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={value => {
                    setCurrent(value)
                    if (!mainSection || !mainSection.current) return;
                    mainSection.current.scrollIntoView({behavior: "smooth"})
                }}
                >
                    Начинка
                </Tab>
            </div>
            <div className={styles.ingredients}
                 onScroll={onScroll}
            >
                <section
                    ref={bunSection}
                >
                    <h2 className={styles.tag}> Булки </h2>
                    <div className={styles.container}>
                        {bunList.map((item) => {
                            return (<Ingredient {...item}
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
                        {sauceList.map((item) => {
                            return (<Ingredient {...item}
                                                onItemClick={onItemClick}
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
                        {mainList.map((item) => {
                            return (<Ingredient {...item}
                                                key={item._id}
                                                img={item.image}
                                                price={item.price}
                                                name={item.name}
                                                onItemClick={onItemClick}
                            />)
                        })}
                    </div>
                </section>
            </div>
        </div>


    )
}

export default BurgerIngredients