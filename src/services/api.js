import axios from 'axios'
import {
    createUserURL, verifyOTPURL, resendOtpURL, StartForgetPasswordURL,
    CompleteForgetPasswordURL, loginURl, userDetailsURL, billsCategoriesURL
}
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

export const API_Login = (email, password) => {
    const url_ = loginURl() 
    return axios({
        method: 'post',
        url:    `${baseUrl}${url_}`,
        data: {
            email: email,
            password: password
        }
    })
}


export const API_UserDetails = (token) => {
    const url_ = userDetailsURL() 
    return axios({
        method: 'get',
        url: `${baseUrl}${url_}`,
        headers: {
            "Content-Type": "application/json",
            "token": `Bearer ${token}`
        },
    
    })
}


export const API_BillsCategory = (token) => {
    const url_ = billsCategoriesURL() 
    return axios({
        method: 'get',
        url: `${baseUrl}${url_}`,
        headers: {
            "Content-Type": "application/json",
            "token": `Bearer ${token}`
        },
    
    })
}
