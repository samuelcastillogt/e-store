import React from 'react'
import MiniBannerWithOutImg from './MiniBannerWithOutImg'

function CentralContainer(props: any) {
  const { styles, featured } = props
  return (
          <article className={styles.mainPanel}>
            <div className={styles.topNav}>
              <b>Super-Star Store</b>
              <nav>
                <span>Productos</span>
                <span>Blog</span>
                <span>Contacto</span>
              </nav>
            </div>
            <div className={styles.hero}>
              <div>
                <h1>Ofertas en tiempo real todos los dias</h1>
                <p>
                  Encuentra ofertas para reventa y compra de productos.
                </p>
                <button type="button">Crear Cuenta gratis</button>
              </div>
              <div className={styles.heroMock} >
              <img src="https://st4.depositphotos.com/1049680/20134/i/450/depositphotos_201348290-stock-photo-african-american-woman-saves-money.jpg" alt="" style={{width: "100%"}}/>
              </div>
            </div>
            <h2>Featured Products</h2>
            <div className={styles.productGrid}>
              {featured.map((item:any) => (
                <article key={item} className={styles.productCard}>
                  <span className={styles.productImage} />
                  <small>{item}</small>
                  <p>{item} High Quality Edition</p>
                  <b>$199.00</b>
                </article>
              ))}
            </div>
            <div className={styles.banners}>
              <MiniBannerWithOutImg title="Ropa femenina para hombres" action="Explorar" />
              <MiniBannerWithOutImg title="Tecnologia obsoleta cara" action="Estafarme" />
            </div>
          </article>
  )
}

export default CentralContainer