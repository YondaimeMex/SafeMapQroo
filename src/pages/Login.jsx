import { FaArrowLeft } from "react-icons/fa";
import { LogingHook } from "../api/Requests/Authorize/LoginHook";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import ShelterListModal from "../componets/ShelterListModal";

const Login = () => {
    const { loading, error, loginFunction } = LogingHook();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            const result = await loginFunction({ email, password });
            if (result.token) navigate("/dash");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex h-screen">

            {/* Imagen (solo en computadoras) */}
            <section className="hidden md:block bg-pink-800 w-1/2 h-full">
                <img
                    className="w-full h-full object-cover"
                    src="/src/assets/ChatGPT Image 28 oct 2025, 12_34_26 p.m..png"
                    alt="login cover"
                />
            </section>

            {/* Formulario (siempre visible) */}
            <section className="w-full md:w-1/2 h-full p-10 relative flex items-center justify-center">

                {/* Botón regresar (fijo arriba a la izquierda) */}
                <a href="/home" className="absolute top-10 left-10">
                    <FaArrowLeft className="w-8 h-auto text-pink-800" />
                </a>

                {/* Contenido centrado */}
                <div className="w-full max-w-md">

                    {/* Títulos */}
                    <h2 className="text-4xl text-pink-800">
                        Bienvenido a SafeMapQroo
                    </h2>
                    <h3 className="mt-2">
                        Inicia sesión para continuar
                    </h3>

                    {/* Formulario */}
                    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
                        <input
                            className="py-2 border-b border-pink-950 rounded-md pl-2 focus:border-pink-800 outline-none"
                            type="text"
                            placeholder="Correo electrónico"
                        />

                        <input
                            className="py-2 border-b border-pink-950 rounded-md pl-2 focus:border-pink-800 outline-none"
                            type="password"
                            placeholder="Contraseña"
                        />

                        <a href="#" className="text-right text-pink-700 hover:underline">
                            ¿Olvidaste tu contraseña?
                        </a>

                        <button
                            type="submit"
                            className="bg-pink-800 h-10 rounded-md text-white hover:bg-pink-900 transition"
                        >
                            {loading ? "Cargando..." : "Iniciar sesión"}
                        </button>
                    </form>

                    {error && (
                        <p className="text-red-500 text-center mt-3">
                            Hubo un error. Si esto persiste contacte al administrador.
                        </p>
                    )}

                </div>
            </section>


        </div>
    );
};

export default Login;