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
        body: JSON.stringify({ingredients})
    })
        .then(handleResponse)
}

// Тело запроса
//     {
//         "ingredients": ["609646e4dc916e00276b286e","609646e4dc916e00276b2870"]
//     }
//В теле запроса нужно передать _id всех ингредиентов, которые находятся в компоненте BurgerConstructor. Пример ответа:
// {
//   "name": "Краторный метеоритный бургер",
//   "order": {
//       "number": 6257
//   },
//   "success": true
// }
// }