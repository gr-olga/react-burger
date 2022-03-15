import styles from './feed.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {FeedBox} from "../../components/feed-box/feed-box";

export function Feed(){
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>Лента заказов</h3>
            <div className={styles.leftContainer}>
           <FeedBox/>
            </div>
            <div className={styles.rightContainer}>

            </div>
        </div>
    )
}