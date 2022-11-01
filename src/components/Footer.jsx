import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebookF, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {

  const date = new Date();
  const currentDate = date.getFullYear();

  return (
    <footer className="bg-primary">
      <div className="py-5 md:flex justify-between items-center md:mx-24 md:py-2">
        <h2 className="text-white text-3xl md:text-4xl text-center font-bold">LOgO</h2>
        <nav className="grid grid-cols-2 text-center gap-y-7 py-7 md:grid-cols-4 md:gap-14">
          <a>
            <FontAwesomeIcon className="w-10 h-10 text-white md:w-10 md:h-10 cursor-pointer transition-all" icon={faWhatsapp} />
          </a>
          <a>
            <FontAwesomeIcon className="w-10 h-10 text-white md:w-10 md:h-10 cursor-pointer transition-all" icon={faInstagram} />
          </a>
          <a>
            <FontAwesomeIcon className="w-10 h-10 text-white md:w-10 md:h-10 cursor-pointer transition-all" icon={faFacebookF} />
          </a>
          <a>
            <FontAwesomeIcon className="w-10 h-10 text-white md:w-10 md:h-10 cursor-pointer transition-all" icon={faYoutube} />
          </a>
        </nav>
      </div>
      <p className="text-center bg-[#2e9200] text-white py-5 z-10">&copy; {currentDate} Tienda Todos los Derechos Reservados</p>
    </footer>
  )
}

export default Footer