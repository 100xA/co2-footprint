export function Footer(){
    return (    
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-dark-green border-t border-gray-200 shadow md:flex md:items-center md:justify-between  dark:bg-gray-800 dark:border-gray-60">
    <span className="text-sm text-gray-500 sm:text-center text-mint-green ">© 2024 <a href="https://flowbite.com/" className="hover:underline text-mint-green">Co2Footprint</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6 text-white">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6 text-white">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6 text-white">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline text-white">Contact</a>
        </li>
    </ul>
    </footer>

 );
}