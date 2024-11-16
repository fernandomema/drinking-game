<script>
    import { onMount } from "svelte";
    import PageContainer from "../PageContainer.svelte";
    import { goto } from "$app/navigation";

    onMount(async () => {
        await new Promise((resolve) => setTimeout(resolve, 2500));
        goto('/add-players', { replaceState: true });
    });
</script>
<PageContainer>
    <div class="h-full w-full bg-gradient-to-b from-[#794fea] via-white via-[60px] to-white">
        <div class="in-circle-hesitate absolute flex h-screen w-screen animate-circle-in-hesitate items-center justify-center bg-[#794fea]">
            <img src="/AppImages/ios/256.png" width="200px" alt="">
        </div>
    </div>
</PageContainer>