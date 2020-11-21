import wrap from 'svelte-spa-router/wrap'
import * as Page from '~/page'

const routes = {
  '/': wrap({
    asyncComponent: () => import('~/page/Home.svelte'),
    loadingComponent: Page.Loading,
    loadingParams: {
      message: 'Home....'
    }
  }),
  '/about': wrap({
    asyncComponent: () => import('~/page/About.svelte'),
    loadingComponent: Page.Loading,
    loadingParams: {
      message: 'About....'
    }
  }),
  '/blog': wrap({
    asyncComponent: () => import('~/page/Blog.svelte'),
    loadingComponent: Page.Loading,
    loadingParams: {
      message: 'Blog.....'
    }
  }),
  '/chat/message': wrap({
    asyncComponent: () => import('~/page/ChatMessage.svelte'),
    loadingComponent: Page.Loading,
    loadingParams: {
      message: 'ChatMessage.....'
    }
  })
}

export default routes
