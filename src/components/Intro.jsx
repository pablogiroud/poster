import prebioticos from '../assets/img/prebioticos.png'
const Intro = ()=>{

    return(
        <section className="page-section portfolio" id="portfolio">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-4">Introducción</h2>
            <div className="container">
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <img className="img-fluid2" src={prebioticos} alt="..." />
            </div>
        </section>
    )
}

export default Intro;