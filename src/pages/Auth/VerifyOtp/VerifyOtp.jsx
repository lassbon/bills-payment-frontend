import  { useEffect, useState} from "react"
import ReactCodeInput from "react-code-input";
import Button from '../../../shared-components/Button/PrimarySmallButton'
import { verifyOTP, resendOtp } from '../../../services/api'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import '../../../assets/styles/verify_otp.css'

const VerifyOtp = () => { 

    const Redirect = useNavigate()
 
    const [otp, setOtp] = useState("")
    const userEmail = localStorage.getItem("email")
    const userPhone = localStorage.getItem("phone")

    useEffect(() => {
        document.title = "Billspayment - Verify OTP"

    }, []);
    

    async function onVerify(e) {
        e.preventDefault()

        try {
            const response = await verifyOTP(userEmail, otp)
            
            if (response.data.status === false) {
            
                toast.error(response.data.message || "An error occurred")
                return 
              
            } 

            toast.success(`🦄 ${response.data.message}` || "Account successfully created")
            
            Redirect("/auth/login")
    

        } catch (error) {

            if (error.toJSON().message === 'Network Error') {
                toast.warn("😱There seems to be internet error ")
            }
            console.log("here: ", error.response.data)
               toast.error(error.response.data.message || "An error occured")
        }
        
    
       
    }

    async function resendUserOtp() {
       
        try {
            const response = await resendOtp(userPhone)
            
            if (response.data.status === false) {
            
                toast.error(response.data.message || "An error occurred")
                return
              
            }

            toast.success(`🦄 ${response.data.message}` || "OTP resent successfully")
        } catch (error) {
            if (error.toJSON().message === 'Network Error') {
                toast.warn("😱There seems to be internet error ")
            }
            console.log("here: ", error.response.data)
               toast.error(error.response.data.message || "An error occured")
       
            
        } 
    }



    return (
            <>
        
                <form className="flex flex-col items-center mt-48 border-1 w-1/2 rounded bg-slate-200 mx-auto">
                    <fieldset className="my-20 is-six--code ">
                    <ReactCodeInput
                        className="otp-fieldset self-center space-x-5"
                            type="text"
                            name="number"
                            placeholder="*"
                            fields={4}
                            inputMode="numeric"
                            onChange={(value) => setOtp(value)}
                        />
                    </fieldset>

                    <div className="nav-buttons flex justify-center">
                
                        <Button text="Verify OTP" type="submit" onClick={onVerify} />
                        {/* <button
                            type="submit"
                            className="w-40 text-center leading-loose bg-indigo-600  text-white rounded-sm" > Confirm
                        </button> */}
                    </div>

                    <div className="mt-8 ">
                    <p className="text-sm text-gray-500">  Did not receive an SMS? &nbsp;
                        <span onClick={resendUserOtp} style={{cursor: "pointer"}}>Resend OTP</span>
                    </p>
                    </div><br /><br />
                </form>
            </>
            )
}

export default VerifyOtp;
