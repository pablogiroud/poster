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
            <div className="cards-25">
              <span>
                DO<sub>600nm</sub> Espectrofotómetro
              </span>
            </div>
          </div>
          <div className="cards-25">
            <img className="img-fluid" src={placadeelisa} alt="..." />
            <div className="cards-25">
              <span>
                DO<sub>600nm</sub> Placas de Elisa
              </span>
            </div>
          </div>
          <div className="cards-25">
            <img className="img-fluid" src={lagota} alt="..." />
            <div className="cards-25">
              <span>UFC - Método de la gota (24hs/48hs/72hs)</span>
            </div>
          </div>
          <div className="cards-25">
            <img className="img-fluid" src={phimetro} alt="..." />
            <div className="cards-25">
              <span>
                pH - Indicativo de producción de ácidos de cadenas cortas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Determ
