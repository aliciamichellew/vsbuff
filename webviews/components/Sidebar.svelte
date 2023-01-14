<script lang="ts">
	import { fly } from 'svelte/transition'
	import Countdown from './Countdown.svelte';
	let done = false;
    let userInput = 0
    let dumbbells = ['https://i.ibb.co/Z2S3zrS/1.png' , 'https://i.ibb.co/7zYcMgc/2.png' , 'https://i.ibb.co/cJThrmp/3.png' , 'https://i.ibb.co/dtf805F/4.png' , 'https://i.ibb.co/wNSj4Ds/8.png', 'https://i.ibb.co/qmSKDj1/7.png' , 'https://i.ibb.co/3cxCncD/5.png' , 'https://i.ibb.co/tbYdv5R/6.png' ,  'https://i.ibb.co/YQnMHnv/9.png', 'https://i.ibb.co/8McTXH7/10.png', 'https://i.ibb.co/VBc2YVP/11.png', 'https://i.ibb.co/DgT1SKb/12.png',
'https://i.ibb.co/Lh76VKS/13.png' , 'https://i.ibb.co/Hn9FvGb/14.png' , 'https://i.ibb.co/TgG1L2D/15.png'];
;   let countdumbbells = 0
    let jumprope = [
'https://i.ibb.co/KKnFZXB/frame-00-delay-0-04s.png',
'https://i.ibb.co/WHfzxtT/frame-01-delay-0-04s.png',
'https://i.ibb.co/hs6Qdhb/frame-02-delay-0-04s.png',
'https://i.ibb.co/pLhVmVp/frame-03-delay-0-04s.png',
'https://i.ibb.co/47sqTy4/frame-04-delay-0-04s.png',
'https://i.ibb.co/x84mVNp/frame-05-delay-0-04s.png',
'https://i.ibb.co/3fQFjWJ/frame-06-delay-0-04s.png',
'https://i.ibb.co/zHXtGmH/frame-07-delay-0-04s.png',
'https://i.ibb.co/N78W4hF/frame-08-delay-0-04s.png',
'https://i.ibb.co/JpMWLtZ/frame-09-delay-0-04s.png',
'https://i.ibb.co/HTRgJry/frame-10-delay-0-04s.png',
'https://i.ibb.co/0Cpg1Nw/frame-11-delay-0-04s.png',
'https://i.ibb.co/sp7qpXF/frame-12-delay-0-04s.png',
'https://i.ibb.co/gP9J0Ng/frame-13-delay-0-04s.png',
'https://i.ibb.co/RQrXS8n/frame-14-delay-0-04s.png',
'https://i.ibb.co/sbGLDJr/frame-15-delay-0-04s.png',
'https://i.ibb.co/FxhgSJ3/frame-16-delay-0-04s.png',
'https://i.ibb.co/7YZp59k/frame-17-delay-0-04s.png',
'https://i.ibb.co/wCvG2LW/frame-18-delay-0-04s.png',
'https://i.ibb.co/6RcpGvS/frame-19-delay-0-04s.png',
'https://i.ibb.co/7N88z3w/frame-20-delay-0-04s.png',
'https://i.ibb.co/C7nd8jW/frame-21-delay-0-04s.png',
'https://i.ibb.co/89Fyhz9/frame-22-delay-0-04s.png',
'https://i.ibb.co/q0R7Ssy/frame-23-delay-0-04s.png',
'https://i.ibb.co/ZN7QgWf/frame-24-delay-0-04s.png',
'https://i.ibb.co/sKBd595/frame-25-delay-0-04s.png',
'https://i.ibb.co/gdgNRBM/frame-26-delay-0-04s.png',
'https://i.ibb.co/LPyyNhK/frame-27-delay-0-04s.png',
'https://i.ibb.co/PjywtSL/frame-28-delay-0-04s.png',
'https://i.ibb.co/xgDz2tx/frame-29-delay-0-04s.png',
'https://i.ibb.co/2kcCWwp/frame-30-delay-0-04s.png']
    let countjumprope = 0
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

        <hr class="solid" />
        <br />
        <img src={dumbbells[countdumbbells % 15]} />
        <br />
        <br />
        <div>You have lifted the dumbbells {Math.floor(countdumbbells / 14)} times ({Math.floor(1000 / 14)} lift = 1 calorie)</div>
        <br />
        <button on:click={() => {countdumbbells++;}}>Lift the Dumbbells</button>
        <br />
        <br />
        <div>You have burn {Math.floor(countdumbbells * 0.001)} calories from <strike>clicking the mouse</strike> lifting the dumbbells.</div>
        <br />
        <hr class="solid" />
        <br />
        <img src={jumprope[Math.floor(countjumprope / 5) % 31]} on:mousemove={() => {countjumprope++;}}/>
        <br />
        <br />
        <div>You have jumped rope {Math.floor(countjumprope / 85)} times (50 jump rope = 1 calorie)</div> 
        <br />
        <div>You have burn {Math.floor(Math.floor(countjumprope / 85) * 0.02)} calories from <strike>moving the mouse</strike> jump rope.</div>
        <hr class="solid" />
	</div>
</div>
