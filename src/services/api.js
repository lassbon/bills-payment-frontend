import axios from 'axios'
import { createUserURL, verifyOTPURL, resendOtpURL, StartForgetPasswordURL, CompleteForgetPasswordURL }
    from './network-urls'

const baseUrl = process.env.REACT_APP_API_BASE_URL

export const createNewUser = (data) => {
        return axios.post(`${baseUrl}${createUserURL}`, data)
}
  
export const verifyOTP = (email, otp) => {
    const url_ = verifyOTPURL(email, otp)
    return axios.get(`${baseUrl}${url_}`)
}

export const resendOtp = (phone) => {
    const url_ = resendOtpURL(phone)
    return axios.get(`${baseUrl}${url_}`)
};

export const API_StartForgetPassword = (email) => {
    const url_ = StartForgetPasswordURL(email)
    return axios.get(`${baseUrl}${url_}`)
}

export const API_CompleteForgetPassword = (newPassword, confirmPassword, hash) => {
    const url_ = CompleteForgetPasswordURL(hash)
    const data = {
                newPassword: newPassword,
                confirmNewPassword: confirmPassword
    }
    return axios.patch(`${baseUrl}${url_}`, data)
}