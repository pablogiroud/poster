const Micoorganism = () => {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h3 class="page-section-heading text-center text-uppercase text-secondary mb-4">
          Mircoorganismos
        </h3>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5 w-25 p-3 h-25 d-inline-block">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal1"
              >
                <h1>1</h1>
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <h3 className="text-center text-uppercase text-secondary mt-3">
                Lactobacillus brevis D5MZ 269
              </h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 w-25 p-3 h-25 d-inline-block">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal1"
              >
                <h1>2</h1>
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <h3 className="text-center text-uppercase text-secondary mt-3">
              Lactobacillus plantarum ATCC 14917
              </h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 w-25 p-3 h-25 d-inline-block">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal1"
              >
                <h1>3</h1>
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <h3 className="text-center text-uppercase text-secondary mt-3">
              Weissella cibaria 92
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Micoorganism;