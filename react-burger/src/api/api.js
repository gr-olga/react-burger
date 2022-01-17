
export const BASE_URL = "https://norma.nomoreparties.space/api/"
const handleResponse = (res) => {
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
}

export function getIngredientsData() {
    return fetch(`${BASE_URL}ingredients`)
        .then(handleResponse)
       // .then((res) => (res.json()))
        .catch((err) => console.log("failed", err))
}

export function getInitialOrder(ingredientIds) {
    return fetch(`${BASE_URL}orders`, {
        method: "POST",
        body: JSON.stringify({ingredients: ingredientIds}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(handleResponse)
        .catch((err) => console.log("failed", err))
}
