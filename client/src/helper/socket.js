import { io } from 'socket.io-client';
console.log(process.env.REACT_APP_BASE_NODEJS)
const socket = io(process.env.REACT_APP_BASE_NODEJS); // thay đổi nếu deploy

export default socket;

