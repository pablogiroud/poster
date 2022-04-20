import React from 'react'
import imgunt from '../assets/img/unt.png'
import imgproimi from '../assets/img/proimi-conicet.png'
import imgconicet from '../assets/img/conicet.png'

const Footer = () => {
  let pg = 'https://github.com/pablogiroud'
  let unt = 'https://www.fbqf.unt.edu.ar/'
  let proimi = 'https://proimi.conicet.gov.ar/'
  let conicet = 'https://www.conicet.gov.ar/'
  let repo = 'https://github.com/pablogiroud/poster'
  return (
    <footer className="footerCR">
      <div className="d-flex justify-content-center">
        <div className="cards-45 text-center align-items-center p-0 m-0">
          <p className="fw-bold">
            <i>
              Primer Simposio Argentino sobre Escherichia coli productor de
              toxina Shiga (STEC/VTEC) responsable del Síndrome Urémico
              Hemolítico
            </i>
          </p>
        </div>
        <div className="cards-45 text-center align-items-baseline p-0 m-0">
            <div className='cards-footer' onClick={()=> window.open(proimi, "_blank")}>
              <img className="img-fluid" src={imgproimi} alt="UNT" />
            </div>
            <div className='cards-footer' onClick={()=> window.open(conicet, "_blank")}>
              <img className="img-fluid" src={imgconicet} alt="UNT" />
            </div>
            <div className='cards-footer' onClick={()=> window.open(unt, "_blank")}>
              <img className="img-fluid" src={imgunt} alt="UNT" />
            </div>
        </div>
      </div>
      <div className="d-flex justify-content-center"> 
        <p className="text-center" onClick={()=> window.open(pg, "_blank")}> © 2022 Copyright: Carla Romano - CONICET </p>
        <p className="px-3 text-center" onClick={()=> window.open(pg, "_blank")}>Web desing: Pablo Giroud </p>
        <p className="px-3 text-center" onClick={()=> window.open(repo, "_blank")}>v1.0</p>
      </div>
    </footer>
  )
}

export default Footer