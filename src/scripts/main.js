import { socket } from './socket'

let setUser_, updatePosts_, setSomeone_, setPosts_, addPost_

function login(e, setUser){
    let data = {}
    data['user'] = document.querySelector('#user').value
    data['pass'] = document.querySelector('#password').value
    if (document.querySelector('#email') !== null) {
        data['email'] = document.querySelector('#email').value
    }
    setUser_ = setUser
    if (!data.email) socket.emit('loginReq', data)
    else socket.emit('singupReq', data)
}
function loginSucess(data){
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
    setPosts_([])
    updatePosts_(data.posts)
    document.querySelector('#createjoini').value = ''
}

function sendReq(e, user, chat) {
    let post = document.querySelector('#post').value
    socket.emit('sendReq', {user: user, post: post, chat: chat})
}
function sendSucess(data){
    document.querySelector('#post').value = ''
    addPost_(data.user, data.post)
}

function ePost(funcPost, funcSomeone, funcClean, funcAddPost) {
    updatePosts_ = funcPost
    setSomeone_ = funcSomeone
    setPosts_ = funcClean
    addPost_ = funcAddPost
}
function enterKey(e, user, chat) {
    if (e.key === 'Enter') sendReq(e, user, chat)
}

export {login, logout, create, join, sendSucess, sendReq, ePost, enterKey, loginSucess, joinSucess}