import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { apolloProvider } from './api/graphql/apollo';

const app = createApp(App);

app.use(apolloProvider);

app.mount('#app');
