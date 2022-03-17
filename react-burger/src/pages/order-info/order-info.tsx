import styles from "./order-info.module.css";
import {useSelector} from "../../utils/types";
import {OrderComponent} from "../../components/order-component/order-component";

export default function OrderInfo() {
    const {ingredients} = useSelector(({ingredientsReducer}) => ingredientsReducer)

    return (
        <div className={styles.container}>
            <h3 className={styles.text}>#034533</h3>
            <h2> Name of burger </h2>
            <p>Status</p>
            <h3> Состав: </h3>
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
        </div>
    )
}