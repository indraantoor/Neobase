import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neobase</title>
        <meta name="description" content="Created by Indraan S Toor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>CONTENT</main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
