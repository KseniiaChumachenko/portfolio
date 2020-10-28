import { gql } from "graphql-request";

export const PROJECT_COLUMN_DOCUMENT = gql`
  {
    user(login: "KseniiaChumachenko") {
      project(number: 1) {
        columns(last: 30) {
          nodes {
            name
            cards(last: 30) {
              nodes {
                note
              }
            }
          }
        }
      }
    }
  }
`;
