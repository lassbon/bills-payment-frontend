
//AUTH URL
export const createUserURL = '/user/create'
export const getUserURL = '/user'
export const resendOtpURL = (phone) => { return `/user/resend-otp/${phone}`}
export const verifyOTPURL = (email, otp) => { return `/user/verify-otp/${email}/${otp}`}
export const StartForgetPasswordURL = (email) => {  return `/start-forget-password/${email}`}
export const CompleteForgetPasswordURL = (hash) => { return `/complete-forget-password/${hash}` }
export const loginURl = () => { return '/login' }
export const userDetailsURL = () => { return '/user' }