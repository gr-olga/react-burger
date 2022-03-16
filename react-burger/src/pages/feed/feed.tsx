import styles from './feed.module.css'
import {FeedBox} from "../../components/feed-box/feed-box";

export function Feed() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Лента заказов</h3>
            <div className={styles.leftContainer}>
                <FeedBox/>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.orders}>
                    <div className={styles.ready}>
                        <h3 className={styles.condition}>Готовы:</h3>
                        <p className={styles.numbers}>034533 034533 543222 433456 345765</p>
                    </div>
                    <div className={styles.ready}>
                        <h3 className={styles.condition}>В работе:</h3>
                        <p className={styles.numbers}>034533 543222 433456</p>
                    </div>
                </div>
                <h3 className={styles.condition}>Выполнено за все время:</h3>
                <p className={styles.numbersBig}>28 752</p>
                <h3 className={styles.condition}>Выполнено за сегодня:</h3>
                <p className={styles.numbersBig}>138</p>
            </div>
        </div>
    )
}