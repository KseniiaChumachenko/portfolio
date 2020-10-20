import { gql } from "graphql-request/dist";

export const REPOSITORIES_LISTING_DOCUMENT = gql`
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
