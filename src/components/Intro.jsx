import prebioticos from '../assets/img/prebioticos.png'
const Intro = ()=>{

    return(
        <section class="page-section portfolio" id="portfolio">
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-4">Introducción</h2>
            <div class="container">
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <img class="img-fluid2" src={prebioticos} alt="..." />
            </div>
        </section>
    )
}

export default Intro;