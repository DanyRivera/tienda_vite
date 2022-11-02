
const Ubicacion = () => {
  return (
    <section className="md:mx-24 my-10" id="ubicacion">
      <h3 className="heading">Ubicacion</h3>
      <div className="mt-8">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15088.391294391071!2d-98.21347766044919!3d19.015410599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc099a5e169f9%3A0xe2c7d057f0afa182!2sFlorer%C3%ADa%20Para%C3%ADso%20Puebla!5e0!3m2!1ses-419!2smx!4v1667271468749!5m2!1ses-419!2smx" className="h-[60vh] w-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="flex justify-center my-10">
        <a className="text-center bg-primary text-white px-6 py-3 rounded-lg text-lg cursor-pointer md:hover:bg-[#2e9200] transition-all md:px-14 md:py-4 md:text-xl">Ver En Maps</a>
      </div>
    </section>
  )
}

export default Ubicacion