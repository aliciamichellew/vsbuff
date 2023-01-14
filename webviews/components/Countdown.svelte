<script lang="ts">
	import { createEventDispatcher } from 'svelte'; 	
	import { onMount, onDestroy, afterUpdate } from 'svelte';
	import { tweened } from 'svelte/motion';
	export let countdown = 0;
	const dispatch = createEventDispatcher();
	
	let timer = null;
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();
	$: minutes = Math.floor(countdown / 60);
	$: seconds = countdown % 60;

	let firstH = tweened((9 - Math.floor(Math.floor(countdown / 60) / 10)) * 64, { duration: 300});
	let firstL = tweened((9 - Math.floor(Math.floor(countdown / 60) % 10)) * 64, { duration: 300});
	let secondH = tweened((9 - Math.floor(countdown % 60 / 10)) * 64, { duration: 300 });
	let secondL = tweened((9 - Math.floor(countdown % 60 % 10)) * 64, { duration: 300 });

	const val = tweened(0, { duration: 500 });
	
	onMount(() => {
		timer = setInterval(() => {
			countdown -= 1;
	  }, 1000);
	})
	
	afterUpdate(() => {
		firstH.set((9 - Math.floor(minutes / 10)) * 64);
		firstL.set((9 - Math.floor(minutes % 10)) * 64);
		secondH.set((9 - Math.floor(seconds / 10)) * 64);
		secondL.set((9 - Math.floor(seconds % 10)) * 64);		
	})
	
	onDestroy(() => {
		if (timer) {
			clearInterval(timer);
		}
	})
	
	$: {
		if (countdown === 0) {
			clearInterval(timer);
			timer = null;
			dispatch('completed');
		}
	}
</script>

<style>
	ul {
		display: inline-block;
		list-style: none;
		padding-left: 0;
		height: 47px;
		overflow: hidden;
	}

	.num {
    font-size: 47px;
	}
</style>
<ul>
	{#each numbers as num, i}
  <li class="num" style="transform: translateY(-{$firstH}px);">
   <span>{num}</span>
  </li>
  {/each}
</ul>

<ul>
	{#each numbers as num, i}
  <li class="num" style="transform: translateY(-{$firstL}px);">
   <span>{num}:</span>
  </li>
  {/each}
</ul>

<ul>
	{#each numbers as num, i}
  <li class="num" style="transform: translateY(-{$secondH}px);">
   <span>{num}</span>
  </li>
  {/each}
</ul>

<ul>
	{#each numbers as num, i}
  <li class="num" style="transform: translateY(-{$secondL}px);">
   <span>{num}</span>
  </li>
  {/each}
</ul>