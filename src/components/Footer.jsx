import React from 'react'

const Footer = () => {
  let pg = "https://github.com/pablogiroud"
  let unt = "https://www.fbqf.unt.edu.ar/"
  let proimi = "https://proimi.conicet.gov.ar/"
  let conicet = "https://www.conicet.gov.ar/"
    return (
    <footer className="page-footer font-small blue pt-4 footerCR">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <p className='fw-bold'>
            <i>Primer Simposio Argentino sobre Escherichia coli productor de toxina Shiga (STEC/VTEC) responsable del Síndrome Urémico Hemolítico</i>
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-0" />
          <div className="col-md-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <p className="footlink" onClick={()=> window.open(proimi, "_blank")}> PROIMI </p>
              </li>
              <li>
                <p className="footlink" onClick={()=> window.open(conicet, "_blank")}> CONICET </p>
              </li>
              <li>
                <p className="footlink" onClick={()=> window.open(unt, "_blank")}> UNT - Facultad de Bioquímica, Química y Farmacia </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center pt-3">
        © 2022 Copyright: 
        <p onClick={()=> window.open(pg, "_blank")}> Pablo Giroud </p>
        <p className="pb-3" onClick={()=> window.open(pg, "_blank")}>Web desing: Pablo Giroud </p>
      </div>
    </footer>
  )
}

export default Footer
