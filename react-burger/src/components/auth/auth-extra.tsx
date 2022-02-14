import styles from "./auth.module.css";

 export function AuthExtra(props: TAuthExtraProps){
    return(
        <div className={styles.extra}>
            <h3 className={styles.option}>{props.text}</h3>
            <a className={styles.link} href={props.link}> {props.linkText}</a>
        </div>
    )
}


interface TAuthExtraProps {
    text: string;
    link: string;
    linkText: string;
}