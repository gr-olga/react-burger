import {AuthForm} from "../auth/auth-form";
import styles from "../registration/registration.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {ChangeEvent, useState} from "react";

function PasswordRecovery() {
    const [emailCode, setEmailCode] = useState('')
    const [password, setPassword] = useState('')
    const onChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailCode(e.target.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    return (
        <AuthForm
            title={'Восстановление пароля'}
            text={'Вспомнили пароль?'}
            link={''}
            linkText={'Войти'}
            route={'/login'}
        >

            <div className={styles.box}>
                <PasswordInput onChange={onChangePassword} value={password} name={'password'}/>
            </div>
            <div className={styles.box}>
                <Input
                    type={'text'}
                    onChange={onChangeCode}
                    placeholder={'Введите код из письма'}
                    value={emailCode}
                    name={'name'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                />
            </div>
            <div className={styles.button}>
                <Button type="primary" size="large">{'Сохранить'}</Button>
            </div>
        </AuthForm>
    )
}

export default PasswordRecovery