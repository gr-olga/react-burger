import styles from './user-profile.module.css'
import {EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {ChangeEvent, useState} from "react";
import ProfileNavigation from "../profile-navigation/profile-navigation";

function UserProfile() {
    const [name, setName] = useState('Mark')
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
        <div className={styles.mainContainer}>
       <ProfileNavigation type={'profile'}/>
            <div className={styles.formContainer}>
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
            </div>
            <div className={styles.emptyContainer}></div>
        </div>
    )
}

export default UserProfile