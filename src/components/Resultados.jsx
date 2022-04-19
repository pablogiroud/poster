import graph1 from '../assets/img/graph1.png'
import graph2 from '../assets/img/graph2.png'
import graph3 from '../assets/img/graph3.png'
import tabla1 from '../assets/img/tabla1.png'

const Resultados = () => {
  return (
    <section className="page-section portfolio pb-5" id="resultados">
      <div className="container pb-5">
        <h3 className="text-center text-uppercase text-secondary mb-0">
          Resultados
        </h3>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="cardsCustom">
          <div className="cards-33">
            <img className="img-fluid2" src={graph1} alt="Grafico 1" onClick={()=> window.open(graph1, "_blank")}/>
            <p>
              Valores máximos de DO (superior a 2) fueron alcanzados en los
              medios suplementados con la combinación XOS e Inulina.
            </p>
          </div>
          <div className="cards-33">
            <img className="img-fluid2" src={graph2} alt="Grafico 2" onClick={()=> window.open(graph2, "_blank")}/>
            <img className="img-fluid2" src={graph3} alt="Grafico 3" onClick={()=> window.open(graph3, "_blank")}/>
            <p>
              Crecieron de manera similar en los medios suplementados con
              Inulina, Glucosa y con la combinación de Inulina y XOS, con
              máximos observados cuando los XOS derivan de Bagazo de caña de
              azucar
            </p>
          </div>
          <div className="cards-33">
            <h6 className='p0 mb-0'>UFC máxima alcanzada y menor pH detectado</h6>
            <img className="img-fluid2" src={tabla1} alt="Tabla de resultados" onClick={()=> window.open(tabla1, "_blank")} />
            <p>
            <i>L. brevis.</i> UFC maxima alcanzada en medios XOS + Inulina con caída
              de pH de entre 0.8 y 1.3 unidades. <i>L. plantarum y W. cibaria</i> UFC
              máximos alcanzados en medios Inulina, Glucosa y XOS + Inulina .
              Mayor caída de Ph 5.27 <i>L. plantarum</i> y pH 5.75 W. cibaria
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resultados
