const Shelter = () =>{

    return(
        <div className="grid grid-cols-2 grid-rows-3 gap-0">
            <section className="m-8 w-[300px]">
                <h2>Información del albergue</h2>
                <form className="grid row-5">
                    <input type="text" placeholder="Municipio"/>
                    <input type="text" placeholder="Domicilio"/>
                    <input type="text" placeholder="Edificio o nombre del lugar"/>
                    <input type="text" placeholder="capacidad maxima de ocupantes"/>
                    <input type="text" placeholder="estado del albergue"/>
                </form>
            </section>
            <section className="m-8 w-[300px]">
                <h2>Administrador</h2>
                <form className="grid row-4">
                    <input type="text" placeholder="Nombre del administrador" />
                    <input type="text" placeholder="Cargo" />
                    <input type="text" placeholder="Teléfono de contacto" />
                    <input type="text" placeholder="Correo electrónico" />
                </form>
            </section>
            <section className="m-8 w-[300px]">
                <h2>Ubicación geográfica</h2>
                <form className="grid row-2">
                    <input type="text" placeholder="Latitud"/>
                    <input type="text" placeholder="Longitud"/>
                </form>
            </section>
            <section className="m-8 w-[300px]">
                <h2>Contacto del albergue</h2>
                <form className="grid row-2">
                    <input type="text" placeholder="Teléfono" />
                    <input type="text" placeholder="Correo electrónico" />
                </form>
            </section>
            <section className="m-8 w-[300px]">
            <h2>Imágenes de referencia</h2>
            <form>
                <p>Imagen referencia</p>
            </form>
            </section>
            <section className="m-8 w-[300px]">
                <h2>Registro y seguimiento</h2>
                <p>Fecha de registro(por definir con el back)</p>
            </section>
        </div>
    )
};

export default Shelter;