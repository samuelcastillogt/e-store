import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { Contador } from "@/utils/contador";
import OfertasDestacadas from "@/components/OfertasDestacadas";
import { useStore } from "@/store/products.state";
import CentralContainer from "@/components/CentralContainer";

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
  const setOfertas = useStore((state) => state.setOfertas)
  const [contador, setContador] = useState<number>(cronometro.getContador());
  console.log(cronometro.getContador())
  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/v1/ofertas");
      const data = await response.json();
      setOfertas(data);
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
        <title>La tiendita de Walter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.stage}>
        <div className={styles.backdropArc} />
        <section className={styles.board}>
        <OfertasDestacadas styles={styles} featured={featured}/>

        <CentralContainer styles={styles} featured={featured} />

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
