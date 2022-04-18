import prebioticos from '../assets/img/prebioticos.png'
const Intro = ()=>{

    return(
        <section className="page-section portfolio" id="intro">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-4">Introducción</h2>
            <div className="container">
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <img className="img-fluid2" src={prebioticos} alt="..." />
            </div>
            <div>
                <p className="objText">
                    Numerosos estudios han demostrado que la proliferación de
                    estas bacterias probióticas no solo refuerzan el sistema inmune
                    del hospedador, sino que también ayudan a prevenir y combatir
                    infecciones causadas por bacterias enteropatógenas, tales como
                    Escherichia coli O157:H7, entre otras.
                </p>
            </div>
        </section>
    )
}

export default Intro;