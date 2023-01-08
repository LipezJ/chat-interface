import { socket } from './socket'
import { app } from './firebase/config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

let setUser_, updatePosts_, setSomeone_, setPosts_, addPost_

const auth = getAuth(app)
let userToken

function login(e, setUser, type){
    console.log(type)
    let email = document.querySelector('#email').value
    let pass = document.querySelector('#password').value
    setUser_ = setUser
    if (type === 'Login') {
        console.log('Login Req')
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            console.log(userCredential.user.uid)
            userToken = userCredential.user.uid;
            socket.emit('login', {token: userToken})
        }).catch((err) => console.log(err))
    } else {
        let user = document.querySelector('#user').value
        createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            userToken = userCredential.user.uid;
            socket.emit('singup', {token: userToken, user: user})
        }).catch((err) => console.log(err))
    }
}
function loginSucess(data){
    setUser_(data.user)
}
function logout(e) {
    signOut(auth).then(() => {
        userToken = undefined
        socket.emit('logout', {})
        setUser_(null)
    })
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
    setSomeone_(document.querySelector('#createjoini').value)//pasar nombre por data
    setPosts_([])
    updatePosts_(data.posts)
    scrollBotom()
    document.querySelector('#createjoini').value = ''
}

function sendReq(e, user, chat) {
    let post = document.querySelector('#post').value
    document.querySelector('#post').value = ''
    socket.emit('sendReq', {user: user, post: post, chat: chat})
}
function sendSucess(data){
    addPost_(data.user, data.post)
    scrollBotom()
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
function scrollBotom() {
    setTimeout(() => {
        document.querySelector('#posts').scroll(0, document.querySelector('#posts').scrollHeight)
    }, 500)
}

export {login, logout, create, join, sendSucess, sendReq, ePost, enterKey, loginSucess, joinSucess}