
const PurchasesCard = ({data}) => {
    return(
        <div className="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md  dark:border-gray-700">
 
                <div className="flex flex-col items-center pb-5">
                    <img className="mb-3 mt-3 w-24 h-24 rounded-full shadow-lg" src={data.logoUrls[0]} alt="#"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 ">{data.name}</h5>
                    

                    <div className="flex mx-2 space-x-3 lg:mx-2">
                        <div className="grid grid-cols-2 gap-4 mt-3">
                            {/* <div className="text-center text-xl">Operator Id <br/> 
                              <h1 className="font-bold ">{data.operatorId}</h1>
                            </div>
                            <div className="text-center text-xl">Buenas noches!</div> */}
                            
                            
                        </div>
                        
                    </div>
                </div>    
                
            
        </div>
    )

}

export default PurchasesCard
