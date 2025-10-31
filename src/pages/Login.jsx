import { FaArrowLeft } from "react-icons/fa";

const Login = () => {

    return(
        <>
            <div className="flex h-full">
                
                <section className="bg-pink-800 w-screen h-screen">
                    <img className="w-screen" src="/src/assets/ChatGPT Image 28 oct 2025, 12_34_26 p.m..png" alt="" />
                </section>
                
                <section className="bg-white-500 w-screen h-screen">
                    <a href="/home"><FaArrowLeft className="mt-10 ml-10  w-10 h-auto text-pink-800"/></a> 
                    <h2 className="mx-25 text-4xl mt-20 text-pink-800">Bienvenido a SafeMapQroo</h2>
                    <h3 className="mx-58 my-3">Inicia sesión para continuar</h3>
                    <form className="grid grid-cols-1 grid-rows-3 mx-30 my-10">
                        <input className="my-3 py-2 bg-white-100 bg-white-100 border-b border-pink-950 rounded-md pl-2  focus:border-pink-800 focus:ring focus:ring-pink-700 outline-none" type="text" placeholder="Correo electrónico" />
                        <input className="my-3 py-2 bg-white rounded-md pl-2 border-b border-pink-950 focus:border-pink-800 focus:ring focus:ring-pink-700 outline-none" type="password" placeholder="Contraseña" />
                        <a href="#" className="ml-60 my-2">¿Olvidaste tu contraseña?</a>
                        <button className="bg-pink-800 mx-30 my-10 h-10 rounded-md text-white hover:bg-pink-900">Iniciar sesión</button>
                        <div className="flex mx-20">
                            <p className="text-sm ">¿Aún no tienes una cuenta?</p>
                            <a href="#"className="ml-3.5 text-sm text-pink-800">Registrate</a>
                        </div>
                    </form>
                </section>
            </div>
        </>
)}

export default Login