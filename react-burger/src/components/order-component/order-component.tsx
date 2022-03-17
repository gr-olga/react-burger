import styles from './order-component.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
export function OrderComponent(props:any){
    return(
        <div className={styles.container}>
           <img className={styles.image} src={props.thumbnail}/>
            <h4 className={styles.text}>{props.text}</h4>
            <h4 className={styles.price}>{props.price}</h4>
            <CurrencyIcon type="primary" />
        </div>
    )
}