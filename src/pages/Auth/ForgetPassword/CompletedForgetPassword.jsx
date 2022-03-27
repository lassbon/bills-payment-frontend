import {useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import PrimaryFormField from "../../../shared-components/Form/PrimaryFormField"
import PrimarySolidButton from "../../../shared-components/Button/PrimarySolidButton"
import { API_CompleteForgetPassword } from '../../../services/api'
import { toast } from 'react-toastify'


const CompleteForgetPassword = ()=> {

    const Redirect = useNavigate()

    const { hash } = useParams()
    const [ newPassword, setNewPassword ] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading ] = useState(false)


    async function userCompletePassword() {
        
        setLoading(true)
        const response = await API_CompleteForgetPassword(newPassword, confirmPassword, hash)
            if (response.data.status === false) {
                setLoading(false)
                toast.error(response.data.message || "An error occurred")
                return 
              
            } 
        
            setLoading(false)
            toast.success(`🦄 ${response.data.message}` || "Reset Password successfully done")
            Redirect('/login')
           
    }

    return (
        <div classNameName="flex flex-col items-center mt-48 border-1 w-1/2 rounded bg-slate-200 mx-auto">
            <h1 classNameName="text-3xl text-blue-800 mt-4">Reset Password</h1>
            <form classNameName="mt-4 space-y-6 mb-12">
                <input type="hidden" name="remember" value="true" />
                <div classNameName="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="forget-password" classNameName="sr-only">Forget Password</label>
                        <PrimaryFormField type="password" placeholder="New Password here" onChange={(e) => setNewPassword(e.target.value)} value={newPassword}  />
                    </div><br />
                    <div>
                        <label htmlFor="confirm-password" classNameName="sr-only">Confirm Password</label>
                        <PrimaryFormField type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}   />
                    </div> <br />
                    <div classNameName="mt-16">
                        <PrimarySolidButton text="Reset Password"  onClick={userCompletePassword} type="button"  action={loading} />
                        
                    </div>
                </div>
            </form>
        </div>
    )

}

export default CompleteForgetPassword