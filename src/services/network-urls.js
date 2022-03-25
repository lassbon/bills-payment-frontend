
//AUTH URL
export const createUserURL = '/user/create'
export const getUserURL = '/user'
export const resendOtpURL = (phone) => { 
    return `/user/resend-otp/${phone}`
}
export const verifyOTPURL = (email, otp) => {
    return `/user/verify-otp/${email}/${otp}`   // "/user/verify-otp/polymathalli@gmail.com/2223"
}

export const StartForgetPasswordURL = (email) => {
    return `/start-forget-password/${email}`
}

export const CompleteForgetPasswordURL = (hash) => {
    return `/complete-forget-password/${hash}`
}