import { provide } from 'vue';
import { InMemoryCache } from '@apollo/client/cache';
import { ApolloClient, ApolloLink, createHttpLink } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';

export default function () {
  const cache = new InMemoryCache();
  const enchancedFetch = (url: string, init: { headers: any }) => fetch(url, {
    ...init,
    credentials: 'same-origin',
    headers: {
      ...init.headers,
    },
  }).then((response) => response);

  const link = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://127.0.0.1:4000/graphql',
    fetchOptions: {
      mode: 'cors',
    },
    fetch: enchancedFetch,
  });

  const apolloClient = new ApolloClient({
    assumeImmutableResults: true,
    link: ApolloLink.from([
      link,
    ]),
    cache,
  });

  apolloClient.defaultOptions.query = {
    fetchPolicy: 'no-cache',
  };

  provide(DefaultApolloClient, apolloClient);
}
