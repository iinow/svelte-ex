<script>
  import { link } from 'svelte-spa-router'
</script>

<header>
  <ul>
    <li><a href="/" use:link>Home</a></li>
    <li><a href="/about" use:link>About</a></li>
    <li><a href="/blog" use:link>Blog</a></li>
    <li><a href="/chat/message" use:link>ChatMessage</a></li>
  </ul>
</header>
