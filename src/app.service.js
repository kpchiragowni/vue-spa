import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

axios.interceptors.request.use(function (config) {
  if (typeof window === 'undefined') {
    return config
  }
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

const appService = {
  getOpportunities (status) {
    return new Promise((resolve) => {
      axios.get(`/api`)
        .then(response => {
          let data = response.data
          if (status && status === 'active') {
            data = data.filter(obj => obj['tradingActive'])
          }
          resolve(data) // resolve(response.data)
        })
    })
  },
  getProfile () {
    return new Promise((resolve) => {
      axios.get('/services/profile.php')
        .then(response => {
          resolve(response.data)
        })
    })
  },
  login (credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/services/auth.php', credentials)
        .then(response => {
          resolve(response.data)
        }).catch(response => {
          reject(response.status)
        })
    })
  }
}

export default appService
