import { FaArrowLeft } from "react-icons/fa";
import { LogingHook } from "../api/Requests/Authorize/LoginHook";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { data, loading, error, loginFunction } = LogingHook();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            const result = await loginFunction({ email, password });
            if (result.success) {
                // Redirige al dashboard
                navigate("/dash");
            } else {
                console.log("Correo o contraseña incorrectos");
            }
        } catch (err) {
            console.error(err);
            console.log("Ocurrió un error al iniciar sesión");
        }
    };

    return (
        <div className="flex h-full">
            <section className="bg-pink-800 w-screen h-screen">
                <img className="w-screen" src="/src/assets/ChatGPT Image 28 oct 2025, 12_34_26 p.m..png" alt="" />
            </section>

            <section className="bg-white-500 w-screen h-screen">
                <a href="/home"><FaArrowLeft className="mt-10 ml-10 w-10 h-auto text-pink-800" /></a>
                <h2 className="mx-25 text-4xl mt-20 text-pink-800">Bienvenido a SafeMapQroo</h2>
                <h3 className="mx-58 my-3">Inicia sesión para continuar</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 grid-rows-3 mx-30 my-10">
                    <input className="my-3 py-2 bg-white-100 border-b border-pink-950 rounded-md pl-2 focus:border-pink-800 focus:ring focus:ring-pink-700 outline-none" type="text" placeholder="Correo electrónico" />
                    <input className="my-3 py-2 bg-white rounded-md pl-2 border-b border-pink-950 focus:border-pink-800 focus:ring focus:ring-pink-700 outline-none" type="password" placeholder="Contraseña" />
                    <a href="#" className="ml-60 my-2">¿Olvidaste tu contraseña?</a>
                    <button type="submit" className="bg-pink-800 mx-30 my-10 h-10 rounded-md text-white hover:bg-pink-900">
                        {loading ? "Cargando..." : "Iniciar sesión"}
                    </button>
                </form>
                {error && <p className="text-red-500 text-center">Hubo un error si esto persiste llamar al administrador</p>}
            </section>
        </div>
    );
}

export default Login;
