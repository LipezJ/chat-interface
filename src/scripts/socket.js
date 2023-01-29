import { io } from "socket.io-client";
import { loginSucess, joinSucess, sendSucess, sendPage, updateChatsSucess } from './main'

const socket = io('http://localhost:4000', { transports : ['websocket'],  });

socket.on('alert', data => console.log("error:",data.ms))
socket.on('loginSucess', loginSucess)
socket.on('joinSucess', joinSucess)
socket.on('sendSucess', sendSucess)
socket.on('sendPage', sendPage)
socket.on('updateChatsSucess', updateChatsSucess)

export {socket}