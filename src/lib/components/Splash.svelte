<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    export let ended = false;
    export let exitAnimation = false;


    import logo from '$lib/images/AppImages/ios/256.png';
    
    onMount(() => {
        setTimeout(() => {
            ended = true;
        }, 4000);
        setTimeout(() => {
            exitAnimation = true;
        }, 1900);
    });
</script>


<div out:fade class="absolute flex h-screen w-screen items-center justify-center bg-[#794fea]" class:in-circle-hesitate={!exitAnimation}>
    <img src={logo} width="200px" alt="Tragos Locos logo">
</div>

<style>
    @keyframes circle-in-hesitate {
        0% {
            clip-path: circle(0%);
        }
        40% {
            clip-path: circle(40%);
        }
        100% {
            clip-path: circle(125%);
        }
    }

    .in-circle-hesitate {
        animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-in-hesitate both;
    }
    
    @keyframes wipe-cinematic-out {
        0% {
            clip-path: inset(0 0 0 0);
        }
        30%, 70% {
            clip-path: inset(10% 0 10% 0);
        }
        100% {
            clip-path: inset(100% 0 100% 0);
        }
    }
    
    .out-wipe-cinematic {
        animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-cinematic-out both;
    }

    @keyframes circle-out-center {
        from {
            clip-path: circle(125%);
            
        }
        to {
            clip-path: circle(0%);
        }
    }

    .out-circle-center {
        animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-out-center both;
    }
</style>