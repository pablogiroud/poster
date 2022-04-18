import espectrofotometro from '../assets/img/espectrofotometro.png'
import placadeelisa from '../assets/img/placadeelisa.png'
import lagota from '../assets/img/lagota.png'
import phimetro from '../assets/img/phimetro.png'

const Determ = () => {
  return (
    <section className="page-section portfolio" id="det">
      <div className="container">
        <h3 className="text-center text-uppercase text-secondary mb-0">
          Determinaciones analíticas
        </h3>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="cardsCustom">
          <div className="cards-25">
            <img className="img-fluid" src={espectrofotometro} alt="..." />
            <p>
              DO<sub>600nm</sub> Espectrofotómetro
            </p>
          </div>
          <div className="cards-25">
            <img className="img-fluid" src={placadeelisa} alt="..." />
            <p>
              DO<sub>600nm</sub> Placas de Elisa
            </p>
          </div>
          <div className="cards-25">
            <img className="img-fluid" src={lagota} alt="..." />
            <p>UFC - Método de la gota (24hs/48hs/72hs)</p>
          </div>
          <div className="cards-25">
            <img className="img-fluid" src={phimetro} alt="..." />
            <p>pH - Indicativo de producción de ácidos de cadenas cortas</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Determ

/*
<section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h3 className="text-center text-uppercase text-secondary mb-0">
          Determinaciones analíticas
        </h3>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5 w-25 p-3 h-25 d-inline-block">
            <img className="img-fluid" src={espectrofotometro} alt="..." />
            <p>
              DO<sub>600nm</sub> Espectrofotómetro
            </p>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 w-25 p-3 h-25 d-inline-block">
            <img className="img-fluid" src={placadeelisa} alt="..." />
            <p>
              DO<sub>600nm</sub> Placas de Elisa
            </p>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 w-25 p-3 h-25 d-inline-block">
            <img className="img-fluid" src={lagota} alt="..." />
            <p>UFC - Método de la gota (24hs/48hs/72hs)</p>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 w-25 p-3 h-25 d-inline-block">
            <img className="img-fluid" src={phimetro} alt="..." />
            <p>pH - Indicativo de producción de ácidos de cadenas cortas</p>
          </div>
        </div>
      </div>
    </section>
*/
