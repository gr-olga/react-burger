import styles from './user-profile.module.css'
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import ProfileNavigation from "../profile-navigation/profile-navigation";
import {setUserData} from "../../services/actions/auth";
import {useDispatch} from "react-redux";
import {useSelector} from "../../utils/types";
import {userData} from "../../services/reducers/auth";
import {ChangeEvent, useEffect, useState} from "react";
import {getCookie} from "../../utils/cookies-helpers";
import {getUserData, TRegistrationResponse, updateUserData} from "../../api/api";

function UserProfile() {
    const dispatch = useDispatch();

    const {user} = useSelector(() => userData)


    const [targetName, setTargetName] = useState(user.name)
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setTargetName(e.target.value)
    }
    const [targetEmail, setTargetEmail] = useState(user.email)
    const [targetPassword, setTargetPassword] = useState('')
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setTargetEmail(e.target.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setTargetPassword(e.target.value)
    }

    useEffect(() => {
        const token = getCookie('accessToken');
        if (!token) return;

        getUserData(token)
            .then((res: TRegistrationResponse) => {
                dispatch(setUserData({
                    user: res.user,
                    refreshToken: res.refreshToken,
                    accessToken: res.accessToken
                }))
                return res;
            })
    }, [])

    function updateData() {
        const token = getCookie('accessToken');
        if (token) {
            updateUserData(token)
                .then((res: TRegistrationResponse) => {
                    dispatch(setUserData({
                        user: res.user,
                        refreshToken: res.refreshToken,
                        accessToken: res.accessToken
                    }))
                    return res;
                })
        }
    }

    function removeChanges() {
        setTargetName(user.name)
        setTargetEmail(user.email)
        setTargetPassword('')
    }

    return (
        <div className={styles.mainContainer}>
            <ProfileNavigation type={'profile'}/>
            <div className={styles.formContainer} onSubmit={updateData}>
                <div className={styles.box}>
                    <Input
                        type={'text'}
                        onChange={onChangeName}
                        placeholder={'Имя'}
                        value={targetName}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={styles.box}>
                    <EmailInput onChange={onChangeEmail} value={targetEmail} name={'email'}/>
                </div>
                <div className={styles.box}>
                    <PasswordInput onChange={onChangePassword} value={targetPassword} name={'password'}/>
                </div>
                <div className={styles.button}>
                    <Button type="secondary" size="medium" onClick={removeChanges}>{'Отмена'}</Button>
                    <Button type="primary" size="large">{'Сохранить'}</Button>
                </div>
            </div>

        </div>
    )
}

export default UserProfile