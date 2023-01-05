function login(e, setUser){
    let data = {}
    data['user'] = document.querySelector('#user').value
    data['pass'] = document.querySelector('#password').value
    if (document.querySelector('#email') !== null) {
        data['email'] = document.querySelector('#email').value
    }
    setUser(data.user)
}
function logout(e, setUser) {
    setUser(null)
}
function create(e, user){
    console.log('chat creado')
}
function join(e, user){
    console.log('unido a un chat')
}
function send(e, user){
    console.log('mensaje nuevo')
}

export {login, logout, create, join, send}