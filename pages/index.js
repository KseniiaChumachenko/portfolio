import React from "react";
import Head from "next/head";
import About from "./About";
import Projects from "./Projects";
import styles from "../styles/Home.module.css";
import Intro from "./Intro";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kseniia Chumachenko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Intro />
        <About />
        <Projects />
      </main>
    </div>
  );
}
