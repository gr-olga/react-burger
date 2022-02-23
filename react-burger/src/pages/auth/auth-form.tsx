import styles from "./auth.module.css";
import {AuthExtra} from "./auth-extra";
import {SyntheticEvent} from "react";

export function AuthForm(props: TAuthFormProps) {

    function onSubmit(e: SyntheticEvent): void {
        if (!props.onSubmit) return;
        e.preventDefault();
        props.onSubmit();
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h2 className={styles.title}> {props.title} </h2>
                <form className={styles.form} onSubmit={onSubmit}>
                    {props.children}
                </form>
                <AuthExtra text={props.text}
                           link={props.link}
                           linkText={props.linkText}
                           route={props.route}
                />
                {/*<AuthExtra text={props.text}*/}
                {/*           link={props.link}*/}
                {/*           linkText={props.linkText}/>*/}
            </div>
        </div>
    )
}

interface TAuthFormProps {
    children: any;
    title: string;
    text: string;
    link: string;
    linkText: string;
    route: string
    onSubmit?: () => any
}