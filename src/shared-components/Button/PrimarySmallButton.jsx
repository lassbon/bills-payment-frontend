const PrimarySmallButton = ({text, type, onClick, disabled}) => {

    return (
       
        <button
            // style={{ backgroundColor: '#C1002F' }}
            type={type || "button"}
            onClick={onClick}
            disabled={disabled || false }
            className="group relative w-full flex 
            justify-center py-4 px-4 border border-transparent text-sm
             font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
                {text || "Submit"}
        </button>
                    
    )
}

export default PrimarySmallButton