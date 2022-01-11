export const baseUrl = "https://norma.nomoreparties.space/api/ingredients"
const handleResponse = (res) => {
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
}

export function getIngredientsData(baseUrl) {
    return fetch(baseUrl)
        .then((res) => (res.json()))
        .catch((err) => console.log("failed", err))
}

export function getInitialOrder(ingredients) {
    return fetch('https://norma.nomoreparties.space/api/orders', {
        method: "POST",
        body: JSON.stringify({ingredients}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(handleResponse)
        .catch((err) => console.log("failed", err))
}
