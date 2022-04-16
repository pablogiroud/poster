const Diseno = () => {
  const list1 = [
    'Glucosa',
    'Sin fuente de Carbono',
    'Inulina',
    'XOS extraidos de Bzo',
    'XOS extraidos de WB',
    'XOS extraidos de CA',
    'Inulina (1g/l) + XOS (1g/l) de Bzo',
    'Inulina (1g/l) + XOS (1g/l) de WB',
    'Inulina (1g/l) + XOS (1g/l) de CA',
  ]
  const lista = list1.map((list1) => <li key={list1.toString()}>{list1}</li>)

  return (
    <section className="page-section2 portfolio" id="portfolio">
      <h3 className="text-center text-uppercase text-secondary mb-0">
        Diseño Experimental
      </h3>
      <div className="container">
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div>
          <h4 className="text-center text-uppercase text-secondary mb-0">
            Crecimiento en Laptg modificado (fuente de carbono 2g/l)
          </h4>
        </div>
        <div
          className="portfolio-item mx-auto"
          data-bs-toggle="modal"
          data-bs-target="#portfolioModal1"
        >
          <div className="portfolio-item-caption d-flex h-100 w-100">
            <div className="portfolio-item-caption-content text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <h5 className="text-secondary mt-3">{lista}</h5>
          <hr />
          <h5 className="text-secondary mt-3">
            Incubación a 37° - Condiciones estáticas - 72hs
          </h5>
        </div>
      </div>
    </section>
  )
}

export default Diseno
