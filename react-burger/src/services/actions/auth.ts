import {AppDispatch, AppThunk, TUserData, TUserLoginData, TUserWithPassword} from "../../utils/types";
import {
    getLoginUserData,
    getLogOut,
    getRegisterUserData,
    getReorderPassword,
    getUserData,
    TRegistrationResponse,
    TResponse,
    updateUserData
} from "../../api/api";

export const SET_USER_DATA: "SET_USER_DATA" = 'SET_USER_DATA';

export interface setUserData {
    type: typeof SET_USER_DATA
    userData: TUserData
}

export const setUserData = (userData: TUserData): setUserData => ({
    type: SET_USER_DATA,
    userData
})

export const REMOVE_USER: "REMOVE_USER" = "REMOVE_USER";

export interface removeUser {
    type: typeof REMOVE_USER
    userData: TUserData
}

export type TAuthAction =
    | setUserData
    | getRegisterProfileRequest
    | getRegisterProfileSuccess
    | getRegisterProfileFailed
    | getLoginRequest
    | getLoginSuccess
    | getLoginFailed
    | reorderPasswordRequest
    | reorderPasswordSuccess
    | reorderPasswordFailed
    | logOutRequest
    | logOutSuccess
    | logOutFailed
    | getUserDataRequest
    | getUserDataSuccess
    | getUserDataFailed
    | getUpdateUserDataRequest
    | getUpdateUserDataSuccess
    | getUpdateUserDataFailed


export const GET_REGISTER_PROFILE_REQUEST: "GET_REGISTER_PROFILE_REQUEST" = 'GET_REGISTER_PROFILE_REQUEST';
export const GET_REGISTER_PROFILE_SUCCESS: 'GET_REGISTER_PROFILE_SUCCESS' = 'GET_REGISTER_PROFILE_SUCCESS';
export const GET_REGISTER_PROFILE_FAILED: 'GET_REGISTER_PROFILE_FAILED' = 'GET_REGISTER_PROFILE_FAILED';


export interface getRegisterProfileRequest {
    type: typeof GET_REGISTER_PROFILE_REQUEST;
    userData: TUserWithPassword;
}

export interface getRegisterProfileSuccess {
    type: typeof GET_REGISTER_PROFILE_SUCCESS;
    userData: TUserData;
}

export interface getRegisterProfileFailed {
    type: typeof GET_REGISTER_PROFILE_FAILED;
}


const getRegisterProfileRequest = (userData: TUserWithPassword): getRegisterProfileRequest => ({
    type: GET_REGISTER_PROFILE_REQUEST,
    userData
})
const getRegisterProfileSuccess = (userData: TUserData): getRegisterProfileSuccess => ({
    type: GET_REGISTER_PROFILE_SUCCESS,
    userData
})
const getRegisterProfileFailed = (): getRegisterProfileFailed => ({
    type: GET_REGISTER_PROFILE_FAILED,
})


export const getRegisterProfile: AppThunk = (userData: TUserWithPassword) => (dispatch: AppDispatch) => {
    dispatch(getRegisterProfileRequest(userData));
    return getRegisterUserData(userData)
        .then((res: TRegistrationResponse) => {
            if (res && res.success) {
                dispatch(getRegisterProfileSuccess({
                    user: res.user,
                    refreshToken: res.refreshToken,
                    accessToken: res.accessToken
                }));
            } else {
                dispatch(getRegisterProfileFailed());
            }
            return res;
        })
        .catch((err) => console.log("failed", err))
}

export const GET_LOGIN_REQUEST: "GET_LOGIN_REQUEST" = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS: 'GET_LOGIN_SUCCESS' = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAILED: 'GET_LOGIN_FAILED' = 'GET_LOGIN_FAILED';


export interface getLoginRequest {
    type: typeof GET_LOGIN_REQUEST;
    userData: TUserLoginData;
}

export interface getLoginSuccess {
    type: typeof GET_LOGIN_SUCCESS;
    userData: TUserData;
}

export interface getLoginFailed {
    type: typeof GET_LOGIN_FAILED;
}


const getLoginRequest = (userData: TUserLoginData): getLoginRequest => ({
    type: GET_LOGIN_REQUEST,
    userData
})
const getLoginSuccess = (userData: TUserData): getLoginSuccess => ({
    type: GET_LOGIN_SUCCESS,
    userData
})
const getLoginFailed = (): getLoginFailed => ({
    type: GET_LOGIN_FAILED,
})

export const getLogin: AppThunk = (userData: TUserLoginData) => (dispatch: AppDispatch) => {
    dispatch(getLoginRequest(userData));
    return getLoginUserData(userData)
        .then((res: TRegistrationResponse) => {
            if (res && res.success) {
                dispatch(getLoginSuccess({
                    user: res.user,
                    refreshToken: res.refreshToken,
                    accessToken: res.accessToken
                }));
            } else {
                dispatch(getLoginFailed());
            }
            return res;
        })
        .catch((err) => console.log("failed", err))
}


export const REORDER_PASSWORD_REQUEST: "REORDER_PASSWORD_REQUEST" = 'REORDER_PASSWORD_REQUEST';
export const REORDER_PASSWORD_SUCCESS: 'REORDER_PASSWORD_SUCCESS' = 'REORDER_PASSWORD_SUCCESS';
export const REORDER_PASSWORD_FAILED: 'REORDER_PASSWORD_FAILED' = 'REORDER_PASSWORD_FAILED';


export interface reorderPasswordRequest {
    type: typeof REORDER_PASSWORD_REQUEST;
    email: string;
}

export interface reorderPasswordSuccess {
    type: typeof REORDER_PASSWORD_SUCCESS;
}

export interface reorderPasswordFailed {
    type: typeof REORDER_PASSWORD_FAILED;
}


