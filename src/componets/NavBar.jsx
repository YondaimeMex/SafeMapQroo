import { IoSearchCircle } from "react-icons/io5";
import { navbarLinks } from "../data/data" 
const NavBar = () =>{
    return(
    <>

    <nav className="w-full">
        <div className='flex justify-between items-center border-1 border-red-800 '>   
            {/*Logo*/}
            <div className='flex items-center gap-2'>
                <img className='w-30 h-18'  src="/src/assets/COEPROC-qqb0ndq3et1dbmhtmnkfpkpr29q8y7hl323ch5e59k.png"/>
                <p className='text-l text-red-800'>SafeMapQroo</p>
            </div>
            {/*Menu*/}
            <div>
                <ul className="flex items-center gap-6 text-black-600">
                    {
                        navbarLinks.map((item) => (
                            <li key={item.id}>
                                <a className='inline-block hover:text-white hover:bg-red-800 rounded-lg px-3 py-1' href={item.link}>{item.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/*Icons*/}
            {/*Mobile hamburguer menu section*/}
        </div>
    </nav>
        
        {/*Mobile sidebar*/}
    
    </>
)}

export default NavBar