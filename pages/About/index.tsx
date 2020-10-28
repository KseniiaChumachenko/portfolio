import React from "react";
import { Header } from "semantic-ui-react";

import styles from "../../styles/About.module.css";
import SocialButtons from "../components/SocialButtons";
import BumpChart from "./components/BumpChart";
import { useGithubApi } from "../api/githubClient";
import { PROJECT_COLUMN_DOCUMENT } from "../api/documents/PROJECT_COLUMN_DOCUMENT";

function About() {
  const { data } = useGithubApi(PROJECT_COLUMN_DOCUMENT);

  const remappedData = data?.user.project.columns.nodes
    .find((n) => n.name === "Education & Experience")
    .cards.nodes.map((c) => JSON.parse(JSON.parse(JSON.stringify(c.note))));

  console.log(remappedData);

  // TODO:  remap data for chart so that each month/year contain value
  const extractChartData = remappedData.map((item) => ({
    id: item.name,
    x: "",
    y: "",
  }));

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
      <div style={{ height: 300 }}>
        <BumpChart />
      </div>
    </div>
  );
}

export default About;
