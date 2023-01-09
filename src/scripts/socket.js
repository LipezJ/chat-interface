import { io } from "socket.io-client";
import { loginSucess, joinSucess, sendSucess } from './main'

const socket = io('http://192.168.100.6:4000', { transports : ['websocket'],  });

socket.on('alert', data => alert(data.ms))
socket.on('loginSucess', loginSucess)
socket.on('joinSucess', joinSucess)
socket.on('sendSucess', sendSucess)

export {socket}