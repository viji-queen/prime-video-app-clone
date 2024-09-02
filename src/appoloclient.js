// src/apolloClient.js

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graph.imdbapi.dev/v1', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
