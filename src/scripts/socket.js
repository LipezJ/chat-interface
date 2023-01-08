import { io } from "socket.io-client";
import { loginSucess, joinSucess, sendSucess } from './main'

const socket = io('https://77d4-190-61-45-156.ngrok.io', { transports : ['websocket'] });

socket.on('alert', data => alert(data.ms))
socket.on('loginSucess', loginSucess)
socket.on('joinSucess', joinSucess)
socket.on('sendSucess', sendSucess)

export {socket}