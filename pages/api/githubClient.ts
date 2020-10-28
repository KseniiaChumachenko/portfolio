import { GraphQLClient } from "graphql-request/dist";
import useSWR from "swr";
import { RequestDocument } from "graphql-request/dist/types";

export const client = new GraphQLClient(process.env.NEXT_PUBLIC_GITHUB_API, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
});

export const githubFetcher = (query: RequestDocument, variables: any) =>
  client.request(query, variables);

export function useGithubApi(query) {
  return useSWR(query, githubFetcher);
}
