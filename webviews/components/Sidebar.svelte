<script>
	import { fly } from 'svelte/transition'
	import Countdown from './Countdown.svelte';
	let done = false;
</script>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.inner {
		text-align: center;
	}
</style>

<div class="container">
	<div class="inner">
		<Countdown countdown={360} on:completed="{() => done = true}" />

		{#if done}
			<h2 in:fly>時間到！</h2>	
		{/if}		
	</div>
</div>
