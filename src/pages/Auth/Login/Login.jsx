
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import loginImg from '../../../assets/images/login-img.webp'
import Button from '../../../shared-components/Button/PrimarySolidButton'
import PrimaryFormField from '../../../shared-components/Form/PrimaryFormField'
import { API_Login } from '../../../services/api'

const Login = () => {

    const Redirect = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading , setLoading] = useState(false)
    
  

    async function handleLogin() {
       
        try {
            setLoading(true)
            const response = await API_Login(email, password)

            if (response.data.status === false) {
                return toast.error( "11111..Login failed")   
            }
           
            localStorage.setItem("token", response.headers['token'])
            toast.success(response.data.message || "You have successfully logged in")
            setLoading(false)
            Redirect("/dashboard")

     
        } catch (err) {
            setLoading(false)
            console.log(err)
           toast.error(err.response.data.message)
       }
    }



    return (

            <div className='grid md:grid-cols-2  grid-cols-1 gap-1 h-screen items-center '>
                <div className=" bg-slate-100 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                    <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    
                    </div>
                    <form className="mt-8 space-y-6">
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                            <PrimaryFormField type="email" placeholder="Email address"  onChange={(e) => setEmail(e.target.value)} />
                        </div><br />
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <PrimaryFormField type="password" placeholder="Password"  onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                        </div>

                        <div className="text-sm">
                                <Link to="/auth/start-forget-password"
                                    className="font-medium 
                                    text-indigo-600
                                    hover:text-indigo-500">
                                    Forgot your password?
                                </Link>
                        </div>
                    </div>

                    <div>
                        <Button text={loading ? "Logging in..." : "Login"} type="button"  onClick={handleLogin} action={loading} />
                        
                    </div>
                    </form><br />
                    <p className="text-center"> Dont have an account ?  <Link to="/auth/signup">Register </Link> </p>
                </div>      
                </div>
                <div className='sm:hidden md:block '>
                    <img src={loginImg} alt="Login" className='sm:hidden md:block' />
                </div>
            
             </div>
 

        
    )
}

export default Login