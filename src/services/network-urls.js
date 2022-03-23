import { getDefaultNormalizer } from '@testing-library/react'
import axios from 'axios'


//AUTH URL
export const createUserURL = '/user/create'
export const getUserURL = '/user'
export const resendOtpURL = (phone) => { 
    return `/user/resend-otp/${phone}`
}
export const verifyOTPURL = (email, otp) => {
    return `/user/verify-otp/${email}/${otp}`   // "/user/verify-otp/polymathalli@gmail.com/2223"
}
