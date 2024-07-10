import { Link, Outlet } from "react-router-dom";

export default function Layouts() {
    return <>
    
    <header>
    <div className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-12">
    <div className="text-2xl text-white font-semibold inline-flex items-center">
        {/* <img src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.png" alt="logo-img" /> */}
        <span>Schooly</span>
    </div>
    <ul className="flex text-white">
        
        <li className="ml-5 px-2 py-1">
            <Link to={'/'}>Home</Link>
        </li>

        <li className="ml-5 px-2 py-1">
            <Link to={'/login'}>Login</Link>
        </li>
        <li className="ml-5 px-2 py-1">
            <Link to={'/register'}>Register</Link>
        </li>
        <li className="ml-5 px-2 py-1">
            <Link to={'/users'}>Users</Link>
        </li>

        
        <li className="ml-5 px-3 py-1 rounded font-semibold bg-gray-100 text-gray-800"><a href="#">References</a></li>
    </ul>
        </div>

    </header>


    <main className={'container'}>

    <Outlet/>

    </main>
    </>
}