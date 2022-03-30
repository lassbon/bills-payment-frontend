import TickIcon from "../../assets/images/tick.gif";
import CloseModalIcon from "../../assets/svgs/CloseModalIcon";
import '../../assets/styles/custom.css'

const SuccessModal = ({ title, subtitle, closeModalClick }) => {
  
  // useEffect(() => {
  //   closeModalOnOutsideClick(closeModal);
  // }, []);

  return (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white rounded-lg fadeIn login-fieldset">
        <span className="closeModal">{CloseModalIcon  || "X"} </span>
        <div className="flex flex-col items-center mb-0">
          {(
            <i className="w-20 mb-4">
              <img src={TickIcon} alt="" />
            </i>
          ) }

          <h1 className="text-2xl font-medium mb-2">{title  || "Success"}</h1>
          <p className="text-center text-gray-500 leading-normal">{subtitle || "Actions successfully completed"}</p>
        </div>
        
        <div className=" border-2 w-40 text-center wealth-buddy--cta leading-loose bg-wb-primary text-white rounded-sm mt-8" >
         <button className="bg-green-600 p-4 rounded-full" onClick={closeModalClick}>OK</button>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal;
