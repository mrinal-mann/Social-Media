import { GraphQLClient } from "graphql-request";

// Utility function to get the token
const getToken = () => {
  if (typeof window !== "undefined") {
    // This code runs on the client-side
    return window.localStorage.getItem('__social_media_token');
  }
  return null; // Server-side or token not found
};

export const graphqlClient = new GraphQLClient("http://localhost:3000/graphql", {
  headers: () => {
    const token = getToken();
    return {
      Authorization: token ? `Bearer ${token}` : '',
    };
  },
});
