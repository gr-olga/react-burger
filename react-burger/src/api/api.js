
export const baseUrl = "https://norma.nomoreparties.space/api/ingredients"

 export function getIngredientsData(baseUrl) {
    return fetch(baseUrl)
        .then((res) => (res.json()))
        .catch((err) => console.log("failed", err))
}