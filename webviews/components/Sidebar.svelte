<script lang="ts">
	import { onMount } from 'svelte';
    let page: 'home' | 'dumbells' | 'jumprope' = tsvscode.getState()?.page || 'home';
    let started = tsvscode.getState()?.started || false;
    let countdown = tsvscode.getState()?.countdown || 0;
    let dumbbells = ['https://i.ibb.co/Z2S3zrS/1.png' , 'https://i.ibb.co/7zYcMgc/2.png' , 'https://i.ibb.co/cJThrmp/3.png' , 'https://i.ibb.co/dtf805F/4.png' , 'https://i.ibb.co/wNSj4Ds/8.png', 'https://i.ibb.co/qmSKDj1/7.png' , 'https://i.ibb.co/3cxCncD/5.png' , 'https://i.ibb.co/tbYdv5R/6.png' ,  'https://i.ibb.co/YQnMHnv/9.png', 'https://i.ibb.co/8McTXH7/10.png', 'https://i.ibb.co/VBc2YVP/11.png', 'https://i.ibb.co/DgT1SKb/12.png',
'https://i.ibb.co/Lh76VKS/13.png' , 'https://i.ibb.co/Hn9FvGb/14.png' , 'https://i.ibb.co/TgG1L2D/15.png'];
    let countdumbbells = tsvscode.getState()?.countdumbbells || 0;
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
    let countjumprope = tsvscode.getState()?.countjumprope || 0;
    $: hours = Math.floor(countdown / 3600);
	$: minutes = Math.floor((countdown % 3600) / 60);
	$: seconds = countdown % 60;
    let timer = null
    console.log(page, started, countdown, countdumbbells, countjumprope)

    $: {
        tsvscode.setState({page, started, countdown, countdumbbells, countjumprope});
    }

    onMount(() => {
        if (!timer && started) {
            timer = setInterval(() => {
                countdown += 1;
            }, 1000);
        }
	})

    function handleStart() {
        started = true; 
        countdown = 0; 
        countdumbbells = 0; 
        countjumprope = 0
        if (!timer) {
            timer = setInterval(() => {
                countdown += 1;
            }, 1000);
        }
    }

    function handleEnd() {
        let hours = Math.floor(countdown / 3600);
	    let minutes = Math.floor((countdown % 3600) / 60);
	    let seconds = countdown % 60;
        let cals = Math.floor(countdumbbells * 0.001) + Math.floor(Math.floor(countjumprope / 85) * 0.02);
        tsvscode.postMessage({type: 'onInfo', value: `You have exercised for ${hours}h ${minutes}m ${seconds}s and burned ${cals} cal. Good job!`});
        
        if (timer) {
			clearInterval(timer);
            timer = null;
		}
        
        started = false; 
        page = 'home'; 
        countdown = 0; 
        countdumbbells = 0; 
        countjumprope = 0;
        
    }
</script>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.inner, h3 {
		text-align: center;
	}

    button {
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .empty {
        height: 100px;
    }

    .timer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

</style>

{#if started}
    <div class="timer">
        <div>Time elapsed: </div>
        <div class="num">
            {Math.floor(hours / 10)}{Math.floor(hours % 10)}:{Math.floor(minutes / 10)}{Math.floor(minutes % 10)}:{Math.floor(seconds / 10)}{Math.floor(seconds % 10)}
        </div>
    </div>
    <button on:click={() => handleEnd()}>End exercise</button>
    {#if page !== 'home'}
        <button on:click={() => {page = 'home'}}>Back to menu</button>
    {/if}
    
    <!-- <div class="empty"></div> -->
{/if}

{#if page === 'home'}
    {#if started}
        <h3>Choose your exercise!</h3>

        <button on:click={() => {page = 'dumbells'}}>Lift dumbells</button>
        <button on:click={() => {page = 'jumprope'}}>Jump rope</button>
    {:else} 
        <h2>Welcome to VSGym!</h2>
        <button on:click={() => handleStart()}>Start exercising</button>
    {/if}
{/if}


<div class="container">
	<div class="inner">

        {#if page === 'dumbells'}
            <!-- <hr class="solid" /> -->
            <br />
            <img src={dumbbells[countdumbbells % 15]} alt="dumbells{countdumbbells % 15}" />
            <br />
            <br />
            <div>You have lifted the dumbbells {Math.floor(countdumbbells / 14)} times ({Math.floor(1000 / 14)} lift = 1 calorie)</div>
            <br />
            <button on:click={() => {countdumbbells = countdumbbells + 1;}}>Lift the Dumbbells</button>
            <br />
            <br />
            <div>You have burn {Math.floor(countdumbbells * 0.001)} calories from <strike>clicking the mouse</strike> lifting the dumbbells.</div>
            <br />
        {/if}
        {#if page === 'jumprope'}
            <!-- <hr class="solid" /> -->
            <br />
            <div>Hover your mouse in the picture to jump!</div>
            <br />
            <img src={jumprope[Math.floor(countjumprope / 5) % 31]} on:mousemove={() => {countjumprope = countjumprope + 1;}} alt="jumprope{Math.floor(countjumprope / 5) % 31}"/>
            <br />
            <br />
            <div>You have jumped rope {Math.floor(countjumprope / 85)} times (50 jump rope = 1 calorie)</div> 
            <br />
            <div>You have burn {Math.floor(Math.floor(countjumprope / 85) * 0.02)} calories from <strike>moving the mouse</strike> jump rope.</div>
            <!-- <hr class="solid" /> -->
        {/if}
	</div>
</div>
