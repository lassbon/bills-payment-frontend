import img from '../../assets/images/bills.jpeg'
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
                        <button className='btn bg-purple-800 p-3 rounded text-white justify-center items-center '
                             > Get Started </button>
       
                    </p>
                </div>
                

            </div>

            {/* { showModal && <SuccessModal closeModalClick={openModal} />} */}
        </>
    )

}

export default HomePage