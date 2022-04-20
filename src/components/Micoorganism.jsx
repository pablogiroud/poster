import { Card } from 'react-bootstrap'
import lbb from '../assets/img/lbb.png'
import lbp from '../assets/img/lbp.png'
import wc from '../assets/img/wc.jpg'

const Micoorganism = () => {
  return (
    <section className="page-section portfolio" id="microo">
      <div className="container">
        <h3 className="text-center text-uppercase text-secondary mb-0">
          Microorganismos
        </h3>
        <div className="text-center">
          <h6>
            (imágenes a modo ilustrativo
            <sup>
              <a href="#referencias">(7)</a>
            </sup>
            )
          </h6>
        </div>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="cardsCustom">
          <div className="cards">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={lbb} />
              <Card.Body>
                <Card.Title>Lactobacillus brevis DSMZ 269</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="cards">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={lbp} />
              <Card.Body>
                <Card.Title>Lactobacillus plantarum ATCC 14917</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="cards">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={wc} />
              <Card.Body>
                <Card.Title>Weissella cibaria 92</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Micoorganism
