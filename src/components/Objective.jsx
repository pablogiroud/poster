const Objective = () => {
  return (
    <section className="page-section portfolio" id="obj">
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-4">
        Objetivos
      </h2>
      <div className="container">
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="objText">
          Evaluar la utilización por bacterias <i>Lactobacillus brevis</i> DSMZ
          269
          <sup>
            <a className="p-0" href="#referencias">
              (4)
            </a>
          </sup>
          ,<i>Lactobacillus plantarum</i> ATCC 14917
          <sup>
            <a className="p-0" href="#referencias">
              (5)
            </a>
          </sup>
          y <i>Weissella cibaria</i> cepa 92
          <sup>
            <a className="p-0" href="#referencias">
              (6)
            </a>
          </sup>
          , de moléculas potencialmente prebióticas obtenidas por hidrólisis
          enzimática de xilanos (XOS) procedentes de las materias primas
          secundarias salvado de trigo (WB), bagazo de caña de azúcar (Bzo) y
          cáscara de arroz (CA).
        </div>
      </div>
    </section>
  )
}

export default Objective
