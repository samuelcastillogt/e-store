import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { Contador } from "@/utils/contador";
import OfertasDestacadas from "@/components/OfertasDestacadas";

const featured = [
  "Phone",
  "Headphones",
  "Laptop",
  "Camera",
  "TV",
];

const cartItems = ["Laptop", "Watch", "TV", "Console", "Tablet"];

export default function Home() {
  const cronometro = new Contador(5, "incremental")
  const [productos, setProductos] = useState<any>([]);
  const [contador, setContador] = useState<number>(cronometro.getContador());
  console.log(cronometro.getContador())
  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/v1/products");
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  
  return (
    <>
      <Head>
        <title>e-shop preview</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.stage}>
        <div className={styles.backdropArc} />
        <section className={styles.board}>
        <OfertasDestacadas styles={styles} featured={featured}/>

          <article className={styles.mainPanel}>
            <div className={styles.topNav}>
              <b>e-shop.</b>
              <nav>
                <span>Products</span>
                <span>Blog</span>
                <span>Contact</span>
              </nav>
            </div>
            <div className={styles.hero}>
              <div>
                <h1>Your One-Stop Electronic Market</h1>
                <p>
                  Welcome to e-shop, a place where you can buy everything about
                  electronics.
                </p>
                <button type="button">Shop now</button>
              </div>
              <div className={styles.heroMock} />
            </div>
            <h2>Featured Products</h2>
            <div className={styles.productGrid}>
              {featured.map((item) => (
                <article key={item} className={styles.productCard}>
                  <span className={styles.productImage} />
                  <small>{item}</small>
                  <p>{item} High Quality Edition</p>
                  <b>$199.00</b>
                </article>
              ))}
            </div>
            <div className={styles.banners}>
              <article>
                <h3>Free Shipping Everywhere!</h3>
                <button type="button">Shop now</button>
              </article>
              <article>
                <h3>Black Friday Clearance</h3>
                <button type="button">Shop now</button>
              </article>
            </div>
          </article>

          <article className={styles.cartPanel}>
            <header className={styles.panelHeader}>
              <span>Your Cart</span>
              <small>5 items</small>
            </header>
            {cartItems.map((item) => (
              <div key={item} className={styles.cartRow}>
                <span className={styles.cartThumb} />
                <div>
                  <strong>{item}</strong>
                  <p>Variant: Tiny text</p>
                </div>
                <b>$59.00</b>
              </div>
            ))}
            <footer className={styles.cartFooter}>
              <span>Total</span>
              <b>$273.00</b>
            </footer>
          </article>
        </section>
      </main>
    </>
  );
}
