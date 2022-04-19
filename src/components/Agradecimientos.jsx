const Agradecimientos = () => {
  return (
    <section className="page-section portfolio pb-5" id="agradecimientos">
      <div className="container pb-5">
        <h3 className="text-center text-uppercase text-secondary mb-0">
          Agradecimientos
        </h3>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="cardsCustom">
          <ul className="list-unstyled">
            <h5>Este trabajo fue realizado en PROIMI, con el aporte de:</h5>
            <li className="list-unstyled pb-2">
                VT42-UNT11881. "Producción de prebióticos". Convocatoria
                “Universidades Agregando Valor 2018”. Resolución 2018 - 109 -
                APN - SECPU – MECCYT.
            </li>
            <li className="list-unstyled pb-2">
                - PICT-2017-2185. "Enzimas activas sobre carbohidratos
                complejos: estudios genómicos y bioquímicos para aplicaciones en
                biorrefinería". Resolución ANPCYT Nº 310-18.
            </li>
            <li className="list-unstyled pb-2">
                - IC-904. Producción y formulación de cócteles enzimáticos para
                la valoración de recursos agroindustriales ricos en
                carbohidratos. Resolución 1556/2021. USPT.
            </li>
            <li>
              Se agradece la asistencia informática del Sr. Pablo Giroud.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Agradecimientos
