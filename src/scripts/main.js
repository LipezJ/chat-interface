function login(){
    let data = {}
    data['user'] = document.querySelector('#user').value
    data['pass'] = document.querySelector('#password').value
    if (document.querySelector('#email') !== null) {
        data['email'] = document.querySelector('#email').value
    }
    console.log(data)
}

export {login}