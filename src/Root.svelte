<script lang="ts">
  import Router from 'svelte-spa-router'
  import routes from '~/router/routes'
  import { Header } from '~/components'
  // import ApolloClient from 'apollo-boost'
  import { ApolloClient, ApolloCache } from '@apollo/client'
  import { InMemoryCache } from 'apollo-cache-inmemory'
  import { setClient } from 'svelte-apollo'
  import 'bulma/css/bulma.css'
  const client = new ApolloClient({
    cache: new InMemoryCache() as ApolloCache<any>,
    uri: 'http://localhost:7711/graphql'
  })

  setClient(client);
</script>

<Header/>
<Router {routes}/>
