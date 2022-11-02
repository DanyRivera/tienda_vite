
const Horarios = () => {
  return (
    <section className="md:mx-24 mt-28 mb-20" id="horarios">
      <h3 className="heading">Horarios</h3>
      <div className="font-raleway font-medium mt-16 mx-5">
        <div className="grid gap-10 md:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7].map(dia => (
            <div key={dia} className="text-center dia">
              <p className="py-4 bg-primary text-white border border-primary md:bg-white md:text-primary text-xl md:hover:bg-primary md:hover:text-white transition-all ">Lunes</p>
              <p className="py-4 text-lg border border-t-0 border-primary text-primary hora bg-white">8:00am - 10:00pm</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Horarios