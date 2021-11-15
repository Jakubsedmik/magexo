import Vue from 'vue';
import App from './App.vue';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import routes from './routes.js';

Vue.use(VueRouter);

const httpLink = createHttpLink({
  uri: 'https://venia.magento.com/graphql',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

Vue.config.productionTip = false;


Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  apolloProvider,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
