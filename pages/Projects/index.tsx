import React from "react";
import { Card, Image, Button, Icon, Segment, Header } from "semantic-ui-react";

import { DeploymentState, Repository } from "../api/generated/graphql";
import { useGithubApi } from "../api/githubClient";
import styles from "../../styles/Projects.module.css";
import BarChart from "./components/BarChart";
import { gql } from "graphql-request";

const REPOSITORIES_LISTING_DOCUMENT = gql`
  {
    user(login: "KseniiaChumachenko") {
      repositories(
        last: 40
        orderBy: { field: UPDATED_AT, direction: DESC }
        privacy: PUBLIC
      ) {
        totalCount
        nodes {
          name
          createdAt
          updatedAt
          description
          url
          languages(last: 10) {
            edges {
              #              cursor
              node {
                name
                color
                id
              }
              size
            }
          }
          deployments(last: 1) {
            nodes {
              payload
              state
            }
          }
        }
      }
    }
  }
`;

function Projects() {
  const { data, error } = useGithubApi(REPOSITORIES_LISTING_DOCUMENT);

  const handleOpenLinkInNewTab = (link: string) => () =>
    window.open(link, "_blank");

  return (
    <div className={styles.container}>
      <Header className={styles.sectionName}>Projects</Header>
      {data ? (
        <Card.Group itemsPerRow={4} stackable={true}>
          {data?.user.repositories.nodes.map(
            (
              {
                name,
                description,
                createdAt,
                updatedAt,
                url,
                languages,
                deployments,
              }: Repository,
              index: number
            ) => (
              <Card key={index}>
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src="/images/avatar/large/steve.jpg"
                  />
                  <Card.Header>{name}</Card.Header>
                  <Card.Meta>Created at: {createdAt}</Card.Meta>
                  <Card.Meta>Last updated: {updatedAt}</Card.Meta>
                  <Card.Description>{description}</Card.Description>
                  <Card.Description>
                    <BarChart
                      items={languages.edges.map((e) => {
                        return {
                          label: e.node.name,
                          value: e.size,
                          backgroundColor: e.node.color,
                        };
                      })}
                    />
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    {deployments?.nodes?.map(
                      (d) =>
                        d.state === DeploymentState.Active && (
                          <Button
                            basic
                            color="green"
                            onClick={handleOpenLinkInNewTab(
                              JSON.parse(d.payload).web_url
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
          )}
        </Card.Group>
      ) : (
        error && (
          <Segment color={"red"} size={"huge"}>
            <Header icon>
              <Icon name="github" />
              Seems like Git-hub API is currently not available :(
            </Header>
          </Segment>
        )
      )}
    </div>
  );
}

export default Projects;
