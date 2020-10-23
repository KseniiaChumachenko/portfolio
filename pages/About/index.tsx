import React from "react";
import { Header } from "semantic-ui-react";

import styles from "../../styles/About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <Header as={"h1"}>About</Header>
      <Header as={"h2"}>A brief history</Header>
    </div>
  );
}

export default About;
