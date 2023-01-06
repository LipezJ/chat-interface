let setUser_, setPosts_, setSomeone_

function login(e, setUser){
    let data = {}
    data['user'] = document.querySelector('#user').value
    data['pass'] = document.querySelector('#password').value
    if (document.querySelector('#email') !== null) {
        data['email'] = document.querySelector('#email').value
    }
    setUser_ = setUser
    setUser_(data.user)
}
function logout(e, setUser) {
    setUser_(null)
}
function create(e, user){
    console.log('chat creado')
    setSomeone_(document.querySelector('#createjoini').value)
}
function join(e, user){
    console.log('unido a un chat')
    setSomeone_(document.querySelector('#createjoini').value)
}
function send(e, user){
    let post = document.querySelector('#post').value
    setPosts_(user, post)
}
function ePost(funcPost, funcSomeone) {
    setPosts_ = funcPost
    setSomeone_ = funcSomeone
}

export {login, logout, create, join, send, ePost}