
const Gallery = () => {

    const imagenes = [
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
    ]

    return (
        <section className="md:mx-24">
            <h3 className="heading">Galeria</h3>
            <div className="grid grid-cols-5 md:grid-cols-6 gap-2 mt-5 md:mt-8 mx-5 md:mx-0">
                {imagenes.map((url, index) => (
                    <div className="imagen" key={index}>
                        <img  className="w-full h-full object-cover" src={url} alt="Imagen - Galería"/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery