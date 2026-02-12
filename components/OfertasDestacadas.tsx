import React from 'react'
import { useStore } from '../store/products.state'

function OfertasDestacadas(props: any) {
    const {styles, featured} = props
    const ofertas: any = useStore((state:any) => state.ofertas)
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
              {ofertas.map((item:any) => (
                <div key={item.nombre} className={styles.row}>
                  <img src={item.img} className={styles.thumb}/>
                  <div>
                    <strong>{item.nombre}</strong>
                    <p>{item.categoria}</p>
                  </div>
                  <b>Q{item.precio}</b>
                </div>
              ))}
            </div>
          </article>
  )
}

export default OfertasDestacadas