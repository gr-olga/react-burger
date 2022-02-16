import styles from "./registration.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {ChangeEvent, useState} from "react";
import {AuthForm} from "../auth/auth-form";


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
        <AuthForm
            title={'Регистрация'}
            text={'Уже зарегистрированы?'}
            link={''}
            linkText={'Войти'}
            route={'/login'}
        >
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
        </AuthForm>
)
}

export default Registration