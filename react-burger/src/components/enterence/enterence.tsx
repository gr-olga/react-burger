import {ChangeEvent, useState} from "react";
import styles from "./enterence.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";


function Entrance() {
    const [email, setEmail] = useState('bob@example.com')
    const [password, setPassword] = useState('password')
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                    <h2 className={styles.title}> {'Вход'} </h2>
                    <form className={styles.form}>
                        <div className={styles.box}>
                            <EmailInput onChange={onChangeEmail} value={email} name={'email'}/>
                        </div>
                        <div className={styles.box}>
                            <PasswordInput onChange={onChangePassword} value={password} name={'password'}/>
                        </div>
                        <div className={styles.button}>
                            <Button type="primary" size="large">{'Войти'}</Button>
                        </div>
                    </form>
                <div className={styles.extra}>
                    <h3 className={styles.option}>Вы — новый пользователь?</h3>
                    <a className={styles.link} href={''}>Зарегистрироваться</a>
                </div>
                <div className={styles.extra}>
                    <h3 className={styles.option}>Забыли пароль?</h3><a className={styles.link} href={''}>Восстановить
                    пароль</a>
                </div>
            </div>
        </div>
    )
}

export default Entrance