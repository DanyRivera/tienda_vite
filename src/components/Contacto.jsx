import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebookF, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Contacto = () => {
  return (
    <section className="md:mx-36 my-24">
      <h3 className="heading">Contacto</h3>
      <nav className="mt-10 flex flex-col items-center gap-10 md:flex-row justify-around md:my-18">
        <a>
          <FontAwesomeIcon className="w-14 h-14 text-primary md:w-20 md:h-20 md:hover:text-[#2e9200] cursor-pointer transition-all" icon={faWhatsapp} />
        </a>
        <a>
          <FontAwesomeIcon className="w-14 h-14 text-primary md:w-20 md:h-20 md:hover:text-[#2e9200] cursor-pointer transition-all" icon={faInstagram} />
        </a>
        <a>
          <FontAwesomeIcon className="w-14 h-14 text-primary md:w-20 md:h-20 md:hover:text-[#2e9200] cursor-pointer transition-all" icon={faFacebookF} />
        </a>
        <a>
          <FontAwesomeIcon className="w-14 h-14 text-primary md:w-20 md:h-20 md:hover:text-[#2e9200] cursor-pointer transition-all" icon={faYoutube} />
        </a>
      </nav>
    </section>
  )
}

export default Contacto