import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://test-b001d.firebaseio.com/'
})

export default instance