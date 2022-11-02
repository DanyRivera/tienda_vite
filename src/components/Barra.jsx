import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Barra = () => {

    const [mostrarMenu, setMostrarMenu] = useState(false);

    const [offsetY, setOffsetY] = useState(0);
    const [mostrarBarra, setMostrarBarra] = useState(false);

    const handleScroll = () => {
        setOffsetY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        if (offsetY > 80) {
            setMostrarBarra(true);
        } else {
            setMostrarBarra(false);
        }
    }, [offsetY])

    return (
        <>
            <div className={`${mostrarBarra ? 'mostrar-barra bg-primary z-10 md:py-6' : 'md:py-12'} fixed w-full top-0 flex justify-between items-center px-3 py-5 md:px-28`}>
                <h1 className="text-white text-2xl md:text-4xl">LOgO</h1>
                <nav className="hidden text-white md:flex md:gap-14 md:text-xl">
                    <Link 
                        className="cursor-pointer"
                        to="productos"
                        smooth={true}
                        duration={1000}
                        offset={-120}
                    >Productos</Link>
                    <Link 
                        className="cursor-pointer"
                        to="contacto"
                        smooth={true}
                        duration={1000}
                        offset={-120}
                    >Contacto</Link>
                    <Link 
                        className="cursor-pointer"
                        to="ubicacion"
                        smooth={true}
                        duration={1000}
                        offset={-120}
                    >Ubicación</Link>
                    <Link 
                        className="cursor-pointer"
                        to="horarios"
                        smooth={true}
                        duration={1000}
                        offset={-120}
                    >Horarios</Link>
                </nav>
                <button
                    onClick={() => setMostrarMenu(true)}
                    className="md:hidden"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>
            </div>
            <div className={`${mostrarMenu ? 'mostrar-menu' : 'ocultar-menu'} fixed h-screen w-full top-0 bg-white z-20`}>
                <h2 className="font-raleway font-bold text-primary text-center text-3xl mt-7 mb-10">Menu</h2>
                <nav className="flex flex-col justify-center items-center gap-10">
                    <Link 
                        className="cursor-pointer"
                        onClick={() => setMostrarMenu(false)}
                        to="productos"
                        smooth={true}
                        duration={1500}
                        offset={-100}
                    >Productos</Link>
                    <Link 
                        className="cursor-pointer"
                        onClick={() => setMostrarMenu(false)}
                        to="contacto"
                        smooth={true}
                        duration={1500}
                        offset={-100}
                    >Contacto</Link>
                    <Link 
                        className="cursor-pointer"
                        onClick={() => setMostrarMenu(false)}
                        to="ubicacion"
                        smooth={true}
                        duration={1500}
                        offset={-100}
                    >Ubicación</Link>
                    <Link 
                        className="cursor-pointer"
                        onClick={() => setMostrarMenu(false)}
                        to="horarios"
                        smooth={true}
                        duration={1500}
                        offset={-100}
                    >Horarios</Link>
                </nav>
                <div className="fixed bottom-4 right-4 flex justify-end w-full">
                    <button
                        className="cursor-pointer"
                        onClick={() => setMostrarMenu(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Barra