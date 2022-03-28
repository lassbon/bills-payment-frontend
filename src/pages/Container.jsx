
const Container = ({ children }) => {

    return (
        <>
            <header>
                <nav classNameName="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div classNameName="container flex flex-wrap justify-between items-center mx-auto">
                {/* <a href="#" classNameName="flex items-center"> */}
                <img src="/docs/images/logo.svg" classNameName="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
                <span classNameName="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                {/* </a> */}
                <div classNameName="flex items-center md:order-2">
                <button type="button" classNameName="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                <span classNameName="sr-only">Open user menu</span>
                <img classNameName="w-8 h-8 rounded-full" src="" alt="user photo" />
                </button>

                <div classNameName="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
                <div classNameName="py-3 px-4">
                <span classNameName="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span classNameName="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul classNameName="py-1" aria-labelledby="dropdown">
                    <li>aa</li>
                    <li>bb </li>
                    <li>cc </li>
                    <li>dd</li>
                </ul>
                </div>
            <button data-collapse-toggle="mobile-menu-2" type="button" classNameName="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span classNameName="sr-only">Open main menu</span>
            <svg classNameName="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            <svg classNameName="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            </div>
            <div classNameName="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul classNameName="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>dd</li>
                <li>ee </li>
                <li>ff</li>
                <li>gg</li>
                <li>hh </li>
            </ul>
            </div>
            </div>
                </nav>
           </header>

        
                    {children}

            <footer> Thank you</footer>
        </>
        

    

    )
}

export default Container