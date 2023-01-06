import { socket } from './socket'

let setUser_, setPosts_, setSomeone_

function login(e, setUser){
    let data = {}
    data['user'] = document.querySelector('#user').value
    data['pass'] = document.querySelector('#password').value
    if (document.querySelector('#email') !== null) {
        data['email'] = document.querySelector('#email').value
    }
    setUser_ = setUser
    console.log(data, !data.email)
    if (!data.email) socket.emit('loginReq', data)
    else socket.emit('singupReq', data)
}
function loginSucess(data){
    console.log('loginSucess')
    setUser_(data.user)
}
function logout(e, setUser) {
    setUser_(null)
}

function create(e, user){
    let chat = document.querySelector('#createjoini').value
    socket.emit('createReq', {chat: chat, user: user})
}
function join(e, user){
    let chat = document.querySelector('#createjoini').value
    socket.emit('joinReq', {chat: chat, user: user}) 
}
function joinSucess(data){
    setSomeone_(document.querySelector('#createjoini').value)
    console.log('join', data)
    Object.keys(data.posts).forEach((post) => {
        sendSucess(data[post])
    })
    document.querySelector('#createjoini').value = ''
}

function sendReq(e, user, chat) {
    console.log('a')
    let post = document.querySelector('#post').value
    socket.emit('sendReq', {user: user, post: post, chat: chat})
}
function sendSucess(data){
    console.log(data)
    document.querySelector('#post').value = ''
    setPosts_(data.user, data.post)
}

function ePost(funcPost, funcSomeone) {
    setPosts_ = funcPost
    setSomeone_ = funcSomeone
}
function enterKey(e, user, chat) {
    if (e.key === 'Enter') sendReq(e, user, chat)
}

export {login, logout, create, join, sendSucess, sendReq, ePost, enterKey, loginSucess, joinSucess}