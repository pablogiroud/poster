const Determ = () => {
  let link1 = 'https://doi.org/10.1038/s41575-019-0173-3'
  let link2 = 'https://journals.asm.org/doi/10.1128/JCM.36.3.641-647.1998'
  let link3 = 'https://ri.conicet.gov.ar/handle/11336/147397'
  let link4 =
    'https://www.sciencedirect.com/science/article/pii/S0023643813004842'
  let link5 =
    'Potential of the Probiotic Lactobacillus Plantarum ATCC 14917 Strain to Produce Functional Fermented Pomegranate Juice'
  let link6 = 'https://www.nature.com/articles/s41598-020-62610-x'
  let link7 =
    'https://www.researchgate.net/figure/Lactobacillus-brevis-cells-at-3-days-in-MRS-The-cellular-wall-is-intact-Magnification-x_fig1_228486256'
  let link8 =
    'https://www.researchgate.net/figure/Aggregation-and-adhesion-ability-of-L-plantarum-ATCC-14917-under-initial-pH-stress-A_fig2_325351601'
  let link9 = 'http://koreabizwire.com/tag/weissella-cibaria-wikim28'

  return (
    <section className="page-section portfolio" id="referencias">
      <div className="container">
        <h3 className="text-center text-uppercase text-secondary mb-0">
          Referencias
        </h3>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="cardsCustom">
          <ul className="list-unstyled py-5">
            <li>
              (1) Sanders y col (2019)
              <p onClick={() => window.open(link1, '_blank')}>
                Probiotics and prebiotics in intestinal health and disease: from
                biology to the clinic.
              </p>
            </li>
            <li>
              (2) Zhao y col (1997)
              <p onClick={() => window.open(link2, '_blank')}>
                Reduction of Carriage of Enterohemorrhagic Escherichia coli
                O157:H7 in Cattle by Inoculation with Probiotic Bacteria.
              </p>
            </li>
            <li>
              (3) Hero y col (2021)
              <p onClick={() => window.open(link3, '_blank')}>
                Endo-xylanases from Cohnella sp. AR92 aimed at xylan and
                arabinoxylan conversion into value-added products.
              </p>
            </li>
            <li>
              (4) Immerzeel y col (2013)
              <p onClick={() => window.open(link4, '_blank')}>
                Extraction of water-soluble xylan from wheat bran and
                utilization of enzymatically produced xylooligosaccharides by
                Lactobacillus, Bifidobacterium and Weissella spp.
              </p>
            </li>
            <li>
              (5) Mantzourani y col (2018)
              <p onClick={() => window.open(link5, '_blank')}>
                Potential of the Probiotic Lactobacillus Plantarum ATCC 14917
                Strain to Produce Functional Fermented Pomegranate Juice.
              </p>
            </li>
            <li>
              (6) Månberger y col (2020)
              <p onClick={() => window.open(link6, '_blank')}>
                Taxogenomic assessment and genomic characterisation of Weissella
                cibaria strain 92 able to metabolise oligosaccharides derived
                from dietary fibres
              </p>
            </li>
            <li>
              <p onClick={() => window.open(link7, '_blank')}>
                (7) Researchgate.net - Lactobacillus brevis cells at 3 days in
                MRS
              </p>
            </li>
            <li>
              <p onClick={() => window.open(link8, '_blank')}>
                (8) Researchgate.net - Aggregation and adhesion ability of L.
                plantarum ATCC 14917 under initial pH stress.
              </p>
            </li>
            <li>
              <p onClick={() => window.open(link9, '_blank')}>
                (9) koreabizwire.com - Study on Lactic Acid Bacteria From Kimchi
                Sheds Light on Treatment of Atopic Dermatitis
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Determ
