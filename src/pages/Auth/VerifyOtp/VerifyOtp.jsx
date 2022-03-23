import  { useEffect , useState} from "react";
// import Loading from "shared-components/Loading";
// import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
// import { closeModalOnOutsideClick } from "utils"
import ReactCodeInput from "react-code-input";
import Button from '../../../shared-components/Button/PrimarySmallButton'
import { verifyOTP } from '../../../services/api'
import ErrorModal from "../../../shared-components/Modal/ErrorModal";
import { useNavigate } from 'react-router-dom'
import SuccessModal from "../../../shared-components/Modal/SuccessModal";


const VerifyOtp = () => { 

    const Redirect = useNavigate()
 
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")
    const [otp, setOtp] = useState("")
    const userEmail = localStorage.getItem("email")

   

    async function onVerify(e) {
        e.preventDefault()

        try {
            const response = await verifyOTP(userEmail, otp)

            if (response.data.status === false) {
                setError(true)
                setErrorMsg(response.data.message)
                return 
              
            } 

            setSuccess(true)
            setSuccessMsg(response.data.message)
            
            Redirect("/login")
    

        } catch (error) {
            setError(true)

            if (error.toJSON().message === 'Network Error') {
                setErrorMsg("There seems to be internet error'")
            }
             setErrorMsg("There seems to be internet error'")
        }
        
    
       
    }



    return (
            <>
            {error && <ErrorModal subtitle={errorMsg} />}
            { success && <SuccessModal subtitle={errorMsg} /> }
        
                <form className="flex flex-col items-center mt-48 border-1 w-1/2 rounded bg-slate-200 mx-auto">
                    <fieldset className="my-20 is-six--code ">
                        <ReactCodeInput
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
                        <p className="text-sm text-gray-500">
                        Did not receive an SMS?{" "}
                        <a
                            className="text-wb-primary"
                            href="/"
                            onClick={() => null}
                        >
                            Resend OTP
                        </a>
                        </p>
                    </div><br /><br />
                </form>
            </>
            )
}

export default VerifyOtp;
