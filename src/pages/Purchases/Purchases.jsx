import PurchasesCard from "./PurchasesCard"
import { API_BillsCategory } from '../../services/api'
import { useLayoutEffect, useState } from "react"
import { toast } from "react-toastify"
import Loader  from '../../shared-components/Loader/Loading'

const Purchases = () => {

  const [billsCategories, setBillsCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {

    (async () => {
      const token = localStorage.getItem('token')
      try {
        const response = await API_BillsCategory(token)
        if (response.data.status === false) {
          toast.error(response.data.message || "Sorry, cannot load bills categories")
        }
        setLoading(false)
        localStorage.setItem("billcategories", JSON.stringify(response.data.data))
        setBillsCategories(response.data.data)
        
       


      } catch (err) {
        setLoading(false)
         toast.error(err.response.data.message || "Sorry, cannot load bills categories")
      }

    })()
    
  },[])
          
       
  function handleClcik() {
       alert("thanks")
     }         

        

    return(
      
       
      <div className="container">
  
        
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-20">
          {
            loading ? 
              [...Array(10)].map((data, i) =>  <Loader key={i} /> )
              :
              billsCategories.map((data, i) => (
            
                  <PurchasesCard key={i} data={data} handleClick={handleClcik} />
            
              ))
            }
              
              
            </section>

        </div>
      
    )

}



export default Purchases