const PrimarySolidButton = ({text, type, onClick,  disabled, action}) => {

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
            {action
             ?
                <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
                </svg>
             :
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        
                        <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                </span>
            }
                {text || "Submit"}
        </button>
                    
    )
}

export default PrimarySolidButton