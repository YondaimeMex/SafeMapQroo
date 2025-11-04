const InfoShelterView= () =>{

    return(
<div className="grid grid-cols-2 gap-0">
  <section className="w-[300px]">
    <h2 className="font-semibold text-lg mb-2">Información del albergue</h2>
    <form className="grid gap-2">
      <label className="flex flex-col">
        <span>Municipio</span>
        <input type="text" readOnly className="p-1 bg-transparent outline-none border-none focus:outline-none focus:ring-0" />
      </label>
      <label className="flex flex-col">
        <span>Domicilio</span>
        <input type="text" readOnly className="p-1 bg-transparent outline-none border-none focus:outline-none focus:ring-0" />
      </label>
      <label className="flex flex-col">
        <span>Edificio o nombre del lugar</span>
        <input type="text" readOnly className="p-1 bg-transparent outline-none border-none focus:outline-none focus:ring-0" />
      </label>
      <label className="flex flex-col">
        <span>Capacidad máxima de ocupantes</span>
        <input type="text" readOnly className="p-1 bg-transparent outline-none border-none focus:outline-none focus:ring-0" />
      </label>
      <label className="flex flex-col">
        <span>Estado del albergue</span>
        <input type="text" readOnly className="p-1 bg-transparent outline-none border-none focus:outline-none focus:ring-0" />
      </label>
    </form>
  </section>

  <section className="w-[300px]">
    <h2 className="font-semibold text-lg mb-2">Administrador</h2>
    <form className="grid gap-2">
      <label className="flex flex-col">
        <span>Nombre del administrador</span>
        <input type="text" readOnly className="p-1 bg-transparent outline-none border-none focus:outline-none focus:ring-0" />
      </label>
      <label className="flex flex-col">
        <span>Cargo</span>
        <input type="text" readOnly className="p-1 bg-transparent outline-none border-none focus:outline-none focus:ring-0" />
      </label>
      <label className="flex flex-col">
        <span>Teléfono de contacto</span>
        <input type="text" readOnly className="p-1 bg-transparent outline-none border-none focus:outline-none focus:ring-0" />
      </label>
      <label className="flex flex-col">
        <span>Correo electrónico</span>
        <input type="text" readOnly className="p-1 bg-transparent outline-none border-none focus:outline-none focus:ring-0" />
      </label>
    </form>
  </section>

  <section className="w-[300px]">
    <h2 className="font-semibold text-lg mb-2">Ubicación geográfica</h2>
    <form className="grid gap-2">
      <label className="flex flex-col">
        <span>Latitud</span>
        <input type="text" readOnly className="p-1 bg-transparent outline-none border-none focus:outline-none focus:ring-0" />
      </label>
      <label className="flex flex-col">
        <span>Longitud</span>
        <input type="text" readOnly className="p-1 bg-transparent outline-none border-none focus:outline-none focus:ring-0" />
      </label>
    </form>
  </section>

  <section className="w-[300px]">
    <h2 className="font-semibold text-lg mb-2">Contacto del albergue</h2>
    <form className="grid gap-2">
      <label className="flex flex-col">
        <span>Teléfono</span>
        <input type="text" readOnly className="p-1 bg-transparent outline-none border-none focus:outline-none focus:ring-0" />
      </label>
      <label className="flex flex-col">
        <span>Correo electrónico</span>
        <input type="text" readOnly className="p-1 bg-transparent outline-none border-none focus:outline-none focus:ring-0" />
      </label>
    </form>
  </section>

  <section className="w-[300px]">
    <h2 className="font-semibold text-lg mb-2">Imágenes de referencia</h2>
    <form>
      <p>Imagen referencia</p>
    </form>
  </section>

  <section className="w-[300px]">
    <h2 className="font-semibold text-lg mb-2">Registro y seguimiento</h2>
    <p>Fecha de registro (por definir con el back)</p>
  </section>
</div>

    )
};

export default InfoShelterView;