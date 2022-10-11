class Api {
    constructor (config) {
        this._baseUrl = config.baseUrl;
        this._headers = config.headers
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        } else return Promise.reject(`Ошибка: ${res.status}`)
    }
    

    getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: this._headers
        })
        .then(this._checkResponse)
        }

    setUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
                method: 'PATCH',
                credentials: 'include',
                headers: this._headers,
                body: JSON.stringify ({
                    name: data.name,
                    about: data.about
                  })
            })
            .then(this._checkResponse)
        }

    setUserAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
                method: 'PATCH',
                credentials: 'include',
                headers: this._headers,
                body: JSON.stringify (data)
            })
            .then(this._checkResponse)
        }
    
    getCards() {
        return fetch(`${this._baseUrl}/cards`, {
                method: 'GET',
                credentials: 'include',
                headers: this._headers
            })
            .then(this._checkResponse)
        }

    addNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
                method: 'POST',
                credentials: 'include',
                headers: this._headers,
                body: JSON.stringify ({
                    name: data.name,
                    link: data.link
                    })
            })
            .then(this._checkResponse)
        }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: this._headers,
            })
            .then(this._checkResponse)
        }

    changeLikeCardStatus(id, isLiked) {
        if (isLiked) {
            return fetch(`${this._baseUrl}/cards/${id}/likes`, {
                method: 'DELETE',
                credentials: 'include',
                headers: this._headers,
            })
            .then(this._checkResponse)
        } else {
            return fetch(`${this._baseUrl}/cards/${id}/likes`, {
                method: 'PUT',
                credentials: 'include',
                headers: this._headers,
            })
            .then(this._checkResponse)
        }
    }
}

const apiConfig = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
    headers: {
      authorization: '6b29f5e5-c172-4a06-806f-c42366ee7092',
      'Content-Type': 'application/json'
    }
  }
  
export const api = new Api(apiConfig);