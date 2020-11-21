<script lang="ts">
	import { count, newCount } from './store/NumberStore'
	import LifeCycle from './LifeCycle.svelte'
	import Tick from './Tick.svelte'

	export let name: string;
	export let age: number

	let ddd: string;

	function clickHello() {
		alert("Hello")
	}
</script>

<main>
	<h1>Hello {name}! {age}</h1>
	<button on:click={() => $count += 1}>클릭d</button>
	<button on:click={newCount.increment}>new클릭</button>

	<h2>{$count}: {$newCount}</h2>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
<!--	<LifeCycle/>-->
</main>
<Tick/>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
