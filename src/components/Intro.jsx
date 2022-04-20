import prebioticos from '../assets/img/prebioticos.png'
const Intro = () => {
  return (
    <section className="page-section portfolio" id="intro">
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-4">
        Introducción
      </h2>
      <div className="container">
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <a href="#referencias">
          <img
            className="img-fluid2"
            src={prebioticos}
            alt="..."
            href="#referencias"
          />
        </a>
      </div>

      <div className="objText px-4">
        Numerosos estudios han demostrado que la proliferación de estas
        bacterias probióticas no solo refuerzan el sistema inmune del
        hospedador, sino que también ayudan a prevenir y combatir infecciones
        causadas por bacterias enteropatógenas, tales como Escherichia coli
        O157:H7, entre otras
        <a className="objText p-0" href="#referencias">
          <sup>(2)</sup>.
        </a>
      </div>
    </section>
  )
}

export default Intro
