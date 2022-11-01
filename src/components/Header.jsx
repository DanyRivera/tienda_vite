import Barra from "./Barra"

const Header = () => {
    return (
        <header className='bg-primary h-screen relative font-raleway font-bold'>
            <Barra />

            <div className="flex flex-col justify-center items-center gap-10 h-full -mt-10 lg:flex-row lg:-mt-40 lg:mx-24">
                <h2 className="text-white text-4xl leading-relaxed tracking-wider pl-5 lg:text-7xl lg:leading-normal">Encuentra con nosotros los que buscas!</h2>
                <img src="/img/hero_icon.png" alt="ILustracion HEader" />
            </div>

            <svg className=' md:block absolute bottom-0 w-full md:h-[225px]' preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,32L80,74.7C160,117,320,203,480,218.7C640,235,800,181,960,160C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </header>
    )
}

export default Header