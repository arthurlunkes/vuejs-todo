import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { provide } from 'vue';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export function provideApollo(app) {
  app.provide(DefaultApolloClient, apolloClient);
}

export default apolloClient;
