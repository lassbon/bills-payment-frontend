

const PrimaryFormField = ({type, placeholder, onChange, value, ...props}) => {

    return (
        <input
            type={type || "text"}
            required
            value={value}
            className="appearance-none rounded-none relative block w-full
             px-3 py-4 border border-gray-300 placeholder-gray-500
             text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder={placeholder || "Fill in the details"}
            onChange={onChange}
            {...props}
        />
                    
    )
}

export default PrimaryFormField