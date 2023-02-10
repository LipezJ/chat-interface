import { io } from "socket.io-client";
import { loginSucess, joinSucess, sendSucess, sendPage, updateChatsSucess } from './main'

const socket = io('https://chat-online.fly.dev', { transports : ['websocket'],  });

socket.on('alert', data => {alert("error! (datos en consola)"); console.log(data.ms)})
socket.on('loginSucess', loginSucess)
socket.on('joinSucess', joinSucess)
socket.on('sendSucess', sendSucess)
socket.on('sendPage', sendPage)
socket.on('updateChatsSucess', updateChatsSucess)

export {socket}