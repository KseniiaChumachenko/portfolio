import React from "react";
import Head from "next/head";
import Profile from "./profile";
import Projects from "./Projects";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kseniia Chumachenko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Profile />
        <Projects />
      </main>
    </div>
  );
}
