
const Productos = () => {
  return (
    <main className="my-10" id="productos">
      <h3 className="heading">Productos</h3>
      <div className="mx-2 mt-10 md:mx-24 grid gap-14 md:grid-cols-3 md:gap-20">
        {[1, 2, 3].map(card => (
          <div key={card} className="font-raleway font-bold shadow-xl md:shadow-2xl pb-5 md:pb-7 rounded-lg">
            <img src="/img/producto.png" alt="Producto Imagen" />
            <div className="px-2 md:py-3 md:px-4">
              <p className="my-2 text-primary text-lg md:text-xl">Descripcion</p>
              <p className=" text-secondary md:text-lg">Descripción del producto va aquí Descripción del producto va aquí Descripción del producto va aquí</p>
            </div>
            <p className="mt-5 text-center text-4xl text-primary md:text-5xl">$250</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Productos