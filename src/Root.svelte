<script>
  import Router from 'svelte-spa-router'
  import routes from '~/router/routes'
  import { Header } from '~/components'
</script>

<Header/>
<Router {routes}/>
