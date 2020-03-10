import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3035'
})

// don't put the forward slash

export default axios