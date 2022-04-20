import xosarroz from '../assets/img/xos-arroz.png'
import xosbagazo from '../assets/img/xos-bagazo.png'
import xossalvadotrigo from '../assets/img/xos-salvado-trigo.png'

const MaterialesYMetodos = () => {
  return (
    <section className="page-section portfolio" id="matymet">
      <div className="container" id="sust">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-4">
          Materiales y métodos
        </h2>
        <h3 className="text-center text-uppercase text-secondary mb-0">
          Sustratos
          <sup>
            <a href="#referencias">(3)</a>
          </sup>
        </h3>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          <div className="cards-33">
            <img className="img-fluid" src={xosarroz} alt="..." />
            <h4 className="text-center text-uppercase text-secondary mt-3">
              XOS de cáscara de arroz
            </h4>
          </div>
          <div className="cards-33">
            <img className="img-fluid" src={xosbagazo} alt="..." />
            <h4 className="text-center text-uppercase text-secondary mt-3">
              XOS de bagazo de caña de azúcar
            </h4>
          </div>
          <div className="cards-33">
            <img className="img-fluid" src={xossalvadotrigo} alt="..." />
            <h4 className="text-center text-uppercase text-secondary mt-3">
              XOS de salvado de trigo
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MaterialesYMetodos
