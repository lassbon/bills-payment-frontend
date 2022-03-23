import axios from 'axios'
import { createUserURL , verifyOTPURL} from './network-urls'

const baseUrl = process.env.REACT_APP_API_BASE_URL

export const createNewUser = (data) => {
        return axios.post(`${baseUrl}${createUserURL}`, data)
};
  
export const verifyOTP = (email, otp) => {
    const url_ = verifyOTPURL(email, otp)
    console.log(`${baseUrl}${url_}`)
    return axios.get(`${baseUrl}${url_}`)
};