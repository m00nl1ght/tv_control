const sendRequest = function(method, url, body = null) {
    return fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => {
        return response.json()
    })
}

export default sendRequest