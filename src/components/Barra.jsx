import { useState } from "react"

const Barra = () => {

    const [mostrar, setMostrar] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center mx-3 py-5 md:mx-28 md:py-10">
                <h1 className="text-white text-2xl md:text-4xl">LOgO</h1>
                <nav className="hidden text-white md:flex md:gap-14 md:text-xl">
                    <a className="cursor-pointer">Productos</a>
                    <a className="cursor-pointer">Contacto</a>
                    <a className="cursor-pointer">Ubicación</a>
                    <a className="cursor-pointer">Horarios</a>
                </nav>
                <button 
                    onClick={() => setMostrar(true)}
                    className="md:hidden"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>
            </div>
            <div className={`${mostrar ?  'mostrar': 'ocultar'} fixed h-screen w-full top-0 bg-white`}>
                <h2 className="font-raleway font-bold text-primary text-center text-3xl mt-7 mb-10">Menu</h2>
                <nav className="flex flex-col justify-center items-center gap-10">
                    <a className="cursor-pointer">Productos</a>
                    <a className="cursor-pointer">Contacto</a>
                    <a className="cursor-pointer">Ubicación</a>
                    <a className="cursor-pointer">Horarios</a>
                </nav>
                <div className="absolute bottom-0 flex justify-end w-full">
                    <button
                        onClick={() => setMostrar(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary my-5 mx-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Barra