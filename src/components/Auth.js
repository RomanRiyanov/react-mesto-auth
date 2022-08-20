const BASE_URL = 'https://auth.nomoreparties.co';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json()
    } else return Promise.reject(`Ошибка: ${res.status}`)
}

const register = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            "password": password,
            "email": email
        }
    })
    .then(res => checkResponse(res))
    .then((res) => {
        return res;
      })
    .catch((err) => console.log(`Ошибка: ${err}`))
}

