import styles from "./order-info.module.css";
import {useSelector} from "../../utils/types";
import {OrderComponent} from "../../components/order-component/order-component";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export default function OrderInfo() {
    const {ingredients} = useSelector(({ingredientsReducer}) => ingredientsReducer)

    return (
        <div className={styles.container}>
            <h3 className={styles.number}>#034533</h3>
            <h2 className={styles.name}> Name of burger </h2>
            <p className={styles.status}>Status</p>
            <h3 className={styles.composition}> Состав: </h3>
            <div>
                {ingredients.map((item) => {
                    return(
                        <OrderComponent
                            key={item.id}
                            text={item.name}
                            thumbnail={item.image}
                            price={item.price}
                        />
                    )
                })}
            </div>
            <div className={styles.time}>
                <h4 className={styles.timeTitle}>Вчера, 13:50 i-GMT+3</h4>
                <div className={styles.sum}>
                    <h4 className={styles.number}>540</h4>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}