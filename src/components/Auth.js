const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(password, email)
    })
    .then((res) => {
        try {
          if (res.status === 200){
            return res.json();
          } 
        } catch(error){
          return (error)
        }
      })
      .then((res) => {
        return res;
      })
      .catch((error) => console.log(error));
}; 

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(password, email)
    })
    .then((res) => {
        try {
          if (res.status === 200){
            return res.json();
          } 
        } catch(error){
          return (error)
        }
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
        try {
          if (res.status === 200){
            return res.json();
          } 
        } catch(error){
          return (error)
        }
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
}