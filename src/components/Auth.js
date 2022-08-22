const BASE_URL = 'https://auth.nomoreparties.co';

// const checkResponse = (res) => {
//     if (res.ok) {
//         return res.json()
//     } else return Promise.reject(`Ошибка: ${res.status}`)
// }

export const register = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        })
    })
    .then((res) => {
        if (res.status === 400) {
            alert('Код ошибки 400 - некорректно заполнено одно из полей');
        } else return res.json();
    })
    .then((res) => {
        return res;
      })
    .catch((err) => console.log(`Ошибка: ${err}`))
}

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        })
    })
    .then((res) => {
        if (res.status === 400) {
            alert('Код ошибки 400 - не передано одно из полей');
        } else if (res.status === 401) {
            alert('Код ошибки 401 - пользователь с email не найден');
        } 
        else return res.json();
    })
    .then((res) => {
        return res;
      })
    .catch((err) => console.log(`Ошибка: ${err}`))
}

export const getContent = (jwt) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${jwt}`
        }
    })
    .then((res) => {
        if (res.status === 400) {
            alert('Код ошибки 400 - Токен не передан или передан не в том формате');
        } else if (res.status === 401) {
            alert('Код ошибки 401 - Переданный токен некорректен');
        } 
        else return res.json();
    })
}