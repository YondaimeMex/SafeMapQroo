import { NavLink } from "react-router-dom";
import { dashLinks } from "../data/dataDash"
const NavDash= () =>{

    return(
        <>
        <nav className="bg-pink-800 w-[20vw] h-full">
        <div className="my-10 block"> 
            <img className="mx-auto rounded-full" src="/src/assets/logogob.jpg" alt="" />
            <h2 className="my-4 text-3xl text-center text-white">Gabriel Perez Torres</h2>
            <h4 className="text-center text-xl text-white">GpTorres@gob.mx</h4>
        </div>
        <div className="mx-[30%] my-[20vh]">
            <ul className="grid row-end-3 gap-6 text-xl justify-start">
                {
                    dashLinks.map((item => (

                        <li key={item.id} className="">
                            <NavLink to={item.link} className={({ isActive }) => `text-white ${isActive ? "font-bold" : ""}`
                                }>
                                {item.title}
                            </NavLink>
                            
                        </li>
                    )))
                }
            </ul>
        </div>
        </nav>
        </>
    )
};

export default NavDash;