import React from "react";
import { Header } from "semantic-ui-react";

import styles from "../../styles/About.module.css";
import SocialButtons from "../components/SocialButtons";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header as={"h1"}>About</Header>
        <SocialButtons
          onGitHubLinkClick={() => {
            console.log("click");
          }}
          onLinkedInLinkClick={() => {
            console.log("click");
          }}
          onFacebookLinkClick={() => {
            console.log("click");
          }}
          onEmailFormClick={() => {
            console.log("click");
          }}
          className={styles.socialButtons}
        />
      </div>
      <Header as={"h2"}>A brief history</Header>
    </div>
  );
}

export default About;
