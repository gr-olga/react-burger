import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './feed-box.module.css'
import {useSelector} from "../../utils/types";

export function FeedBox() {
    const {
        constructorIngredients,
    } = useSelector(({ingredientsReducer}) => ingredientsReducer)

    return (
        <div className={styles.container}>
            <div className={styles.dataBox}>
                <div className={styles.number}>number</div>
                <div className={styles.dataOf}> data</div>
            </div>
            <div className={styles.nameBurger}>NameBurger</div>
            <div className={styles.viewBox}>
                <div>
                {constructorIngredients.map((item, index) => {
                    // const backgroundImage =  item.img
                    return (<img className={styles.image} src={item.img}/>)
                    // return (<div className={styles.image} style={{backgroundImage}}/>)
                })}
                </div>
                <div className={styles.sumBox}>
                <div className={styles.sum}>480</div>
                <CurrencyIcon type="primary"/>
                </div>
            </div>
        </div>
    )
}