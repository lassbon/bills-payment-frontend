
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PrimarySolidButton from '../../../shared-components/Button/PrimarySolidButton'
import PrimaryFormField from '../../../shared-components/Form/PrimaryFormField'
import SignUpImg from '../../../assets/images/hero-image-animation.gif'
import { useNavigate } from 'react-router-dom'
// import { ErrorMessage, Field, Form, Formik } from "formik"
import { createNewUser } from '../../../services/api'
import { toast } from 'react-toastify'

const Signup = () => {

    
    const Redirect = useNavigate()

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        document.title = "Billspayment - Signup";
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    async function onSubmit(e) {
        e.preventDefault()


        try {
            let data = {
                          firstname: firstname,
                          surname: lastname,
                          email: email,
                          phone: phone,
                          password: password
                            
                        }
            setLoading(true)
            const response = await createNewUser(data)

            if (response.data.status === false) {
                setLoading(false)
                toast.error(response.data.message || "An error occurred")
                return 
              
            } 
            localStorage.setItem("email", email)
            Redirect("/send-otp")

        } catch (error) {
            setLoading(false)

            if (error.toJSON().message === 'Network Error') {
                toast.warn("😱There seems to be internet error")

            }
            toast.warn("😱There seems to be internet error")

        }
        
    
       
    }

    return (
        <>
            
            <div className='grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>
             
                <div className="min-h-full sm:hidden md:block sm:px-6 flex items-center justify-center py-12 px-12 lg:px-8 ">
                <br /> <p className='text-3xl text-center '>BillsPayment made Easy...</p>
                    <br /><br /><div><img src={SignUpImg} alt="Signup today" className='w-full sm:hidden md:block' /> </div>
                
                </div>
                
                <div className=" bg-slate-100 min-h-full flex items-center justify-center py-12 px-12 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                        {/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" /> */}
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2> <br />
                            <p className="text-center" > Already registered ?  Login<Link to="login" className='text-blue underline'> here</Link> </p>
                        
                        </div>
                        <form onSubmit={onSubmit}>
                            
                                <div >
                                    <label htmlFor="firstname" className="sr-only">Firstname</label>
                                    <PrimaryFormField type="text" placeholder="Enter firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname}  />
                                </div><br />
                                <div>
                                <label htmlFor="othernames" className="sr-only">Othername</label>
                                <PrimaryFormField type="text" placeholder="Enter lastname" onChange={(e) => setLastname(e.target.value)} value={lastname} />
                                </div><br />
                                <div>
                                <label htmlFor="email-address" className="sr-only">Phone</label>
                                    <PrimaryFormField type="text" placeholder="Enter Phone"  onChange={(e) => setPhone(e.target.value)} value={phone}  />
                                </div><br />
                                <div>
                                    <label htmlFor="email-address" className="sr-only">Email address</label>
                                    <PrimaryFormField type="email" placeholder="Email address"  onChange={(e) => setEmail(e.target.value)} />
                                </div><br />
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <PrimaryFormField type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
                                </div><br />
                                <div>
                                    <label htmlFor="confirm-password" className="sr-only">Confirm Password </label>
                                    <PrimaryFormField type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div><br />
                                
                    
                        
                            <div> <PrimarySolidButton text={loading ? "Signing you up" : "Sign up"} type="submit" action={loading ? true : false} /> </div>
                        </form>
                    </div>      
                </div>
                
            </div>
        </>

        
    )
}

export default Signup

