
const PurchasesCard = ({data}) => {
    return(
        <div className="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md  dark:border-gray-700">
            {/* <div className="flex justify-end px-4 pt-4">
                    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                    </button>
                    {/* Dropdown menu  */}
                    {/* <div id="dropdown" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                        <ul className="py-1" aria-labelledby="dropdownButton">
                        <li>
                            <a href="{#}" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                        </li>
                        <li>
                            <a href="{#}" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                        </li>
                        <li>
                            <a href="{#}" className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                        </li>
                        </ul>
                    </div>
            </div> */} 
                <div className="flex flex-col items-center pb-5">
                    <img className="mb-3 mt-3 w-24 h-24 rounded-full shadow-lg" src={data.logoUrls} alt="#"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 ">{data.name}</h5>
                    

                    <div className="flex mx-2 space-x-3 lg:mx-2">
                        <div class="grid grid-cols-2 gap-4 mt-3">
                            <div className="text-center text-xl">Operator Id <br/> 
                              <h1 className="font-bold ">{data.operatorId}</h1>
                            </div>
                            <div className="text-center text-xl">Buenas noches!</div>
                            
                            
                        </div>
                        
                    </div>
                </div>    
                
            
        </div>
    )

}

export default PurchasesCard
