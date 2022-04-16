import img1 from '../assets/img/unt.png'
import img2 from '../assets/img/proimi-conicet.png'

const Title = () => {
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <div className="container d-flex justify-content-around align-items-center flex-row">
                    <img className="masthead-avatar mb-3" src={img2} alt="PROIMI BIOTECNOLOGÍA CONICET" />
                    <img className="masthead-avatar mb-3" src={img1} alt="UNT" />
                </div>
                
                <h1 className="masthead-heading text-uppercase mb-0">EVALUACIÓN DEL POTENCIAL PREBIÓTICO DE XILOOLIGOSACÁRIDOS OBTENIDOS A PARTIR DE RESIDUOS AGROINDUSTRIALES</h1>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <a className="masthead-subheading font-weight-light mb-0" href="https://www.linkedin.com/in/carla-romano-674455201/" target="_blank">Carla Romano</a>
                <a className="masthead-subheading font-weight-light mb-0" >José Horacio Pisa</a>
                <a className="masthead-subheading font-weight-light mb-0" href="https://www.linkedin.com/in/johan-sebastian-hero-5b3aaa86/" target="_blank">Johan Sebastián Hero</a>
                <a className="masthead-subheading font-weight-light mb-0" href="https://www.linkedin.com/in/alejandra-mart%C3%ADnez-84330746" target="_blank">María Alejandra Martínez</a>
            
            </div>
        </header>
    )
  }
  
  export default Title;
  