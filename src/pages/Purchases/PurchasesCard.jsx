import { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import PurchasesModal from '../../shared-components/Modal/PurchasesModal';
import PrimaryFormField from '../../shared-components/Form/PrimaryFormField';
    
const PurchasesCard = ({ data, handleClick }) => {

    const [showModal, setShowModal] = useState(false)
   return (
        <>
        
            <ReactTooltip />  
            <div
                onClick={() => { setShowModal(true) }}
                data-modal-toggle="defaultModal" data-tip={`click to buy ${data.name}`} className="cursor-pointer max-w-lg bg-white rounded-lg border border-gray-200 shadow-md  dark:border-gray-700">
    
                    <div className="flex flex-col items-center pb-5">
                        <img className="mb-3 mt-3 w-24 h-24 rounded-full shadow-lg" src={data.logoUrls[0]} alt="#"/>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 ">{data.name}</h5>
                        

                        <div className="flex mx-2 space-x-3 lg:mx-2">
                            <div className="grid grid-cols-2 gap-4 mt-3">
                            {/* <div className="text-center text-xl">Operator Id <br/> 
                                <h1 className="font-bold ">{data.operatorId}</h1>
                                </div>
                                <button className="text-center text-xl" >Buy</button>  */}
                                
                                
                            </div>
                            
                        </div>
                    </div>    
                    
           </div>
           
           {showModal ?
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Purchases</h3>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed"> {data.name}</p>
                            <form>
                                       
                                <PrimaryFormField type="text"  placeholder="Phone"  /><br />
                                {data.data ? 
                                    <select>
                                       <option value="">Select a plan</option>
                                       {Object.entries(data.fixedAmountsDescriptions).map(([key,value])  =>  <option>₦{key} - {value}</option>) }
                                    </select>
                               
                               :  <PrimaryFormField type="number" min={data.minAmount} max={ data.maxAmount} placeholder="Amount"  />
                            }<br />
                            {  data.bundle ? <PrimaryFormField type="text" placeholder="Bundle " />  : null }
                                       
                            </form>
                        
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => { setShowModal(false) }} >Close </button>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => { setShowModal(false) }}
                          >Purchase { data.data ? "Data" : "Airtime"}</button>
                        </div>
                    </div>
                    </div>
                </div>
                 <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          
               : null}
            
        </>
    )

}

export default PurchasesCard

