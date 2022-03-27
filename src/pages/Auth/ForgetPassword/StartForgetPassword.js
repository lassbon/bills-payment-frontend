import { useState } from 'react'
import PrimaryFormField from "../../../shared-components/Form/PrimaryFormField"
import PrimarySolidButton from "../../../shared-components/Button/PrimarySolidButton"
import { API_StartForgetPassword } from '../../../services/api'
import { toast } from 'react-toastify'

const StartForgetPassword = () => {
    
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    
    async function startUserForgetPassword() {
        
        setLoading(true)
        const response = await API_StartForgetPassword(email)
        if (response.data.status === false) {
            setLoading(false)
            toast.error(response.data.message || "An error occurred")
            return 
          
        } 

        setLoading(false)
        toast.success(`🦄 ${response.data.message}` || "A password reset link has been sent to your email")

    }

    return (
        <div classNameName="flex flex-col items-center mt-48 border-1 w-3/4 rounded bg-slate-200 mx-auto">
            <h1 classNameName="text-3xl text-blue-800 mt-4">Reset Password</h1>
            <form classNameName="mt-4 space-y-6 mb-12">
                <div classNameName="rounded-md shadow-sm -space-y-px">
                    <div >
                    <label htmlFor="forget-password" classNameName="sr-only">Forget Password</label>
                        <PrimaryFormField type="email" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)} value={email} />
                    </div><br />
                    <div classNameName="mt-16">
                        <PrimarySolidButton text="Reset Password" type="button" onClick={startUserForgetPassword} action={loading} />
                        
                    </div>
                </div>
            </form>
        </div>
    )

}

export default StartForgetPassword