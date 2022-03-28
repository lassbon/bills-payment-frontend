import React, { useRef } from "react"
import ErrorIcon from "../../assets/images/error.gif";
import CloseModalIcon from "../../assets/svgs/CloseModalIcon";
import '../../assets/styles/custom.css'

const ErrorModal = ({ title, subtitle, closeModalClick}) => {
   
    
//   useEffect(() => {
//     closeModalOnOutsideClick(closeModalClick);
//   }, []);
         // close the modal when clicking outside the modal.
  const modalRef = useRef()
//   const closeModal = (e) => {
//     if (e.target === modalRef.current) {
//       setShowModal(false);
//     }
//   };

  return (
    <div ref={modalRef} classNameName="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div classNameName="auth-modal flex flex-col items-center bg-white rounded-lg fadeIn login-fieldset">
        <span classNameName="closeModal" onClick={closeModalClick}>{CloseModalIcon  || "X"} </span>
        <div classNameName="flex flex-col items-center mb-0">
          {(
            <i classNameName="w-20 mb-4">
              <img src={ErrorIcon} alt="" />
            </i>
          ) }

          <h1 classNameName="text-2xl font-medium mb-2">{title  || "Error"}</h1>
          <p classNameName="text-center text-gray-500 leading-normal">{subtitle || "An error occured" }</p>
        </div>
        
        <div classNameName="w-40 text-center wealth-buddy--cta leading-loose bg-wb-primary text-white rounded-sm mt-8" >
         <button classNameName="bg-red-600 p-4 rounded-full" onClick={closeModalClick || false}>Close</button>
        </div>
      </div>
    </div>
  )
    


};

export default ErrorModal;
