<script lang="ts">
  import {fade} from 'svelte/transition'
  import {count, newCount} from './store/NumberStore'
  import LifeCycle from './LifeCycle.svelte'
  import Tick from './Tick.svelte'
  import Router from 'svelte-spa-router'
  import routes from './router/routes'
  // import Headers from './components/Header.svelte'

  export let name: string;
  export let age: number

  let ddd: string;
  let visible: boolean = true;
  let toggle: boolean = false;

  function clickHello() {
    alert("Hello")
  }
</script>

{#if toggle}
  <Router {routes}/>
{/if}
{name}: {age}
<!--<Headers/>-->
<!--<main>
	<h1>Hello {name}! {age}</h1>
	<button on:click={() => $count += 1}>클릭d</button>
	<button on:click={newCount.increment}>new클릭</button>
	<label>
		<input type="checkbox" bind:checked={visible}/>
		Visible
	</label>

	<h2>{$count}: {$newCount}</h2>
	{#if visible}
		<p transition:fade>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{/if}
</main>
<Tick/>-->
