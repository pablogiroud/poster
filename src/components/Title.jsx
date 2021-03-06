/* eslint-disable */
import img1 from '../assets/img/unt.png'
import img2 from '../assets/img/proimi-conicet.png'

const Title = () => {
  let carla = 'https://www.linkedin.com/in/carla-romano-674455201/'
  let horacio = 'https://www.linkedin.com/in/jos%C3%A9-pisa-1712a7b2'
  let johan = 'https://www.linkedin.com/in/johan-sebastian-hero-5b3aaa86/'
  let alejandra = 'https://www.linkedin.com/in/alejandra-mart%C3%ADnez-84330746'

  return (
    <header className="masthead title text-center">
      <div className="container d-flex align-items-center flex-column">
        <div className="container d-flex justify-content-around align-items-center flex-row">
          <img
            className="masthead-avatar img-fluid mb-3"
            src={img2}
            alt="PROIMI BIOTECNOLOGÍA CONICET"
          />
          <img
            className="masthead-avatar img-fluid mb-3"
            src={img1}
            alt="UNT"
          />
        </div>
        <h1 className="masthead-heading text-uppercase mb-0">
          EVALUACIÓN DEL POTENCIAL PREBIÓTICO DE XILOOLIGOSACÁRIDOS OBTENIDOS A
          PARTIR DE RESIDUOS AGROINDUSTRIALES
        </h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div>
          <a
            className="names font-weight-light mb-0"
            onClick={() => window.open(carla, '_blank')}
          >
            Carla Romano
          </a>
        </div>
        <div>
          <a
            className="names font-weight-light mb-0"
            onClick={() => window.open(horacio, '_blank')}
          >
            José Horacio Pisa
          </a>
        </div>
        <div>
          <a
            className="names font-weight-light mb-0"
            onClick={() => window.open(johan, '_blank')}
          >
            Johan Sebastián Hero
          </a>
        </div>
        <div>
          <a
            className="names font-weight-light mb-0"
            onClick={() => window.open(alejandra, '_blank')}
          >
            María Alejandra Martínez
          </a>
        </div>
      </div>
    </header>
  )
}

export default Title

/*
 */
