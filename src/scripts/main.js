import { socket } from './socket'

import { setSomeone, setPosts, addPost, recargePost  } from './app/slices/posts'
import { setChats, addCard } from './app/slices/chats'
import { setUser } from './app/slices/user'
import { store } from './app/store'

const dispatch = store.dispatch
let state = store.getState

function login({email, pass, user}, type){
    if (type === 'Login') {
        socket.emit('login', {email: email, pass: pass})
    } else if (type === 'Sing up') {
        socket.emit('singup', {email: email, pass: pass, user: user})
    }
}
function loginSucess(data){
    dispatch(setUser(data.user))
    socket.emit('updateChats', {})
}
function logout(e) {
    socket.emit('logout', {})
    dispatch(setUser(undefined))
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
    dispatch(setSomeone(data.chat))
    dispatch(setPosts(data.posts))
    scrollBotom()
    if (data.new) {
        socket.emit('addChats', {chat: data.chat})
        dispatch(addCard(data.chat))
    }
    document.querySelector('#chati').value = ''
}
function updateChatsSucess(data){
    dispatch(setChats(data.chats))
}

function sendReq() {
    let post = document.querySelector('#posti').value
    document.querySelector('#posti').value = ''
    socket.emit("sendReq", {
        user: state().user.value,
        post: post,
        chat: state().posts.value.someone,
        date: Date.now(),
    });
}
function sendSucess(data){
    dispatch(addPost({user: data.user, post: data.post, date: data.date}))
    scrollBotom()
}

function menu (){
    let temp = document.querySelector('#chatc').style.display
    document.querySelector('#chatc').style.display = temp === '' || temp === 'none' ? 'block' : 'none'
}

function scrollBotom() {
    setTimeout(() => {
        document.querySelector('#posts').scroll(0, document.querySelector('#posts').scrollHeight)
    }, 50)
}
function scrollPosts(e) {
    if (e.target.scrollTop === 0) {
        const old = e.target.scrollHeight
        socket.emit('nextPage', {chat: store.getState().posts.value.someone})
        setTimeout(() => {
            e.target.scroll(0, e.target.scrollHeight - old)
        }, 50)
    }
}
function sendPage(data){
    console.log(data)
    dispatch(recargePost(data))
}

window.onresize = () => {
    if (window.innerWidth > 700) {
        document.querySelector('#chatc').style.display = 'block'
    }
}

function responseTo(e){
    let targetNodes = e.target.className.indexOf('posts') >= 0 ? e.target.childNodes : e.target.parentNode.childNodes;
    let [firstNode, , thirdNode] = targetNodes;
    if (firstNode.textContent.length === 0) return;
    let t = e.target ?? '';
    let posti = document.querySelector('#posti');
    if (t.startsWith('::RE(')) t = posti.value;
    let reString = `::RE(${firstNode.textContent.replace(':', '')}:${thirdNode.textContent.substring(0,10)})${t}`;
    posti.value = reString;
} 

export {
    login,
    logout,
    create,
    join,
    sendSucess,
    sendReq,
    loginSucess,
    joinSucess,
    scrollPosts,
    sendPage,
    updateChatsSucess,
    menu,
    responseTo
};