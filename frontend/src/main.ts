import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { apolloClient } from './api/graphql/apollo';

const app = createApp(App);

app.provide(DefaultApolloClient, apolloClient);

app.mount('#app');
