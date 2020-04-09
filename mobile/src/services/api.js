import axios from 'axios'
const api = axios.create({
    baseURL:'http://192.168.15.150:3333'
})

export default api