import { socket } from './socket'

let setUser_, updatePosts_, setSomeone_, setPosts_, addPost_, posts_, someone_, updateCards_, addCards_

function login(e, setUser, type){
    let email = document.querySelector('#emaili').value
    let pass = document.querySelector('#passwordi').value
    setUser_ = setUser
    if (type === 'Login') {
        socket.emit('login', {email: email, pass: pass})
    } else {
        let user = document.querySelector('#useri').value
        socket.emit('singup', {email: email, pass: pass, user: user})
    }
}
function loginSucess(data){
    setUser_(data.user)
}
function logout(e) {
    socket.emit('logout', {})
    setUser_(null)
}

function create(e){
    let chat = document.querySelector('#chati').value
    socket.emit('createReq', {chat: chat})
}
function join(e, chat_){
    let chat = document.querySelector('#chati').value
    socket.emit('joinReq', {chat: e.target.className === 'chatcard'? chat_ : chat})
}
function joinSucess(data){
    setSomeone_(data.chat)//pasar nombre por data
    setPosts_([])
    updatePosts_(data.posts)
    scrollBotom()
    if (data.new) {
        socket.emit('addChats', {chat: data.chat})
        addCards_(data.chat)
    }
    document.querySelector('#chati').value = ''
}
function updateChatsSucess(data){
    updateCards_(data.chats)
}

function sendReq(e, user, chat) {
    let post = document.querySelector('#posti').value
    document.querySelector('#posti').value = ''
    socket.emit('sendReq', {user: user, post: post, chat: chat})
}
function sendSucess(data){
    addPost_(data.user, data.post)
    scrollBotom()
}

function ePost(funcPost, funcSetSomeone, funcClean, funcAddPost, funcPosts, funcSomeone) {
    updatePosts_ = funcPost
    setSomeone_ = funcSetSomeone
    setPosts_ = funcClean
    addPost_ = funcAddPost
    posts_ = funcPosts
    someone_ = funcSomeone
}
function eCards(funcUpdate, funcAdd) {
    if (!updateCards_) socket.emit('updateChats', {})
    updateCards_ = funcUpdate
    addCards_ = funcAdd
}

function enterKey(e, user, chat) {
    if (e.key === 'Enter') sendReq(e, user, chat)
}
function scrollBotom() {
    setTimeout(() => {
        document.querySelector('#posts').scroll(0, document.querySelector('#posts').scrollHeight)
    }, 500)
}
function scrollPosts(e) {
    if (e.target.scrollTop === 0) {
        socket.emit('nextPage', {chat: someone_})
    }
}
function sendPage(data){
    let newArr = {}
    Object.entries(posts_).forEach(([k, item]) => newArr[item.key] = item.props)
    setPosts_([])
    updatePosts_({...data, ...newArr})
}

export {login, logout, create, join, sendSucess, sendReq, ePost, enterKey, loginSucess, joinSucess, scrollPosts, sendPage, eCards, updateChatsSucess}