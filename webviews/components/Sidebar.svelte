<script lang="ts">
	import { fly } from 'svelte/transition'
	import Countdown from './Countdown.svelte';
	let done = false;
    let userInput = 0
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


<h2>How many minutes do you want to focus?</h2>

<input bind:value={userInput} />
<button
    on:click={() => {
        tsvscode.postMessage({ type: 'onInfo', value: 'info message' });
    }}>Start now</button>

<div class="container">
	<div class="inner">
		<Countdown countdown={360} on:completed="{() => done = true}" />

		{#if done}
			<h2 in:fly>You have been working hard! Time to exercise!</h2>	
		{/if}		
	</div>
</div>
