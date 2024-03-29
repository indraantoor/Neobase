import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import Dashboard from "../src/components/Dashboard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neobase | Indraan S Toor</title>
        <meta name="description" content="Created by Indraan S Toor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Sidebar />
        <Dashboard />
      </main>
    </div>
  );
}