const reorderPasswordRequest = (email: string): reorderPasswordRequest => ({
    type: REORDER_PASSWORD_REQUEST,
    email
})
const reorderPasswordSuccess = (): reorderPasswordSuccess => ({
    type: REORDER_PASSWORD_SUCCESS,

})
const reorderPasswordFailed = (): reorderPasswordFailed => ({
    type: REORDER_PASSWORD_FAILED,
})

export const reorderPassword: AppThunk = (email: string) => (dispatch: AppDispatch) => {
    dispatch(reorderPasswordRequest(email));
    return getReorderPassword(email)
        .then((res: TResponse) => {
            if (res && res.success) {
                dispatch(reorderPasswordSuccess());
            } else {
                dispatch(reorderPasswordFailed());
            }
            return res;
        })
        .catch((err) => console.log("failed", err))
}


export const LOGOUT_REQUEST: "LOGOUT_REQUEST" = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED: 'LOGOUT_FAILED' = 'LOGOUT_FAILED';


export interface logOutRequest {
    type: typeof LOGOUT_REQUEST;
    token: string;
}

export interface logOutSuccess {
    type: typeof LOGOUT_SUCCESS;
}

export interface logOutFailed {
    type: typeof LOGOUT_FAILED;
}


const logOutRequest = (token: string): logOutRequest => ({
    type: LOGOUT_REQUEST,
    token
})
const logOutSuccess = (): logOutSuccess => ({
    type: LOGOUT_SUCCESS,

})
const logOutFailed = (): logOutFailed => ({
    type: LOGOUT_FAILED,
})

export const LogOut: AppThunk = (token: string) => (dispatch: AppDispatch) => {
    dispatch(reorderPasswordRequest(token));
    return getLogOut(token)
        .then((res: TResponse) => {
            if (res && res.success) {
                dispatch(reorderPasswordSuccess());
            } else {
                dispatch(reorderPasswordFailed());
            }
            return res;
        })
        .catch((err) => console.log("failed", err))
}


export const GET_USER_DATA_REQUEST: "GET_USER_DATA_REQUEST" = 'GET_USER_DATA_REQUEST';
export const GET_USER_DATA_SUCCESS: 'GET_USER_DATA_SUCCESS' = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILED: 'GET_USER_DATA_FAILED' = 'GET_USER_DATA_FAILED';


export interface getUserDataRequest {
    type: typeof GET_USER_DATA_REQUEST;
    accessToken: string
}

export interface getUserDataSuccess {
    type: typeof GET_USER_DATA_SUCCESS;
    user: TUserData
}

export interface getUserDataFailed {
    type: typeof GET_USER_DATA_FAILED;
}


const getUserDataRequest = (accessToken: string): getUserDataRequest => ({
    type: GET_USER_DATA_REQUEST,
    accessToken
})
const getUserDataSuccess = (user: TUserData): getUserDataSuccess => ({
    type: GET_USER_DATA_SUCCESS,
    user

})
const getUserDataFailed = (): getUserDataFailed => ({
    type: GET_USER_DATA_FAILED,
})

export const initialUserData: AppThunk = (accessToken: string) => (dispatch: AppDispatch) => {
    dispatch(getUserDataRequest(accessToken));
    return getUserData(accessToken)
        .then((res: TRegistrationResponse) => {
            if (res && res.success) {
                dispatch(getUserDataSuccess({
                    user: res.user,
                    refreshToken: res.refreshToken,
                    accessToken: res.accessToken
                }))
                ;
            } else {
                dispatch(getUserDataFailed());
            }
            return res;
        })
        .catch((err) => console.log("failed", err))
}

export const GET_UPDATE_USER_DATA_REQUEST: "GET_UPDATE_USER_DATA_REQUEST" = 'GET_UPDATE_USER_DATA_REQUEST';
export const GET_UPDATE_USER_DATA_SUCCESS: 'GET_UPDATE_USER_DATA_SUCCESS' = 'GET_UPDATE_USER_DATA_SUCCESS';
export const GET_UPDATE_USER_DATA_FAILED: 'GET_UPDATE_USER_DATA_FAILED' = 'GET_UPDATE_USER_DATA_FAILED';


export interface getUpdateUserDataRequest {
    type: typeof GET_UPDATE_USER_DATA_REQUEST;
    accessToken: string,
    user: TUserWithPassword
}

export interface getUpdateUserDataSuccess {
    type: typeof GET_UPDATE_USER_DATA_SUCCESS;
    user: TUserData
}

export interface getUpdateUserDataFailed {
    type: typeof GET_UPDATE_USER_DATA_FAILED;
}


const getUpdateUserDataRequest = (accessToken: string, user: TUserWithPassword): getUpdateUserDataRequest => ({
    type: GET_UPDATE_USER_DATA_REQUEST,
    accessToken,
    user
})
const getUpdateUserDataSuccess = (user: TUserData): getUpdateUserDataSuccess => ({
    type: GET_UPDATE_USER_DATA_SUCCESS,
    user

})
const getUpdateUserDataFailed = (): getUpdateUserDataFailed => ({
    type: GET_UPDATE_USER_DATA_FAILED,
})

export const getUpdateUserData: AppThunk = (accessToken: string, user: TUserWithPassword) => (dispatch: AppDispatch) => {
    dispatch(getUpdateUserDataRequest(accessToken, user));
    return updateUserData(accessToken, user)
        .then((res: TRegistrationResponse) => {
            if (res && res.success) {
                dispatch(getUpdateUserDataSuccess({
                    user: res.user,
                    refreshToken: res.refreshToken,
                    accessToken: res.accessToken
                }))
                ;
            } else {
                dispatch(getUpdateUserDataFailed());
            }
            return res;
        })
        .catch((err) => console.log("failed", err))
}