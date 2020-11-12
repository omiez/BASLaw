// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// Helpers
// import colors from 'vuetify/es5/util/colors'

import VueFormulate from '@braid/vue-formulate'

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
      uri: '/api/graphql',
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
  // Vue.use(Vuetify, {
  //   theme: {
  //     primary: colors.red.darken1, // #E53935
  //     secondary: colors.red.lighten4, // #FFCDD2
  //     accent: colors.indigo.base // #3F51B5
  //   }
  // });
  Vue.use(VueFormulate, {
    library: {
      cityAutocomplete: {
        classification: 'text',
        component: 'cityAutocomplete'
      }
    }
  });
  Vue.use(AsyncComputed);
  Vue.use(VueApollo);
  options.apolloProvider = apolloProvider;
  // options.vuetify = new Vuetify({});
  router.mode = 'history';
}