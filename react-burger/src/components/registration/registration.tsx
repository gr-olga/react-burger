import styles from "./registration.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {ChangeEvent, useState} from "react";


function Registration() {
    const [name, setName] = useState('')
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h2 className={styles.title}> {"Регистрация"} </h2>
                <form className={styles.form}>
                    <div className={styles.box}>
                        <Input
                            type={'text'}
                            onChange={onChangeName}
                            placeholder={'Имя'}
                            value={name}
                            name={'name'}
                            error={false}
                            errorText={'Ошибка'}
                            size={'default'}
                        />
                    </div>
                    <div className={styles.box}>
                        <EmailInput onChange={onChangeEmail} value={email} name={'email'}/>
                    </div>
                    <div className={styles.box}>
                        <PasswordInput onChange={onChangePassword} value={password} name={'password'}/>
                    </div>
                    <div className={styles.button}>
                        <Button type="primary" size="large">{'Зарегистрироваться'}</Button>
                    </div>
                </form>
                <div className={styles.extra}>
                    <h3 className={styles.option}>Уже зарегистрированы?</h3>
                    <a className={styles.link} href={''}>Войти</a>
                </div>
            </div>
        </div>
)
}

export default Registration