import React from 'react'

function OfertasDestacadas(props: any) {
    const {styles, featured} = props
  return (
              <article className={styles.sidePanel}>
            <header className={styles.panelHeader}>
              <span>Ofertas Destacadas</span>
              <small>Ver todo lo que ahorras</small>
            </header>
            <div className={styles.promoCard}>
              <p>Oferta irresisible</p>
              <button type="button">Reservar</button>
              <img src="./iphone.png" className="promoCard-img"/>
            </div>
            <div className={styles.list}>
              {featured.map((item:any) => (
                <div key={item} className={styles.row}>
                  <span className={styles.thumb} />
                  <div>
                    <strong>{item}</strong>
                    <p>Top selling product</p>
                  </div>
                  <b>$99.00</b>
                </div>
              ))}
            </div>
          </article>
  )
}

export default OfertasDestacadas