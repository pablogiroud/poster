import medios from '../assets/img/medios.png'
const Intro = ()=>{

    return(
        <section class="page-section portfolio" id="portfolio">
            <h3 class="text-center text-uppercase text-secondary mb-0">Medios de cultivo</h3>
            <div class="container">
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <img class="img-fluid2" src={medios} alt="..." />
            </div>
        </section>
    )
}

export default Intro;