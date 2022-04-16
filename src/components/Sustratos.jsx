import xosarroz from '../assets/img/xos-arroz.png'
import xosbagazo from '../assets/img/xos-bagazo.png'
import xossalvadotrigo from '../assets/img/xos-salvado-trigo.png'

const Sustratos = ()=>{

    return(
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-4">Materiales y métodos</h2>
                <h3 class="text-center text-uppercase text-secondary mb-0">Sustratos liofilizados</h3>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={xosarroz} alt="..." />
                            <h3 class="text-center text-uppercase text-secondary mt-3">XOS de cáscara de arroz</h3>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={xosbagazo} alt="..." />
                            <h3 class="text-center text-uppercase text-secondary mt-3">XOS de bagazo de caña de azúcar</h3>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={xossalvadotrigo} alt="..." />
                            <h3 class="text-center text-uppercase text-secondary mt-3">XOS de salvado de trigo</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sustratos;