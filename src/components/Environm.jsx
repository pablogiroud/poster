import medios from '../assets/img/medios.png'
const Intro = ()=>{

    return(
        <section className="page-section portfolio" id="medios">
            <h3 className="text-center text-uppercase text-secondary mb-0">Medios de cultivo</h3>
            <div className="container pb-5">
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <img className="img-fluid2" src={medios} alt="..." />
            </div>
        </section>
    )
}

export default Intro;