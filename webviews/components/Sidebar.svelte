<script lang="ts">
	import { fly } from 'svelte/transition'
	import Countdown from './Countdown.svelte';
	let done = false;
    let userInput = 0
    let images = ['https://i.ibb.co/Z2S3zrS/1.png' , 'https://i.ibb.co/7zYcMgc/2.png' , 'https://i.ibb.co/cJThrmp/3.png' , 'https://i.ibb.co/dtf805F/4.png' , 'https://i.ibb.co/wNSj4Ds/8.png', 'https://i.ibb.co/qmSKDj1/7.png' , 'https://i.ibb.co/3cxCncD/5.png' , 'https://i.ibb.co/tbYdv5R/6.png' ,  'https://i.ibb.co/YQnMHnv/9.png', 'https://i.ibb.co/8McTXH7/10.png', 'https://i.ibb.co/VBc2YVP/11.png', 'https://i.ibb.co/DgT1SKb/12.png',
'https://i.ibb.co/Lh76VKS/13.png' , 'https://i.ibb.co/Hn9FvGb/14.png' , 'https://i.ibb.co/TgG1L2D/15.png'];
;   let count = 0
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

        <img src={images[count % 15]} />
        <br />
        <br />
        <div>You have lifted the dumbbells {Math.floor(count / 14)} times ({Math.floor(1000 / 14)} lift = 1 calorie)</div>
        <br />
        <button on:click={() => {count++;}}>Lift the Dumbbells</button>
        <br />
        <br />
        <div>You have burn {Math.floor(count * 0.001)} calories from <strike>clicking the mouse</strike> lifting the dumbbells.</div>
	</div>
</div>
