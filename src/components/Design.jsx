import { ListGroup } from 'react-bootstrap'

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
  const lista = list1.map((list1) => (
    <ListGroup as="li" key={list1.toString()}>
      - {list1}
    </ListGroup>
  ))

  return (
    <section className=" title page-section portfolio pb-5" id="diseno">
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
          <h4 className="text-center text-secondary mb-0">
            Crecimiento en Laptg modificado (fuente de carbono 2g/l)
          </h4>
        </div>
        <ListGroup as="ul" className="text-secondary mt-3">
          {lista}
        </ListGroup>
        <hr />
        <p className="text-secondary">
          Incubación a 37° - Condiciones estáticas - 72hs
        </p>
      </div>
    </section>
  )
}

export default Diseno
