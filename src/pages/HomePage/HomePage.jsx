import img from '../../assets/images/bills.jpeg'
import { Link } from 'react-router-dom'
const HomePage = () => {

    // const [showModal, setShowModal] = useState(true)
   
    // function openModal() {
    //     setShowModal(showModal => !showModal)
    // }

    
    return (
        <>
            <div className="flex">
                
              <div><img src={img} alt="Bills Payment" className='max-h-screen blur-sm' /></div>
                <div>
                    <p className=''>
                        <Link to='/auth/login'>
                        <button className='btn bg-purple-800 p-3 rounded text-white justify-center items-center '
                             > Get Started </button>
                        </Link>
       
                    </p>
                </div>
                

            </div>

            {/* { showModal && <SuccessModal closeModalClick={openModal} />} */}
        </>
    )

}

export default HomePage