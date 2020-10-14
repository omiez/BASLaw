// import Vuetify from 'vuetify'
// import '../node_modules/vuetify/dist/vuetify.css'
import VueFormulate from '@braid/vue-formulate'
// scss/main.scss
import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss';

import AsyncComputed from 'vue-async-computed'

import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

import { onError } from "@apollo/client/link/error";

import fetch from 'node-fetch';

const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: process.env.BACKEND_URL + '/graphql',
      credentials: 'same-origin',
      fetch: fetch
    })
  ]),
  cache: new InMemoryCache(),
});

import VueApollo from 'vue-apollo'
// 
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})


// async function is also supported, too
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer // is this enhancement applied in server-rendering or client
}) => {
  // ...apply enhancements to the app
  // Vue.use(Vuetify)
  Vue.use(VueFormulate, {
    library: {
      cityAutocomplete: {
        classification: 'text',
        component: 'cityAutocomplete'
      }
    }
  })
  Vue.use(AsyncComputed);
  Vue.use(VueApollo);
  options.apolloProvider = apolloProvider;
  // options.vuetify = new Vuetify({});
}