<script lang="ts">
	import { createEventDispatcher } from 'svelte'; 	
	import { onMount, onDestroy, afterUpdate } from 'svelte';
    let page: 'home' | 'dumbells' | 'jumprope' = tsvscode.getState()?.page || 'home';
    let started = tsvscode.getState()?.started || false;
	let countdown = tsvscode.getState()?.countdown || 0;
    let countdumbbells = tsvscode.getState()?.countdumbbells || 0;
    let countjumprope = tsvscode.getState()?.countjumprope || 0;
	
	let timer = null;
    
	$: hours = Math.floor(countdown / 3600);
	$: minutes = Math.floor((countdown % 3600) / 60);
	$: seconds = countdown % 60;

    $: {
        tsvscode.setState({page, started, countdown, countdumbbells, countjumprope});
    }
	
	onMount(() => {
		timer = setInterval(() => {
			countdown += 1;
	  }, 1000);
	})
	
	onDestroy(() => {
		if (timer) {
			clearInterval(timer);
		}
	})
	
</script>

<style>
    .timer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

</style>
<div class="timer">
    <div>Time elapsed: </div>
    <div class="num">
        {Math.floor(hours / 10)}{Math.floor(hours % 10)}:{Math.floor(minutes / 10)}{Math.floor(minutes % 10)}:{Math.floor(seconds / 10)}{Math.floor(seconds % 10)}
    </div>
</div>
