import ApolloClient, { InMemoryCache } from 'apollo-boost';
import VueApollo from 'vue-apollo';

const cache = new InMemoryCache();

// apollo com cache
const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache
});

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
