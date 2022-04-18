import xosarroz from '../assets/img/xos-arroz.png'
import xosbagazo from '../assets/img/xos-bagazo.png'
import xossalvadotrigo from '../assets/img/xos-salvado-trigo.png'

const MaterialesYMetodos = ()=>{

    return(
        <section className="page-section portfolio" id="matymet">
            <div className="container" id="sust">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-4">Materiales y métodos</h2>
                <h3 className="text-center text-uppercase text-secondary mb-0">Sustratos liofilizados</h3>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={xosarroz} alt="..." />
                            <h4 className="text-center text-uppercase text-secondary mt-3">XOS de cáscara de arroz</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={xosbagazo} alt="..." />
                            <h4 className="text-center text-uppercase text-secondary mt-3">XOS de bagazo de caña de azúcar</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={xossalvadotrigo} alt="..." />
                            <h4 className="text-center text-uppercase text-secondary mt-3">XOS de salvado de trigo</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MaterialesYMetodos;