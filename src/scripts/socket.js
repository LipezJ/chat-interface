import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import { loginSucess, joinSucess, sendSucess } from './main'

const socket = io('http://127.0.0.1:4000', { transports : ['websocket'] });

socket.on('alert', data => alert(data.ms))
socket.on('loginSucess', loginSucess)
socket.on('joinSucess', joinSucess)
socket.on('sendSucess', sendSucess)

export {socket}