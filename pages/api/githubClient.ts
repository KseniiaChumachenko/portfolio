import { GraphQLClient } from "graphql-request/dist";
import useSWR from "swr";

export const client = new GraphQLClient(process.env.NEXT_PUBLIC_GITHUB_API, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
});

export const githubFetcher = (query) => client.request(query);

export function useGithubApi(query) {
  const res = useSWR(query, githubFetcher);
  return res;
}
