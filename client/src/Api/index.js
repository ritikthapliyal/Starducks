import axios from 'axios'

const user = 'http://localhost:5000/user/'
export function getUserInfo(email){return axios.get(user + email)}
export function addUser(userData){return axios.post(user,userData)}
export function verifyUser(userData){return axios.post(user + 'verify',userData)}
export function updateCart(data){return axios.patch(user,data)}
