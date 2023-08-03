import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../src/Navbar";
import Sidebar from "../src/Sidebar";
import Dashboard from "../src/Dashboard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neobase</title>
        <meta name="description" content="Created by Indraan S Toor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Sidebar />
        <Dashboard />
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
