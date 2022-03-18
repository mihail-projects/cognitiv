<script>
    import { onMount } from "svelte";
    import auth from "../../authService";
    import { isAuthenticated, user } from "../../store";

    let auth0Client;

    onMount(async () => {
        auth0Client = await auth.createClient();
        isAuthenticated.set(await auth0Client.isAuthenticated());
        user.set(await auth0Client.getUser());

        if (!$isAuthenticated && typeof window !== "undefined") {
            window.location.href = "/";
        }
    });
</script>

<div class="top">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="/logo2.png" width="55px" />
    <span
        on:click={() => (window.location.href = "/dashboard/projects")}
        class="material-icons icon">folder</span
    >
    <span
    on:click={() => (window.location.href = "/dashboard/files")}
    class="material-icons icon">description</span
>
</div>
<div class="bottom">
    <span class="material-icons icon" on:click={() => auth.logout(auth0Client)}>logout</span>
</div>

<slot />

<style>
    .top {
        width: 85px;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 20px;
        gap: 20px;
    }
    .bottom {
        width: 85px;
        position: absolute;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        bottom: 20px;
        gap: 20px;
    }
    .icon {
        font-size: 40px;
        user-select: none;
    }
    .icon:hover {
        color: white;
        cursor: pointer;
    }
</style>
