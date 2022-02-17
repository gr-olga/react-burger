import {TUserData, TUserWithPassword} from "../utils/types";

export const BASE_URL = "https://norma.nomoreparties.space/api/"
const handleResponse = (res: Response) => {
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
}

export function getIngredientsData() {
    return fetch(`${BASE_URL}ingredients`)
        .then(handleResponse)
    // .then((res) => (res.json()))
    // .catch((err) => console.log("failed", err))
}

export function getInitialOrder(ingredientIds: Array<number>) {
    return fetch(`${BASE_URL}orders`, {
        method: "POST",
        body: JSON.stringify({ingredients: ingredientIds}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(handleResponse)
    // .catch((err) => console.log("failed", err))
}

export function getReorderPassword(email: string): Promise<{ success: boolean, message: string }> {
    return fetch(`${BASE_URL}password-reset`, {
        method: "POST",
        body: JSON.stringify({email}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(handleResponse)
}

export interface TRegistrationResponse extends TUserData {
    success: boolean,
    message: string,
}

export function getRegisterUserData(userData: TUserWithPassword): Promise<TRegistrationResponse> {
    return fetch(`${BASE_URL}auth/register`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(handleResponse)
}

// export function getLoginUserData(userData: Array<string>): Promise<TRegistrationResponse> {
//     return fetch(`${BASE_URL}auth/login`, {
//         method: "POST",
//         body: JSON.stringify({}),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(handleResponse)
// }