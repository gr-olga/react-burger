import {TUserData} from '../../utils/types'
import {TAction} from "../actions";
import {SET_USER_DATA} from "../actions/auth";


export const userData: TUserData = {
    user: {
        email: "",
        name: ""
    },
    accessToken: "",
    refreshToken: ""
}

export const userReducer = (state: TUserData = userData, action: TAction): TUserData => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                user: action.userData.user,
                refreshToken: action.userData.refreshToken,
                accessToken: action.userData.accessToken
            };
        }
        default: {
            return state
        }
    }

}