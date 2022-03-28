import { useState, useEffect } from "react"
import Container from "../../pages/Container"
import { API_UserDetails } from '../../services/api'
import { toast } from "react-toastify"

const Dashboard = () => {

    const [userDetails, setUserDetails] = useState([])

    useEffect(() => { 

        (async () => {
            
        document.title = "Billspayment - Dashboard"
            const token = localStorage.getItem("token")
            const response = await API_UserDetails(token)
            if (response.data.status === false){
                toast.error(response.data.message || "An error occurred")
                return
            }

            setUserDetails(response.data.data)

        })()

    })

    return (

        <div className='grid md:grid-cols-2  grid-cols-1 gap-1 h-screen items-center '>
            <div className=" min-h-full flex  px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="flex flex-col">
                        <div className="">
                            {JSON.stringify(userDetails)}
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                Welcome {userDetails[0].firstname} {userDetails[0].surname}

                            </h2>
                        </div>
                        <div>
                             <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Pie chart</h2>
                        </div>
                
                </div>
               
                <br />
            </div>      
            </div>
            <div className='sm:hidden md:block '>
              kjnvkjfk
            </div>
        
         </div>


    
)
}


export default Dashboard