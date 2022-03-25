import styles from './order-history.module.css'
import {FeedBox} from "../../components/feed-box/feed-box";
import ProfileNavigation from "../profile-navigation/profile-navigation";

export function OrderHistory(){
    return(
        <div className={styles.mainContainer}>
            <ProfileNavigation/>
            <div className={styles.container}>
            <FeedBox/>
            </div>
        </div>
    )
}