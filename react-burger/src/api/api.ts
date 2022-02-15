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
