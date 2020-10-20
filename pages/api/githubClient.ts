import { GraphQLClient } from "graphql-request/dist";
import useSWR from "swr";

const GITHUB_TOKEN = "00c43de6378baee3fae5b3188fcd539314eb8ca9";
const ENDPOINT = "https://api.github.com/graphql";

export const client = new GraphQLClient(ENDPOINT, {
  headers: {
    authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

export const githubFetcher = (query) => client.request(query);

export function useGithubApi(query) {
  const res = useSWR(query, githubFetcher);
  return res;
}
