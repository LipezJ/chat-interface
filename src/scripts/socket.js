import { io } from "socket.io-client";
import { loginSucess, joinSucess, sendSucess, sendPage } from './main'

const socket = io('http://192.168.100.6:4000', { transports : ['websocket'],  });

socket.on('alert', data => console.log("error:",data.ms))
socket.on('loginSucess', loginSucess)
socket.on('joinSucess', joinSucess)
socket.on('sendSucess', sendSucess)
socket.on('sendPage', sendPage)

export {socket}