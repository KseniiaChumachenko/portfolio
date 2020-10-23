import React from "react";
import { Button, Card, Header, Icon, Image } from "semantic-ui-react";

import REPOSITORIES_LISTING_DOCUMENT from "../api/documents/REPOSITORIES_LISTING_DOCUMENT";
import { DeploymentState, Repository } from "../api/generated/graphql";
import { useGithubApi } from "../api/githubClient";

import BarChart from "./components/BarChart";
import ErrorCard from "./components/ErrorCard";
import PlaceholderCard from "./components/PlaceholderCard";
import styles from "../../styles/Projects.module.css";

const handleOpenLinkInNewTab = (link: string) => () =>
  window.open(link, "_blank");

const parsePayload = (payload: string) => JSON.parse(JSON.parse(payload));

const parseDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleString("en-GB", { timeZone: "UTC" });
};

function Projects() {
  const { data, error } = useGithubApi(REPOSITORIES_LISTING_DOCUMENT);

  if (error) {
    return <ErrorCard />;
  }

  return (
    <div className={styles.container}>
      <Header as={"h1"}>Projects</Header>
      <Card.Group itemsPerRow={4} stackable={true}>
        {data
          ? data.user.repositories.nodes.map(
              (
                {
                  name,
                  description,
                  createdAt,
                  updatedAt,
                  url,
                  languages,
                  deployments,
                  openGraphImageUrl,
                }: Repository,
                index: number
              ) => (
                <Card
                  key={index}
                  onClick={() => {
                    console.log("TODO: open modal"); // TODO: open modal
                  }}
                >
                  <Image wrapped ui={false} src={openGraphImageUrl} />
                  <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>Created at: {parseDate(createdAt)}</Card.Meta>
                    <Card.Meta>Last updated: {parseDate(updatedAt)}</Card.Meta>
                    <Card.Description>
                      <BarChart
                        items={languages.edges.map((e) => {
                          return {
                            label: e.node.name,
                            value: e.size,
                            backgroundColor: e.node.color,
                          };
                        })}
                        style={{ marginTop: 16 }}
                      />
                    </Card.Description>
                    <Card.Description>{description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      {deployments?.nodes?.map(
                        (d, index) =>
                          d.state === DeploymentState.Active && (
                            <Button
                              key={index}
                              basic
                              color="green"
                              onClick={handleOpenLinkInNewTab(
                                parsePayload(d.payload).web_url
                              )}
                            >
                              Open deployment
                            </Button>
                          )
                      )}
                      <Button
                        icon
                        labelPosition="left"
                        color="grey"
                        onClick={handleOpenLinkInNewTab(url)}
                      >
                        <Icon name="github" />
                        View on GitHub
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              )
            )
          : [...Array(6)].map((i, index) => <PlaceholderCard key={index} />)}
      </Card.Group>
    </div>
  );
}

export default Projects;
